import { Component, OnInit } from '@angular/core';
import {Product} from "./product";

import { ProductService } from './product.service';

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

    <my-product-detail [product]="selectedProduct"></my-product-detail>   
    `,
    providers: [ProductService]
})

export class AppComponent implements OnInit {
    title = 'Tour of Products';
    products: Product[];
    selectedProduct: Product;
    constructor(private productService: ProductService) { }
    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }
    ngOnInit(): void {
        this.getProducts();
    }
    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}
