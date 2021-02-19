import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl = `${environment.baseApiUrl}/product`;
  private headers = new HttpHeaders({ 'Content-': 'application/json' });
  
  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseApiUrl}`);
  }

  public saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.baseApiUrl}`, product, { headers: this.headers });
  }

  public removeProduct(productId: Number): Observable<any> {
    return this.httpClient.delete<Product>(`${this.baseApiUrl}/${productId}`);
  }
}
