// auth.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth-service.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
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
