import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-httpcall',
  templateUrl: './httpcall.component.html',
  styleUrls: ['./httpcall.component.css']
})
export class HttpcallComponent implements OnInit {

 users = [];
 userItem=null;

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  GetData() {
   this.http.get<any[]>(this.apiUrl)
   .subscribe(data=>{this.users=data;});  
   console.log('will it wait'); 
   console.log(this.users); 
  }
  ClearData() {
    this.users = [];
  }
  constructor(private http: HttpClient) { }
trackByFn(index,item){
this.userItem=item;
return item;
}

  ngOnInit() {
    
    async function showAvatar() {

  // read our JSON
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let user = await response.json();

  console.log("user");
 console.log(user[0].body);
  return user[0].body;
}
console.log("asdasdadasd");
var awaittest=  showAvatar().then();
console.log(awaittest);
console.log("xxxxx");
  }

}


