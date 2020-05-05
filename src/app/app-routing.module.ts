import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {UsersComponent} from './users/users.component';
import {OrdersComponent} from './orders/orders.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'users', component: UsersComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: '', redirectTo: '/items', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
