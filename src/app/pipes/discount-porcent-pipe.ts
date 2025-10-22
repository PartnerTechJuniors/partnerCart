import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPorcent'
})
export class DiscountPorcentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const num = Number(value);

    if (isNaN(num)) return '-';

    const rounded = Math.round(num);

    return `-${rounded}%`;
  }
}
