/**
 * Created by Dejene on 10/21/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';

/*
 * when piped with product price calculates total price based on quantity provided
 *
 */
@Pipe({name: 'calculatePrice'})
export class CalculatePricePipe implements PipeTransform {
    transform(unitPrice:number, quantity:number): number {
        return unitPrice*quantity;
    }
}