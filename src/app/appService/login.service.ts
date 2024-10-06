import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //url="https://fakestoreapi.com/products/1";
  constructor(private httpClient:HttpClient) { }
  display()//:Observable<any[]>
  {
    return this.httpClient.get<any[]>('http://127.0.0.1:8000/my/get_record')
     // L
    //return this.httpClient.get(this.url).subscribe((response) => {
        
      //console.warn("data",response);
    //});
  }
  insertProject(project:any):Observable<any>
  {
    return this.httpClient.post<any>("http://127.0.0.1:8000/my/post",project);
  }

product=[
  {Name:"Mobile",id:"11"},
  {Name:"ram",id:"1"},
  {Name:"raju",id:"2"}
]
}
