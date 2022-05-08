import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthServerService extends AuthService {
  handleRedirectCallback(
    url?: string
  ): Observable<any> {
    return of({});
  }
}