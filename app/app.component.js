"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var AppComponent = (function () {
    function AppComponent(productService) {
        this.productService = productService;
        this.title = 'Tour of Products';
    }
    AppComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().then(function (products) { return _this.products = products; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>{{title}}</h1>\n    <h2>My Products</h2>    \n    <ul class=\"products\">\n      <li *ngFor=\"let product of products\"\n        [class.selected]=\"product === selectedProduct\"\n        (click)=\"onSelect(product)\">\n        <span class=\"badge\">{{product.id}}</span> {{product.name}}\n      </li>\n    </ul>\n\n    <my-product-detail [product]=\"selectedProduct\"></my-product-detail>   \n    ",
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map