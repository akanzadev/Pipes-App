import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommomComponent } from './pages/uncommom/uncommom.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    UncommomComponent,
    BasicsComponent,
    OrderComponent,
    UppercasePipe,
    FlyPipe,
    OrderPipe,
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
