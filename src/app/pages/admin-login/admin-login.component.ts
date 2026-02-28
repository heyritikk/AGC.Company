import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  isLoading = false;
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) { }

  onLogin() {
    this.isLoading = true;
    this.errorMessage = '';

    const apiUrl = 'http://localhost:5200/api/auth/login';

    this.http.post<any>(apiUrl, this.credentials).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response && response.token) {
          localStorage.setItem('adminToken', response.token);
          this.router.navigate(['/admin']);
        }
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 401) {
          this.errorMessage = 'Invalid username or password.';
        } else {
          this.errorMessage = 'An error occurred connecting to the server.';
        }
      }
    });
  }
}
