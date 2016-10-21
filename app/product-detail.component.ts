
// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ProductService } from './product.service';

import { Product } from './product';

@Component({
    selector: 'my-product-detail',
    template: `
    <div *ngIf="product">
      <h2>{{product.name}} details!</h2>
      <div><label>id: </label>{{product.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="product.name" placeholder="name"/>
      </div>
            <div>
        <label>Total Price: </label>
    {{product.unitPrice | calculatePrice: product.quantity}}
      </div>      
  <button (click)="goBack()">Back</button>
    </div>
  `
})
export class ProductDetailComponent implements OnInit{
    ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
    let id = +params['id'];

    this.productService.getProduct(id)
        .then(product => this.product = product);

});
}
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    goBack(): void {
        this.location.back();
    }

    @Input()
    product: Product;
}
