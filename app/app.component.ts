import { Component } from '@angular/core';
import {Product} from "./product";

@Component({
  selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
    <h2>My Products</h2>
    <ul class="products">
      <li *ngFor="let product of products"
        [class.selected]="product === selectedProduct"
        (click)="onSelect(product)">
        <span class="badge">{{product.id}}</span> {{product.name}}
      </li>
    </ul>
    <div *ngIf="selectedProduct">
      <h2>{{selectedProduct.name}} details!</h2>
      <div><label>id: </label>{{selectedProduct.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
      </div>
    </div>
    `
})
export class AppComponent {
    title = 'Tour of Products';
    PRODUCTS: Product[] =[
    {id:1, name: 'iPhone'},
    {id:2, name: 'iPad'},
    {id:3, name: 'iPod'},
    {id:4, name: 'Apple TV'},
    {id:5, name: 'Apple Watch'}
];

myProduct = this.PRODUCTS[0];
    products = this.PRODUCTS;

    selectedProduct: Product;
    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}