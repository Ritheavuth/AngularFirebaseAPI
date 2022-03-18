import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient, private router:Router) { }
  toURL:string = "https://us-central1-kirirom-forum-chatbot.cloudfunctions.net/app/api/sessions";
  psid: string = "https://us-central1-kirirom-forum-chatbot.cloudfunctions.net/app/api/User"
  // answerURL:string = "https://us-central1-kirirom-forum-chatbot.cloudfunctions.net/app/api/users";
  // categoryURL:string = "https://us-central1-kirirom-forum-chatbot.cloudfunctions.net/app/api/sessions/category="
  // businessAreaURL:string = "https://us-central1-kirirom-forum-chatbot.cloudfunctions.net/app/api/sessions/business-area="
  // locationURL:string = "https://us-central1-kirirom-forum-chatbot.cloudfunctions.net/app/api/sessions/location="
  getSession(){
    return this.http.get(this.toURL);
  }

  getAllUsers(){
    return this.http.get(this.psid);
  }

  // getAnswer() {
  //   return this.http.get(this.answerURL)
  // }

  // filterSessionCategory(category:string){
  //   return this.http.get(this.categoryURL+category);
  // }

  // filterSessionLocation(location:string){
  //   return this.http.get(this.locationURL+location);
  // }


  // filterSessionBusinessArea(businessArea:string){
  //   return this.http.get(this.businessAreaURL+businessArea);
  // }
}
