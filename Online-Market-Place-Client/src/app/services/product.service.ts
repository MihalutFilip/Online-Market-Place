import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductForSale } from '../models/product-for-sale';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl = `${environment.baseApiUrl}/product`;
  private headers = new HttpHeaders({ 'Content-': 'application/json' });
  
  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<ProductForSale[]> {
    return this.httpClient.get<ProductForSale[]>(`${this.baseApiUrl}`);
  }

  public saveProduct(product: ProductForSale): Observable<ProductForSale> {
    return this.httpClient.post<ProductForSale>(`${this.baseApiUrl}`, product, { headers: this.headers });
  }

  public removeProduct(productId: Number): Observable<any> {
    return this.httpClient.delete<ProductForSale>(`${this.baseApiUrl}/${productId}`);
  }
}
