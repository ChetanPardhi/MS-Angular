import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../home/model/product.model';
import { throttleTime } from 'rxjs/operators'

const BASE_API_URL = 'https://fakestoreapi.com/products/category/jewelery?limit=3'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http : HttpClient) {

   }


  getProducts(): Observable<any> {
    // const params = new HttpParams().set('limit' , '20')
    return this.http.get<Products[]>(BASE_API_URL);
  }
}
