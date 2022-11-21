import { Component, Input, VERSION } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService, User } from "../../app.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

 public users: User[];



name: string;
password: string;
id:Number;
  constructor(
    public appService: AppService,
    private router: Router,
  ) {
  this.appService;
  }

  onLogin(name: string,password: string) {
    for(let i=0;i<this.appService.count;i++){
      if(name==(this.appService.getUser(i).name)){
        this.id =i;
        break
        }
    }
  
    const loginUser =this.appService.getUser(this.id);
    if ((name == loginUser.name) && (password ==loginUser.password)) {
      this.router.navigateByUrl("/users");
    }else{
      this.router.navigateByUrl("/error");
    }
  }
}
