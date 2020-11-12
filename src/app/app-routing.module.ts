import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {ProductUpdateComponent} from './products/product-update/product-update.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/authentication.guard';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent, canActivate: [AuthGuard] },
  { path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'product-update/:id', component: ProductUpdateComponent, canActivate: [AuthGuard] },
  { path: 'product-add', component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: '' }
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
