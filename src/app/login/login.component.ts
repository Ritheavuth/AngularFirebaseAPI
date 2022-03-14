import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.requestSessions();
  }

  login(): void {
    this.authService.facebookSignin();
  }

  logout(): void {
    this.authService.logOut();
  }
}
