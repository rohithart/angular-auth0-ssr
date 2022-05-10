import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Auth0AuthService } from './services/auth.service';

@Injectable()
export class AuthServerService extends Auth0AuthService {

  constructor() {
    // Using `as any` here to avoid providing an implementation for all methods.
    // In reality, you want to provide a full mock version instead and drop the `as any`.
    super({
      loginWithRedirect: () => of(),
      logout: () => of(),
      getAccessTokenSilently: () => of(),
      isAuthenticated$: of(false),
      user$: of(null)
    } as any);
  }
}
