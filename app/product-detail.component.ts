import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ProductService } from './product.service';

import { Product } from './product';

@Component({
    moduleId: module.id,
    selector: 'my-product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: [ 'product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit{
    product:Product;
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
    let id = +params['id'];

    this.productService.getProduct(id)
        .then(product => this.product = product);

});
}

    goBack(): void {
        this.location.back();
    }
}
