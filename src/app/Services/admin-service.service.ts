import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http : HttpClient) { }

 private URL  = "http://localhost:8080/admin/login";
 private URL_user = "http://localhost:8080/user/add";

  login(login : string, password : string):Observable<any>{

    let admin = {"login":login , "password":password};

    return this.http.post(this.URL , admin)
  }

  addUser(login : string , password : string , email:string){
    let user = {"login":login , "password":password , "email":email};  
    return this.http.post(this.URL_user , user);
  }

  users(){
    return this.http.get("http://localhost:8080/user");
  }

}
