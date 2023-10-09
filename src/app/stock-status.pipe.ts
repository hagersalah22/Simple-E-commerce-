import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {

    transform(stock: number): string {
      return stock === 0 ? 'Out of Stock' : 'In Stock';
    }
}
