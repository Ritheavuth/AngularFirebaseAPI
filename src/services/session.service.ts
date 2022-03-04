import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient, private router:Router) { }
  toURL:string = "http://localhost:5001/kirirom-forum-chatbot/us-central1/app/api/sessions";
  answerURL:string = "http://localhost:5001/kirirom-forum-chatbot/us-central1/app/api/users";
  categoryURL:string = "http://localhost:5001/kirirom-forum-chatbot/us-central1/app/api/sessions/category="
  businessAreaURL:string = "http://localhost:5001/kirirom-forum-chatbot/us-central1/app/api/sessions/business-area="
  locationURL:string = "http://localhost:5001/kirirom-forum-chatbot/us-central1/app/api/sessions/location="
  getSession(){
    return this.http.get(this.toURL);
  }
  
  getAnswer() {
    return this.http.get(this.answerURL)
  }

  filterSessionCategory(category:string){
    return this.http.get(this.categoryURL+category);
  }

  filterSessionLocation(location:string){
    return this.http.get(this.locationURL+location);
  }


  filterSessionBusinessArea(businessArea:string){
    return this.http.get(this.businessAreaURL+businessArea);
  }
}
