import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, JsonpClientBackend} from '@angular/common/http';


import{Form}from '@angular/forms'




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message=''
   
  endpint:string ='https://qemis19zxl.execute-api.ap-south-1.amazonaws.com/DEV/studentdata';
  constructor( private http:HttpClient) { }

  ngOnInit(): void {
  }
onSubmit(data: any)
{
  const headers = ({ 'Content-Type': 'application/json' });
  
  
  
   this.http.post(this.endpint,data,{headers})
  .subscribe((result)=>{this.message=JSON.stringify(result) 
   var obj = JSON.parse(this.message)
   this.message=obj["message"]
 })
  
    

}
success(){
  if(this.message!=null)
  return true
  else
  return false
}
   
}