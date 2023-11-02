import { Component } from '@angular/core';
import { LogoutService } from 'src/app/authentication/logout/services/logout.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user:any = null;

  constructor( private logoutService: LogoutService ){}

  onLogout() {
    this.user = null; // Set user to null
    // this.logoutService.logout();

  }

  getUserInfo():void {
    

  }


}
