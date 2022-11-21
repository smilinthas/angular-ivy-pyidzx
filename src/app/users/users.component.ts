import { Component, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent  {


  constructor(public appService: AppService,
    private router: Router,
    private route: ActivatedRoute){
    
  }

  onLogout(){
    this.router.navigateByUrl("/login");
  }
  onBuy(){
    this.router.navigateByUrl("/cart");
  }
}
