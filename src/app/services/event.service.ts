import { Injectable } from '@angular/core';
import { SessionService } from 'src/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  sessionList: any = [];

  constructor(private sessionService: SessionService) {
  }

  requestSessions(){
    this.sessionService.getSession().subscribe(data => {
      this.sessionList = data;
      console.log(this.sessionList);
    })
  }

  getAllSessions() {
    return this.sessionList;
  }
}
