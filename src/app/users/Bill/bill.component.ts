import { Component, EventEmitter, Input, Output, VERSION ,ViewChild,ComponentFactoryResolver} from "@angular/core";
import {  Router } from "@angular/router";
import { AppService, Item, User } from "../../app.service";
import {HostDirective} from '../../host.directive';
import { AddressComponent } from "../address/address.component";

@Component({
  selector: "bill",
  templateUrl: "./bill.component.html",
  styleUrls: ["./bill.component.css"]
})
export class BillComponent {
@ViewChild(HostDirective)
childRef:HostDirective;

  amount:number;
  paidMessage:string;
  success:string;
  constructor(public appService: AppService,private router: Router,public factoryRes:ComponentFactoryResolver
  ) {
  }
  ngOnInit(){
    this.amount= this.appService.getBill();
   
  }
  payBill(){
    this.childRef.viewRef.clear();
    const resolvedFactory= this.factoryRes.resolveComponentFactory(AddressComponent);
    const compRef= this.childRef.viewRef.createComponent(resolvedFactory);
    compRef.instance.message="Your Item will Reach you soon"
    this.success ="Your Item will Reach you soon"
    this.paidMessage= "Bill Paid"
    
  }

  back(){
    this.appService.items=[];
    this.router.navigateByUrl("/cart")
  }
}