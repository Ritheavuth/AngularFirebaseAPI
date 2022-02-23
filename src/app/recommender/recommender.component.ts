import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from 'src/services/session.service';


@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {
  
  sessionList: any;
  i = 0;
  constructor(private sessionService: SessionService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllSession();
  }

  getAllSession() {
    this.sessionService.getSession().subscribe(data => {
      this.sessionList = data;
      console.log(this.sessionList);
    })
  }
  changeImage() {
    this.i ++;
  }
}
