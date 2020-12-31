import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseApiUrl = `${environment.baseApiUrl}/user`;
  
  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseApiUrl}`);
  }
}
