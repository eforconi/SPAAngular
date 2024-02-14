// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000'; // Replace with your API URL
  private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  // Expose user as an observable
  get userValue(): any {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    debugger;
    // Adjust the API endpoint to the correct login route (e.g., /login)
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
  

  logout(): void {
    // Clear user data and notify other components
    this.userSubject.next(null);
  }
}
