import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient, private router:Router) { }
  toURL:string = "http://localhost:5001/kirirom-forum-chatbot/us-central1/app/api/readimgURL";

  getSession(){
    return this.http.get(this.toURL);
  }
}
