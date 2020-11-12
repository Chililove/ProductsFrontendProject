import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Product} from '../../shared/models/product';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl(''),
  });
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(): any{
    const product = {name: this.productForm.value.name,
      color: this.productForm.value.color,
      type: this.productForm.value.type,
      price: this.productForm.value.price,
    } as Product;
    console.log(product);
    this.productService.addProduct(product).subscribe();
    this.productForm.reset();
    this.router.navigateByUrl('/products');
  }
}
