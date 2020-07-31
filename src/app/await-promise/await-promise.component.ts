import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-await-promise',
  templateUrl: './await-promise.component.html',
  styleUrls: ['./await-promise.component.css']
})
export class AwaitPromiseComponent implements OnInit {
URL_1 = "https://reqres.in/api/users?delay=2&page=1";
URL_2="https://jsonplaceholder.typicode.com/users";
data_1=[];data_2;data_3;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }
  onRefresh(){
  //  this.data_1 = JSON.parse(this.data_1); 
     this.data_2 = JSON.parse(this.data_2); 
  }
 async fetchData(){
   for(var i=1;i<=2;i++){
var tempData =await this.http.get<any>("https://reqres.in/api/users?delay=3&page="+i).toPromise();
this.data_1=[...this.data_1,...tempData.data];
 console.log(this.data_1 );
 console.log(i);
   }

this.data_2 =this.http.get<any>(this.URL_2).toPromise();
this.http.get<any>(this.URL_1).subscribe(data=>{this.data_3=data});
}

}