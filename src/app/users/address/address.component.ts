import { Component, Input, VERSION, ViewContainerRef } from "@angular/core";
import {  Router } from "@angular/router";
import { AppService, Item, User } from "../../app.service";

@Component({
  selector: "address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css"]
})
export class AddressComponent {

@Input() message:string;
@Input() content:string;

  constructor(public appService: AppService,private router: Router
  ) {
  }

}