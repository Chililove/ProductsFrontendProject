import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {ProductAddComponent} from './products/product-add/product-add.component';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: '', component: WelcomeComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
