import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';






@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
   className=["First class","second class","third class","Fourth class","First class","second class","third class","Fourth class"];


  constructor(public _ClassService:ClassService) {
   }
   Value:string=""
  ngOnInit(): void {
   
   

    this.Value=  this._ClassService.getname()
   
  }

 

}
