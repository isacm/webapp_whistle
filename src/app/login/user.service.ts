import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private isUserLoggedIn;
    private username;


    constructor() { 
        this.isUserLoggedIn = false;
    }

    public setUserLoggedIn() {
        this.isUserLoggedIn = true;
    }

    public setUserLoggedOut() {
        this.isUserLoggedIn = false;
    }

    public getUserLoggedIn() {
        return this.isUserLoggedIn;
    }

}