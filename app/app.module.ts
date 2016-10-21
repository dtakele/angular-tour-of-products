import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }        from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent }     from './products.component';
import { ProductService }         from './product.service';
import {CalculatePricePipe} from './calculate-price.pipe';
import {DashboardComponent} from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductsComponent,
    CalculatePricePipe,
    DashboardComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}




