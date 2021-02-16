import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ObjectType } from '../models/object-type';

@Injectable({
  providedIn: 'root'
})
export class ObjectTypeService {
  private baseApiUrl = `${environment.baseApiUrl}/objecttype`;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private httpClient: HttpClient) { }

  public getObjectTypes(): Observable<ObjectType[]> {
    return this.httpClient.get<ObjectType[]>(`${this.baseApiUrl}`);
  }

  public saveObjectType(objectType: ObjectType): Observable<ObjectType> {
    return this.httpClient.post<ObjectType>(`${this.baseApiUrl}`, objectType, { headers: this.headers });
  }

  public removeObjectType(objectTypeId: Number): Observable<any> {
    return this.httpClient.delete<ObjectType>(`${this.baseApiUrl}/${objectTypeId}`);
  }
}