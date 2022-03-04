import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interface';

type Order = 'name' | 'color' | 'fly' | '';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(value: Heroe[], orderBy: Order): Heroe[] {
    if (!orderBy) return [...value];
    // 'name' | 'color' | 'fly'
    return [...value].sort((a, b) => (a[orderBy] > b[orderBy] ? 1 : -1));
  }
}
