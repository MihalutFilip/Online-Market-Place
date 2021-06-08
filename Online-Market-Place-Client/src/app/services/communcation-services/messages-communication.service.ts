import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class MessageCommunicationService {
  private messageSubject = new Subject();
  messageObservable$ = this.messageSubject.asObservable();

  constructor() { }

  openChat(user: User = null) {
    this.messageSubject.next(user);
  }
}
