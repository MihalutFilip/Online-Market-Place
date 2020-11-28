import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public storageService: StorageService) { }
  
  get isLoggedIn() {
    return this.storageService.getLoggedInUser();
  }
}
