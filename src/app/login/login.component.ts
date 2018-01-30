import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppComponent } from 'app/app.component';
import { UserService } from 'app/login/user.service';



@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

    constructor(private router:Router, private user:UserService){

    }

    ngOnInit() {
        console.log("entrei login")
    }

    loginUser(e){
        e.preventDefault();
        
        let user = e.target.elements[0].value;
        let pw = e.target.elements[1].value;
        console.log(user,pw)

        if(user=="admin" && pw=="admin"){
            this.user.setUserLoggedIn();
            this.router.navigate(['dashboard']);
        }

    }
    
}
