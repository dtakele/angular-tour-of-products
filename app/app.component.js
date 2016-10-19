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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Products';
        this.PRODUCTS = [
            { id: 1, name: 'iPhone' },
            { id: 2, name: 'iPad' },
            { id: 3, name: 'iPod' },
            { id: 4, name: 'Apple TV' },
            { id: 5, name: 'Apple Watch' }
        ];
        this.myProduct = this.PRODUCTS[0];
        this.products = this.PRODUCTS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>{{title}}</h1>\n    <h2>My Products</h2>\n    <ul class=\"products\">\n      <li *ngFor=\"let product of products\"\n        [class.selected]=\"product === selectedProduct\"\n        (click)=\"onSelect(product)\">\n        <span class=\"badge\">{{product.id}}</span> {{product.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedProduct\">\n      <h2>{{selectedProduct.name}} details!</h2>\n      <div><label>id: </label>{{selectedProduct.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedProduct.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map