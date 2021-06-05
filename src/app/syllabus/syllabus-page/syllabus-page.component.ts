import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabus-page',
  templateUrl: './syllabus-page.component.html',
  styleUrls: ['./syllabus-page.component.css']
})
export class SyllabusPageComponent implements OnInit {
  
   source=''
   
  constructor() { }

  ngOnInit(): void {
   
  }
play(song:string){
  if(song=='Gulabi Ankhe')
 { this.source='assets/video/Gulabi_Aankhen__Sanam.mp4'}
  if(song=='Mere mehboob'){
  this.source='https://d3s2ast1ppti4l.cloudfront.net/Vectors+and+scalars+questions+(practice)+-+Khan+Academy.MKV'
  }

  if(song=='costa'){
    this.source='C://Users/LC/Desktop/download/COSTA_RICA_IN_4K_60fps_HDR_(ULTRA_HD).mp4'
  }
}
  

  
  
}
