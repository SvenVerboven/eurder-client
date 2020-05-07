import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {UsersComponent} from './users/users.component';
import {OrdersComponent} from './orders/orders.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {UpdateItemComponent} from './update-item/update-item.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'update-item/:id', component: UpdateItemComponent},
  {path: 'customers', component: UsersComponent},
  {path: 'customers/:id', component: UserDetailComponent},
  {path: 'create-customer', component: CreateUserComponent},
  {path: 'update-customer/:id', component: UpdateUserComponent},
  {path: 'basket', component: CartComponent},
  {path: 'orders', component: OrdersComponent},
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
