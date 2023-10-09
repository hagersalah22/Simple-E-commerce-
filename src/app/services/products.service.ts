import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductsList() {
    return this.http.get('https://dummyjson.com/products', {
      headers: {
        'Accept-language': 'ar',
      },
      
    });
  }
  getProductDetails(id: number | string): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }

  addProduct(productData: any): Observable<any> {
    return this.http.post<any>('https://dummyjson.com/products', productData, {
      headers: {
        'Accept-language': 'ar',
      },
    });
  }
}
