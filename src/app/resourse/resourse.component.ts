import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-resourse',
  templateUrl: './resourse.component.html',
  styleUrls: ['./resourse.component.css']
})

export class ResourseComponent implements OnInit {
 Celcius=30;
 Farenheit=0;
 resturants=[];
 hotel="";city="";
  constructor(private http:HttpClient) {

  
   }
skillSet=[];
skillSetUri='../../../assets/data/skillSet.json';
  ngOnInit() {
    this.http.get<any[]>(this.skillSetUri)
   .subscribe(data=>{this.skillSet=data;})
  }
FarenheitChange(event:any){
  //T(°C) = (T(°F) - 32) / (9/5)
  this.Celcius= (event.target.value - 32) / (9/5) ;
}
CelciusChange(event:any){
  this.Farenheit=  (event.target.value *5/9) +32;
}
Submit(){
this.resturants.push({'name':this.hotel,'city':this.city});

}

 // const restUrl = '../../assets/data/skillSet.json';
  // skillSet = this.http.doGet(restUrl, requestObj); 

}