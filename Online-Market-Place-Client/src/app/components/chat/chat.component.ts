import { Component, Input, OnInit } from '@angular/core';
import { ChatView } from 'src/app/enums/chat-view';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { MessagesService } from 'src/app/services/messages.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public chatView = ChatView.Closed;
  public ChatView = ChatView;
  public filteredUsers: User[];
  public filteredMessages: Message[];
  public selectedUser: User;
  public currentUser: User;
  public newMessage: Message = new Message();
  @Input() public users: User[];
  @Input() public messages: Message[];


  constructor(private storageService: StorageService,
    private messageService: MessagesService) { }

  ngOnInit(): void {
    this.filteredUsers = this.users;
    this.currentUser = this.storageService.getLoggedInUser()
  }

  onSearchChange(searchValue: string): void {
    this.filteredUsers = this.users.filter(u => u.username.includes(searchValue));
  }

  selectUser(user) {
    this.selectedUser = user;
    this.filteredMessages = this.messages.filter(m => m.receiverId == this.selectedUser.id || m.senderId == this.selectedUser.id).map(message => {
      (<any>message).isSend = message.receiverId != this.selectedUser.id;
      return message;
    });
    this.chatView = ChatView.Opened;
  }

  sendMessage()
  {
    var content = this.newMessage.content;

    this.newMessage = <Message> {
      content: content,
      receiverId: this.selectedUser.id,
      senderId: this.currentUser.id,
      sendTime: new Date()
    }

    this.messageService.saveMessage(this.newMessage).subscribe(savedMessage => {
      savedMessage.isSend = false;
      this.filteredMessages.push(savedMessage);
      this.messages.push(savedMessage);
      this.newMessage = new Message();
    })
  }
}
