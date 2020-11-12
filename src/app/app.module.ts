import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ProductService} from './shared/services/product.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './guards/authentication.guard';
import {AuthenticationService} from './shared/services/authentication.services';
import {JwtInterceptor} from './shared/services/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NavbarComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthGuard,
    AuthenticationService,
    ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
