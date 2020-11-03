import { Component, OnInit } from '@angular/core';
import {Products} from '../../shared/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Products[];
  constructor() { }

  ngOnInit(): void {
    this.products = [
    {id: 1, name: 'smt ', color: 'black', type: 'brand', price: 200, createdDate: 250297},
    {id: 2, name: 'lars ', color: 'pink', type: 'guy', price: 4000, createdDate: 210215}
    ];
  }
  CountOneUp(): void {
    this.products.push({
      id: 3,
      name: 'Jason ',
      type: 'shades',
      color: 'blue',
      price: 252,
      createdDate: 251265
    });
  }
}
