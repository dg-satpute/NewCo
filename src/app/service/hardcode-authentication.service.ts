import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {
   
   
  constructor(private  router :Router) { }
  authenticate(Mobile_number: string,password: string  ) {
    //console.log('before ' + this.isUserLoggedIn());
    /* const headers = ({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'origin' });
      

    let body = JSON.stringify(data);
    this.http.post(this.endpint, data, {headers,})
      .subscribe((result) => {
        console.log(result)
        //this.message = JSON.stringify(result)
        //var obj = JSON.parse(this.message)
        
        //this.passworddb = obj["Password"]
        
      })*/
    if(Mobile_number=="8805627461"&& password == "dummy" ) {
      sessionStorage.setItem('authenticaterUser',password);
     this.setCookie('authenticaterUser',password,30);
      //document.cookie="user="+password; "expires=Thu,15 Jun 2021 12:00:00 UTC"
      //console.log('after ' + this.isUserLoggedIn());
      
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
  //let user = sessionStorage.getItem('authenticaterUser')
     //let user= document.cookie;
     let user=  this. getCookie('authenticaterUser')
    return !(user === null)
    
  }
   
 

  

  logout(){
    //document.cookie="user=''; expires= Thu, 01 Jan 1970 00:00:00 UTC"
    sessionStorage.removeItem('authenticaterUser')
   this. deleteCookie();
     this.router.navigate(['login'])
  }

  setCookie(name:any,value:any,days:any) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
 }
  getCookie(name:any) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
 }



 deleteCookie(){
  document.cookie="authenticaterUser=''; expires=Sun, 20 Aug 2000 12:00:00 UTC"; 
}


}


