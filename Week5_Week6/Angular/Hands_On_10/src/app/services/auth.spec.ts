import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth';

describe('AuthService', () => {

  let service: AuthService;

  beforeEach(() => {

    TestBed.configureTestingModule({});

    service = TestBed.inject(AuthService);

  });

  it('should create', () => {

    expect(service).toBeTruthy();

  });

  it('should login', () => {

    service.login();

    expect(service.isLoggedIn()).toBeTrue();

  });

  it('should logout', () => {

    service.login();

    service.logout();

    expect(service.isLoggedIn()).toBeFalse();

  });

});