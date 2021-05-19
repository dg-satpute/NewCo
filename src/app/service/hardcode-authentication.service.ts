import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {
   
   
  constructor(private  router :Router) { }
  authenticate(password: string, usernamedb: string, passworddb: string) {
    //console.log('before ' + this.isUserLoggedIn());
    
    if(password == passworddb) {
      sessionStorage.setItem('authenticaterUser',password);
      //console.log('after ' + this.isUserLoggedIn());
      
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
     
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
     this.router.navigate(['product'])
  }

}



