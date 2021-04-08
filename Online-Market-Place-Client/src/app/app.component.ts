import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { StorageService } from './services/storage.service';
import { LoginCommunicationService } from 'src/app/services/communcation-services/login-communication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedUser: User;

  constructor(private storageService: StorageService,
    private loginCommunicationService: LoginCommunicationService) { 
    this.loggedUser = this.storageService.getLoggedInUser();
    this.loginCommunicationService.loginObservable$.subscribe(_ => {
      this.loggedUser = this.storageService.getLoggedInUser();
    });
  }
}
