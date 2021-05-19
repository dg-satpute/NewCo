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
  usernamedb = ''
  passworddb = ''
  errorMessage = 'enter valid user id password'
  invalidLogin = false

  message = ''

  endpint: string = 'https://qemis19zxl.execute-api.ap-south-1.amazonaws.com/DEV/getdetails?content-type=application/json';






  constructor(private http: HttpClient, private router: Router,
    private hardcodedAuthenticationService: HardcodeAuthenticationService) { }

  ngOnInit(): void { }

  onSubmit(data: any) {
    
    const headers = ({ 'Content-Type': 'application/json' });


    let body = JSON.stringify(data);
    this.http.post(this.endpint, data, { headers })
      .subscribe((result) => {
        console.log(result)
        //this.message = JSON.stringify(result)
        //var obj = JSON.parse(this.message)
        
        //this.passworddb = obj["Password"]
        
      })
    if (this.hardcodedAuthenticationService.authenticate( this.usernamedb, this.password, this.passworddb)) {

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
