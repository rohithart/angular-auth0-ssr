import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class Auth0AuthService {
  constructor(private auth: AuthService) {}

  isAuthenticated = this.auth.isAuthenticated$;
  user = this.auth.user$
  getToken = this.auth.getAccessTokenSilently();

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }

  signup() {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
}
