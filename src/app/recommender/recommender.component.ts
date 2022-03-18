import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/services/session.service';


@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {

  // userList: any = [];
  // user_1: any = this.userList[0];
  // user_2: any = this.userList[1];
  // category: string = "";
  // location: string = "";
  id: any;
  user: any;
  sessionList: any = [];
  filteredSessions: any = [];
  i = 0;
  images: string[] = [];
  likes: any[] = [];

  constructor(private sessionService: SessionService, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getAllSession();
    // this.user = this.authService.getUser();
  }

  getUsersAnswer() {
    this.filterSession(this.user.category.toString(), this.user.location.toString(), this.user.businessArea.toString());
  }

  getAllSession() {
    this.sessionService.getSession().subscribe(data => {
      this.sessionList = data;
      // console.log(this.sessionList);
      this.getSpecUser(this.id);
    })
  }

  getSpecUser(user_psid: string) {
    this.sessionService.getUser(user_psid).subscribe(data => {
      this.user = data;
      // console.log(this.user);
      this.filterSession(this.user.category.toString(), this.user.location.toString(), this.user.businessArea.toString());
      // console.log(this.filteredSessions);
    })
  }

  filterSession(category: string, location: string, businessArea: string) {
    const categoryList = this.sessionList.filter((element:any) => element.session.category === category);
    const locationList = this.sessionList.filter((element:any) => element.session.location === location);
    const businessAreaList = this.sessionList.filter((element:any) => element.session.businessArea === businessArea);
    const res = categoryList.concat(locationList).concat(businessAreaList).filter(function(elem:any, index:any, self:any) {
      return index === self.indexOf(elem);

    });
    this.filteredSessions = res.slice(0, 10); //limit filtered sessions to only 10
  }

  updateUser() {
    this.sessionService.getUpdateUser("4912192158842648", this.user).subscribe(data => {

      console.log(data);
    })
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
    this.user.interest = this.likes
    console.log(this.user);
    this.updateUser();
  }

  dislike() {
    this.i++;
    console.log(this.likes);
  }
}
