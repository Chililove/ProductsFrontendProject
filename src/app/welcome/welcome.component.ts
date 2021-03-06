import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/models/product';
import {AuthenticationService} from '../shared/services/authentication.services';
import {ProductService} from '../shared/services/product.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome';
  products: Product[] = [];
  username: string;
  errormessage: '';

  constructor(private productService: ProductService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => {
          this.products = products;
        },
        error => {
          this.errormessage = error.message;
        });
  }
}
