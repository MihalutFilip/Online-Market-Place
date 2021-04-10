import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { StorageService } from './services/storage.service';
import { LoginCommunicationService } from 'src/app/services/communcation-services/login-communication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedUser: User;
  users: User[];

  constructor(private storageService: StorageService,
    private loginCommunicationService: LoginCommunicationService,
    private userService: UsersService) { 

    this.loggedUser = this.storageService.getLoggedInUser();

    if(this.loggedUser)
      this.getUsers();

    this.loginCommunicationService.loginObservable$.subscribe(_ => {
      this.loggedUser = this.storageService.getLoggedInUser();
      this.getUsers();
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users.filter(u => u.id != this.loggedUser.id));
  }
}
