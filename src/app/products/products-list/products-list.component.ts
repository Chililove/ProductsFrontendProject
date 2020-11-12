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
    this.productService.getProducts()
      .subscribe(listOfProducts => {
        this.products = listOfProducts;
      });
    }
  }
    /*delete(id: number) {
      this.productService.deleteProductByI(id)
        .subscribe(message => {
          console.log('Deleted Pet with message: ' + message);
          this.refresh();
        });
    }
  }

  // tslint:disable-next-line:typedef

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

