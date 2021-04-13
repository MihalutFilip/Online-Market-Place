import { Component, Input, OnInit } from '@angular/core';
import { ChatView } from 'src/app/enums/chat-view';
import { User } from 'src/app/models/user';
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
  public selectedUser: User;
  @Input() public users: User[];

  constructor() { }

  ngOnInit(): void {
    this.filteredUsers = this.users;
  }

  onSearchChange(searchValue: string): void {
    this.filteredUsers = this.users.filter(u => u.username.includes(searchValue));
  }

  selectUser(user) {
    this.chatView = ChatView.Opened;
    console.log(this.chatView);
    this.selectedUser = user;
  }
}
