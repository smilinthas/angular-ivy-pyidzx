import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddEditUserComponent } from './users/addEditUser/addEditUser.component';
import { AppService } from './app.service';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './users/login/login.component';
import { ErrorComponent } from './users/Error/error.component';
import { CartComponent } from './users/Cart/cart.component';
import { BillComponent } from './users/Bill/bill.component';
import { AddressComponent } from './users/address/address.component';
import { HostDirective } from './host.directive';
import { HighLightDirective } from './users/highlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, AddEditUserComponent,LoginComponent ,ErrorComponent,CartComponent,BillComponent,AddressComponent,HostDirective,HighLightDirective],
  entryComponents:[AddressComponent],
  providers: [AppService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
