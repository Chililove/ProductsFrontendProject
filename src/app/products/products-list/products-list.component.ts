import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  constructor(private  productService: ProductService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  // tslint:disable-next-line:typedef
  addProduct() {
   this.productService.addProduct ( {
        id: 4,
        name: 'smt',
        color: 'black',
        type: 'brand',
        price: 200,
        createdDate: 250297
    });
    /*
    delete(product: Product)
    {
      this.productService.delete(product.id)
        .pipe(
          switchMap(c => this.products = this.productService.getProducts()),
          catchError(err => {
            return err;
          })
        ).subscribe();
    }*/
  }
}
