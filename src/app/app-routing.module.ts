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

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'update-item/:id', component: UpdateItemComponent},
  {path: 'users', component: UsersComponent},
  {path: 'create-user', component: CreateUserComponent},
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
