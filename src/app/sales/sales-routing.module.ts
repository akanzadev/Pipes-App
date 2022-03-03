import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './pages/basics/basics.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommomComponent } from './pages/uncommom/uncommom.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basics',
  },
  {
    path: 'basics',
    component: BasicsComponent,
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'uncommom',
    component: UncommomComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
