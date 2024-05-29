// auth.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthService } from './auth-service.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [AuthService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set user data on successful login', () => {
    const mockUser = { username: 'testuser', role: 'user' };
    service.login('testuser', 'password').subscribe((user) => {
      expect(user).toEqual(mockUser);
      expect(service.userValue).toEqual(mockUser);
    });
  });

  it('should clear user data on logout', () => {
    service.logout();
    expect(service.userValue).toBeNull();
  });

  // Add more test cases as needed
});
