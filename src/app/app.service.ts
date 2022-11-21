import { Injectable } from "@angular/core";

export type User = {
  id: number;
  name: string;
  address: string;
  password: string;
};

export type Item = {
  id: number;
  itemName: string;
  itemCount: number;
};

@Injectable()
export class AppService {
  public users: User[] = [{ id: 1, name: "Smilin", address: "Eden" ,password: "Sbi@12345"}];
  public items: Item[] = [{ id:1, itemName: "AddItems", itemCount: 0}];
  public count = 2;
  public itemCounting = 1;
  public total=0;

  public getUser(id) {
    const index = this.users.map(x => x.id).indexOf(id);
    if (index != -1) {
      return { ...this.users[index] };
    } else {
      return { id: 0, name: "", address: "",password:"" };
    }
  }

  public addItemsToCart(item){
    this.items.push({...item,id:this.itemCounting++})
    }

  public getBill(){
    this.total=0;
    const length=this.items.length;
    for(let i=0;i<length;i++){
      this.total =this.total + this.items[i].itemCount*100
  }
    return this.total;
  }
  
  public addUser(user) {
    this.users.push({...user, id: this.count++});
  }

  public updateUser(data) {
    const index = this.users.map(x => x.id).indexOf(data.id);
    if (index !== -1) {
      this.users[index] = data;
    }
  }

  public deleteUser(id: number) {
    this.users = this.users.filter(x => x.id !== id);
  }
}
