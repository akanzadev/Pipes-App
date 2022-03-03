import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommomComponent } from './pages/uncommom/uncommom.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumbersComponent,
    UncommomComponent,
    BasicsComponent,
    OrderComponent,
  ],
  imports: [CommonModule, SalesRoutingModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    UncommomComponent,
    BasicsComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
