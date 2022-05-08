import { TestBed } from '@angular/core/testing';

import { Auth0AuthService } from './auth.service';

describe('Auth0AuthService', () => {
  let service: Auth0AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth0AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
