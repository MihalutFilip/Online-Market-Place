import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { StorageService } from './services/storage.service';
import { LoginCommunicationService } from 'src/app/services/communcation-services/login-communication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './services/users.service';
import { MessagesService } from './services/messages.service';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedUser: User;
  users: User[];
  messages: Message[];

  constructor(private storageService: StorageService,
    private loginCommunicationService: LoginCommunicationService,
    private userService: UsersService,
    private messageService: MessagesService) {

    this.loggedUser = this.storageService.getLoggedInUser();

    if (this.loggedUser)
      this.getUsersAndMessages();

    this.loginCommunicationService.loginObservable$.subscribe(_ => {
      this.loggedUser = this.storageService.getLoggedInUser();
      this.getUsersAndMessages();
    });
  }

  getUsersAndMessages() {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
      this.userService.getUsers().subscribe(users => this.users = users.filter(u => u.id != this.loggedUser.id));
    });
  }
}
