import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ItemsComponent} from './items/items.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {OrdersComponent} from './orders/orders.component';
import {UsersComponent} from './users/users.component';
import {AppRoutingModule} from './app-routing.module';
import {BottomBarComponent} from './bottom-bar/bottom-bar.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {FilterByItemNamePipe} from './filter-by-item-name.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


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
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
