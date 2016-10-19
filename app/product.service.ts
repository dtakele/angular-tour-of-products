/**
 * Created by 985261 on 10/19/2016.
 */

/**
 * Created by 985261 on 10/19/2016.
 */
import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductS } from './mock-products';
@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(ProductS);
    }
}


