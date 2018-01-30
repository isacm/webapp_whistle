import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppComponent } from 'app/app.component';
import { UserService } from 'app/login/user.service';
import { IsAuthenticatedService } from 'app/login/is-authenticated.service';



@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

    model: any = {};
    inc = false;

    constructor(private router:Router, private user:UserService, private isAuthenticated:IsAuthenticatedService){

    }

    ngOnInit() {
        console.log("entrei login")
    }

    loginUser(e){
        e.preventDefault();
        
        let email = e.target.elements[0].value;
        let pass = e.target.elements[1].value;
        console.log(email,pass)

        // if(user=="admin" && pw=="admin"){
        //     this.user.setUserLoggedIn();
        //     this.router.navigate(['dashboard']);
        // }

        let lg = this.isAuthenticated.login(email, pass);
        if(lg==false) {
            console.log("falhou")
            this.inc = true;
        }
        else{this.router.navigate(['dashboard']);}
        

    }

    onLoggedin(email,pass) {
        //console.log('Login crl');
        //console.log(email+'---'+pass)
        /*this.isauthenticationService.login(this.model.email, this.model.password)
        .subscribe(
              resultado => {
                  this.utilizadorOn();
                  this.router.navigate(['/']);
              },
              error => {
                  this.alertService.error("Email ou Password incorretos!");
                  this.loading = false;
              }
          );*/

          
          let lg = this.isAuthenticated.login(email, pass);
          if(lg==false) {
                console.log("falhou")
                this.inc = true;
          }
          
          this.router.navigate(['']);
    }
    
}
