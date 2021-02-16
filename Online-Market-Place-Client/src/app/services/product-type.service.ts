import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductType } from '../models/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private baseApiUrl = `${environment.baseApiUrl}/producttype`;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private httpClient: HttpClient) { }

  public getProductTypes(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(`${this.baseApiUrl}`);
  }

  public saveProductType(productType: ProductType): Observable<ProductType> {
    return this.httpClient.post<ProductType>(`${this.baseApiUrl}`, productType, { headers: this.headers });
  }

  public removeProductType(productTypeId: Number): Observable<any> {
    return this.httpClient.delete<ProductType>(`${this.baseApiUrl}/${productTypeId}`);
  }
}
