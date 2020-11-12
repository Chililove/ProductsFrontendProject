import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/product';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .subscribe(productsFromBackend => {
        this.product = productsFromBackend;
      });
  }
}
