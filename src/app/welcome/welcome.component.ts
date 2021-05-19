import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductlistComponent } from '../productlist/productlist.component';
import {HttpClient, HttpEvent} from '@angular/common/http'
import { ImageService } from '../service/image.service';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})




export class WelcomeComponent  {
 selectedFile!: File;  
 
 
  onFileSelected(event: any){
    this.selectedFile=event.target.files[0];
    
  }
  public pname=''
  public price=""
  public pid=""
  public pimg=""
  public pdesc=""
  public pstock=""
  public pcat="" 
 public fileToUpload : File | any;
  fileUploadService: any;
  
  constructor(private http:HttpClient) { 
    
  }
onUpload(){
  const fd=new FormData();
  fd.append('image',this.selectedFile,this.selectedFile.name)
   this.http.post("http://localhost:4200\src\assets\img",fd)
   .subscribe(res=>{
     console.log(res)
   })
}
  



}
