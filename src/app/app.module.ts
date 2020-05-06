import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ItemsComponent} from './items/items.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {OrdersComponent} from './orders/orders.component';
import {UsersComponent} from './users/users.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {UpdateItemComponent} from './update-item/update-item.component';
import {BottomBarComponent} from './bottom-bar/bottom-bar.component';

import {AppRoutingModule} from './app-routing.module';
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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ItemsComponent,
    OrdersComponent,
    UsersComponent,
    BottomBarComponent,
    FilterByItemNamePipe,
    CreateItemComponent,
    ItemDetailComponent,
    PagenotfoundComponent,
    UpdateItemComponent,
    CreateUserComponent,
    UserDetailComponent,
    UpdateUserComponent
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
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
