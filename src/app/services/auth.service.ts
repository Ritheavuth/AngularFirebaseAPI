import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedin: boolean = false;
  user: SocialUser = new SocialUser;
  public redirectUrl: string = '';

  constructor(private socialAuthService: SocialAuthService, private router: Router) {
    this.authState();
  }

  getUser(): SocialUser {
    return this.user;
  }

  authState() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
    });
  }

  isLoggedIn(): boolean {
    return this.isSignedin;
  }

  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      onfulfilled => {
        this.isSignedin = true;
        this.router.navigate([this.redirectUrl]);
      }
    );
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
