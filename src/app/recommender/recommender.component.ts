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
  images: string[] = [];
  likes: any[] = [];
  constructor(private sessionService: SessionService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllSession();
  }

  getAllSession() {
    this.sessionService.getSession().subscribe(data => {
      this.sessionList = data;
      console.log(this.sessionList);
      this.getAllImages();
    })
  }
  changeImage() {
    this.i ++;
  }

  getAllImages() {
    for (let j = 0; j < 5; j++) {
      this.images.push(this.sessionList[j].item.imageUrl);
    }
    console.log(this.images);
  }

  like() {
    this.likes.push(this.images[this.i]);
    // this.dataService.addLikes(this.images[this.i]);
    this.images.splice(this.i, 1);

    // if (this.images.length == 0) { this.router.navigate(['result'])}

    // console.log(this.images);
    console.log(this.likes);
  }

  dislike() {
    this.images.splice(this.i, 1);

    // if (this.images.length == 0) { this.router.navigate(['result'])}

    // console.log(this.images);
    console.log(this.likes);
  }
}
