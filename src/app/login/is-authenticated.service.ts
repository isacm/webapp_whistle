import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class IsAuthenticatedService {

  userLogged : any; //User logado
  constructor(private router: Router){
	}

  //call this function when login status changes
  changeLoginStatus(status: boolean){
  }

  getLoginStatus(){
    return localStorage['currentUser'];
  }

  //LOGIN retorna um token
  login(email: string, pass: string){

    if(email=='admin' && pass=="admin"){
      localStorage.setItem('currentUser',email);
      //this.router.navigate(['dashboard']);
      return true;
    } 
    else{
      return false;
    }
  }

  logout(){
    //this.changeLoginStatus(false);
    this.userLogged = null;
    localStorage.removeItem('currentUser');
  }

  

  //
  canActivate() {
  		if (this.getLoginStatus()) {
  			return true;
  		}
  		this.router.navigate(['/']);
  	}
}