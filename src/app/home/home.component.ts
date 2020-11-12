import {Product} from '../shared/models/product';

import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {AuthenticationService} from '../shared/services/authentication.services';


@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  products: Product[] = [];
  username: string;
  errormessage: '';

  constructor(private productService: ProductService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): void {
    // get users from secure api end point
    this.productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
        },
        error => {
          this.errormessage = error.message;
        });
  }

}
