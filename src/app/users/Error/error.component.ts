import { Component, VERSION } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService, User } from "../../app.service";

@Component({
  selector: "error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.css"]
})
export class ErrorComponent {

name: string;
password: string;
  constructor(
    public appService: AppService,
    private router: Router,
  ) {
  
  }

  onGoBack(){
    this.router.navigateByUrl("/login");
  }
}
