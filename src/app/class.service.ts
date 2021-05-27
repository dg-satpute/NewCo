import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
   
  constructor( ) { }

  public getname():string{
     return 'Hello Ganesh'
   }


}
