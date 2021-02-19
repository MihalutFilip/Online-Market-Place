import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseApiUrl = `${environment.baseApiUrl}/user`;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseApiUrl}`);
  }

  public saveUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.baseApiUrl}`, user, { headers: this.headers });
  }

  public updateUser(user: User): Observable<any> {
    return this.httpClient.put<any>(`${this.baseApiUrl}`, user, { headers: this.headers });
  }

  public registerUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.baseApiUrl}/register`, user, { headers: this.headers });
  }
}
