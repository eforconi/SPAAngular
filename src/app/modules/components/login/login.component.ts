// login.component.ts

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  data:any;
  myForm: FormGroup;
  emailControl: FormControl; // Separate variable for email control
  passwordControl: FormControl; // Separate variable for password control

  constructor(private authService: AuthService,private fb: FormBuilder, private http:HttpClient, private router: Router) {
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    this.passwordControl = new FormControl('', Validators.required);
    
    this.http.get('http://localhost:3000/users').subscribe(
      (data) => {
        this.data = data
      });
    
    this.myForm = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  loginUser(): void {
    
    // Validate input (e.g., check if fields are not empty)
    if (!this.myForm.get('email')?.value || !this.myForm.get('password')?.value) {
      console.error('Email and password are required.');
    }
    
    // Send login request to backend API (mock example)
    this.authService.login(this.emailControl.value, this.passwordControl.value).subscribe(
      (response) => {
        // Handle successful login (e.g., store token, navigate to dashboard)
        response.forEach((element:any) => {
          if(element.email === this.emailControl.value && element.password === this.passwordControl.value) {
            this.router.navigate(['/location']);         
          }
        });
      },
      (error) => {
        // Handle login error (e.g., display error message)
        console.error('Login failed:', error);
      }
    );
  }
}
