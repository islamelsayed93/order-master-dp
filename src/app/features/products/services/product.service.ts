import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private productsUrl = 'https://raw.githubusercontent.com/islamelsayed93/order-master-dp/0312a2fcd45400f4eaa24e1518d6db3e572c2b7e/src/app/assets/porducts.json'
  private productsUrl = '/assets/data/porducts.json'

  constructor(public http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  editProductQuantity(productId: number, quantity: number): Observable<Product[]> {
    return this.http.put<Product[]>(this.productsUrl, {productId, quantity });
  }


}
