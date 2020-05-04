import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ItemsComponent} from './items/items.component';
import {OrdersComponent} from './orders/orders.component';
import {UsersComponent} from './users/users.component';
import {AppRoutingModule} from './app-routing.module';
import {BottomBarComponent} from './bottom-bar/bottom-bar.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {FilterByItemNamePipe} from './filter-by-item-name.pipe';
import {CreateItemComponent} from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ItemsComponent,
    OrdersComponent,
    UsersComponent,
    BottomBarComponent,
    FilterByItemNamePipe,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
