import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
 
  constructor(private http:HttpClient) { }
  

  postFile(fileToUpload:File):Observable<object>{
    const endpoint="C:\Users\LC\todo\src\assets";
    const formData :FormData=new FormData();
    formData.append('filekey',fileToUpload,fileToUpload.name);
    return this.http.post(endpoint,formData);
  }
    
  


  
}
