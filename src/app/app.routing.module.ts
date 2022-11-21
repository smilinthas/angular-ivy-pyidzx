import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEditUserComponent } from "./users/addEditUser/addEditUser.component";
import { BillComponent } from "./users/Bill/bill.component";
import { CartComponent } from "./users/Cart/cart.component";
import { ErrorComponent } from "./users/Error/error.component";
import { LoginComponent } from "./users/login/login.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "error",
    component: ErrorComponent
  },{
    path: "cart",
    component: CartComponent
  },{
    path: "bill",
    component: BillComponent
  },
  {
    path: "users/add",
    component: AddEditUserComponent
  },
  {
    path: "users/:id",
    component: AddEditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
