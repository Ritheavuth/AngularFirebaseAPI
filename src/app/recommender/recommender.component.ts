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

  sessionList: any = [];
  filteredSessions: any = [];
  i = 0;
  images: string[] = [];
  likes: any[] = [];
  constructor(private sessionService: SessionService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllSession();
  }

  getAllSession() {
    this.sessionService.getSession().subscribe(data => {
      this.sessionList = data;
      console.log(this.sessionList.session);
      this.filterSession("education", "America", "Software");
    })
  }

  filterSession(category: string, location: string, businessArea: string) {
    const categoryList = this.sessionList.filter((element:any) => element.session.category === category);
    const locationList = this.sessionList.filter((element:any) => element.session.location === location);
    const businessAreaList = this.sessionList.filter((element:any) => element.session.businessArea === businessArea);
    this.filteredSessions = categoryList.concat(locationList).concat(businessAreaList).filter(function(elem:any, index:any, self:any) {
      return index === self.indexOf(elem);
    });
    console.log(this.filteredSessions);
  }

  getAllImages() {
    for (let j = 0; j < 5; j++) {
      this.images.push(this.sessionList[j].item.imageUrl);
    }
    console.log(this.images);
  }

  like() {
    this.likes.push(this.filteredSessions[this.i].session);
    this.i++;
    console.log(this.likes);
  }

  dislike() {
    this.i++;
    console.log(this.likes);
  }
}
