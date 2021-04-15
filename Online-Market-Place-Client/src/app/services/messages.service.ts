import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Message } from "../models/message";

@Injectable({
    providedIn: 'root'
  })
  export class MessagesService {
    private baseApiUrl = `${environment.baseApiUrl}/message`;
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    constructor(private httpClient: HttpClient) { }
  
    public getMessages(): Observable<Message[]> {
      return this.httpClient.get<Message[]>(`${this.baseApiUrl}`);
    }
  
    public saveMessage(message: Message): Observable<any> {
      return this.httpClient.post<any>(`${this.baseApiUrl}`, message, { headers: this.headers });
    }

  }
  