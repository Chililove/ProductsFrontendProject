import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.services';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = environment.apiUrl + '/products/';
  /*products: Product[];
  id = 1;*/
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    /*this.products = [
    {id: this.id++, name: 'sanders', color: 'black', type: 'brand', price: 700, createdDate: 250493},
    {id: this.id++, name: 'lars ', color: 'pink', type: 'guy', price: 4000, createdDate: 210215}
  ];*/
  }

  getProducts(): Observable<Product[]> {
    /*return this.products;*/
   // get users from api
    return this.http.get<Product[]>(this.apiUrl , httpOptions);
  }


  addProduct( product: Product ): Observable<Product> {
   return this.http.post<Product>(this.apiUrl, {name: product.name,
     price: product.price,
     type: product.type,
     color: product.color,
   });
   /* product.id = this.id++;
    this.products.push(product);*/
  }
  getProductById(id: number): Observable<Product> {
   return this.http.get<Product>(this.apiUrl  + id);
  }
  updateProduct(id, product: Product): Observable<Product> {
   return this.http.put<Product>(this.apiUrl  + id, {name: product.name,
     price: product.price,
     type: product.type,
     color: product.color,
   });
  }

  /*deletePet(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' +  id);
  }*/
}
