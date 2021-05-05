import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageCommunicationService {
  private messageSubject = new Subject();
  messageObservable$ = this.messageSubject.asObservable();

  constructor() { }

  openChat() {
    this.messageSubject.next();
  }
}
