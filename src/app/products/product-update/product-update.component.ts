import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }
  id: number;
  ngOnInit(): void {
    this.id =  +this.route.snapshot.paramMap.get('id');
    const product = this.productService.getProductById(this.id).subscribe((data) => {
      this.productForm.patchValue({
        name: data.name,
        color: data.color,
        type: data.type,
        price: data.price
      });
    });
  }

     /* .subscribe(productsFromBackend => {
        this.product = productsFromBackend;
      });*/

  save(): any{
    const product = {name: this.productForm.value.name,
      color: this.productForm.value.color,
      type: this.productForm.value.type,
      price: this.productForm.value.price,
    } as Product;
    console.log(product);
    this.productService.updateProduct(this.id, product).subscribe((data) =>
    console.log(data));
    this.productForm.reset();
    this.router.navigate(['/products']);
  }
}
