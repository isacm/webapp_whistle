import { Component } from '@angular/core';
import { UserService } from 'app/login/user.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private user:UserService) { 

  }


}
