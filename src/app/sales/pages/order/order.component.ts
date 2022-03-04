import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/sales.interface';

type Order = 'name' | 'color' | 'fly' | '';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  toUpper = true;
  orderBy: Order = '';
  heroes: Heroe[] = [
    {
      name: 'Aquaman',
      fly: true,
      color: Color.Blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.Red,
    },
    {
      name: 'Superman',
      fly: true,
      color: Color.Green,
    },
    {
      name: 'Flash',
      fly: false,
      color: Color.Yellow,
    },
  ];
  constructor() {}

  toggle() {
    this.toUpper = !this.toUpper;
  }

  changeOrder(orderBy: Order) {
    this.orderBy = orderBy;
  }
}
