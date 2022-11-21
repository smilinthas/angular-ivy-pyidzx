import { Component, HostBinding, HostListener, Input, VERSION, ViewContainerRef } from "@angular/core";
import {  Router } from "@angular/router";
import { AppService, Item, User } from "../../app.service";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
 item: Item = {id:1, itemName: '', itemCount: 0};
 id:any;
 itemName:string;
 itemCount:number;

@Input() paidMessage:string;
  constructor(public appService: AppService,private router: Router,public viewRef:ViewContainerRef
  ) {
  }
ngOnInit(){
  this.appService.items=[];
}
  onCart(itemName,itemCount) {
    this.item.id=2;
    this.item.itemName=itemName;
    this.item.itemCount=itemCount;
    this.appService.addItemsToCart(this.item);
    const loginUser =this.appService.getUser(this.id);
  }

  onBuy(){
    this.router.navigateByUrl("/bill");

  }
  onBack(){
    this.router.navigateByUrl("/users");
  }
}