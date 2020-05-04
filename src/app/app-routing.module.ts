import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {UsersComponent} from './users/users.component';
import {OrdersComponent} from './orders/orders.component';
import {CreateItemComponent} from './create-item/create-item.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: '', redirectTo: '/items', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
