import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor() {   this.products = [
    {id: 1, name: 'sanders', color: 'black', type: 'brand', price: 700, createdDate: 250493},
    {id: 2, name: 'lars ', color: 'pink', type: 'guy', price: 4000, createdDate: 210215}
  ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  // tslint:disable-next-line:typedef
  addProduct( product: Product ) {
    this.products.push(product);
  }
  // tslint:disable-next-line:typedef
  getProductById(id: number) {
    return this.products.find(prod => prod.id === id);
  }
}
