// login.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  myForm: FormGroup;
  emailControl: FormControl; // Separate variable for email control
  passwordControl: FormControl; // Separate variable for password control

  constructor(private authService: AuthService,private fb: FormBuilder) {
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    this.passwordControl = new FormControl('', Validators.required);

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
        debugger;
        console.log('Login successful:', response);
      },
      (error) => {
        // Handle login error (e.g., display error message)
        debugger;
        console.error('Login failed:', error);
      }
    );
  }
}
