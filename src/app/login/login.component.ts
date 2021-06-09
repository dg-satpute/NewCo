import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  password = ''
  Mobile_number=''
  
  errorMessage = 'enter valid user id password'
  invalidLogin = false

  message = ''

  endpint: string = 'https://qemis19zxl.execute-api.ap-south-1.amazonaws.com/DEV/getdetails';






  constructor(private http: HttpClient, private router: Router,
    private hardcodedAuthenticationService: HardcodeAuthenticationService) { }

  ngOnInit(): void { }

  onSubmit(data: any) {
  
   
    if (this.hardcodedAuthenticationService.authenticate( this.Mobile_number,this.password ) ){
        
      //Redirect to product page4
      
      this.router.navigate(['product'])

      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true

    }


  }

 /*
  handlelogin() {
    {


      if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {

        //Redirect to Welcome Page

        this.router.navigate(['welcome', this.username])

        this.invalidLogin = false
      }
      else {
        this.invalidLogin = true

      }


    }
  }
  */
}
