import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  private baseApiUrl = `${environment.baseApiUrl}/authorize`;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  public authorizeUser(authRequest) {
    return this.httpClient.post<User>(`${this.baseApiUrl}`, authRequest, { headers: this.headers });
  }
}
