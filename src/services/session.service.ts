import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient, private router:Router) { }
  toURL:string = "https://us-central1-kirirom-forum-chatbot.cloudfunctions.net/app/api/sessions";
  psid: string = "https://us-central1-kirirom-forum-chatbot.cloudfunctions.net/app/api/User";
  updateUser:string = "https://us-central1-kirirom-forum-chatbot.cloudfunctions.net/app/api/update/User"

  getSession(){
    return this.http.get(this.toURL);
  }

  getAllUsers(){
    return this.http.get(this.psid);
  }

  getUser(user_psid:string){
    console.log(user_psid)
    return this.http.get(this.psid + "/" + user_psid);
  }

  getUpdateUser(user_psid:string, user:any){
    return this.http.put(this.updateUser + "/" + user_psid, user);
  }
}
