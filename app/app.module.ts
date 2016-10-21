import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }        from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent }     from './products.component';
import { ProductService }         from './product.service';
import {CalculatePricePipe} from './calculate-price.pipe';
import {DashboardComponent} from './dashboard.component';

import { RouterModule }   from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: ProductDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: ProductsComponent
      }
    ])
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





