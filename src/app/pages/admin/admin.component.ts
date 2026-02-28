import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  activeTab = 'jobs';

  jobOpenings: any[] = [];
  applications: any[] = [];
  contactMessages: any[] = [];

  showAddJobForm = false;
  newJob = {
    title: '',
    category: '',
    location: '',
    type: 'Full-time',
    description: ''
  };

  private apiUrl = 'https://agc-company.onrender.com/api';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.checkAuth();
    this.loadJobs();
    this.loadApplications();
    this.loadContactMessages();
  }

  checkAuth() {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      this.router.navigate(['/admin/login']);
    }
  }

  logout() {
    localStorage.removeItem('adminToken');
    this.router.navigate(['/admin/login']);
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  toggleNewJobForm() {
    this.showAddJobForm = !this.showAddJobForm;
    if (!this.showAddJobForm) {
      this.resetJobForm();
    }
  }

  resetJobForm() {
    this.newJob = {
      title: '',
      category: '',
      location: '',
      type: 'Full-time',
      description: ''
    };
  }

  // API Calls
  loadJobs() {
    this.http.get<any[]>(`${this.apiUrl}/jobs`).subscribe({
      next: (data) => this.jobOpenings = data,
      error: (err) => console.error('Failed to load jobs', err)
    });
  }

  loadApplications() {
    this.http.get<any[]>(`${this.apiUrl}/careers/applications`).subscribe({
      next: (data) => this.applications = data,
      error: (err) => console.error('Failed to load applications', err)
    });
  }

  loadContactMessages() {
    this.http.get<any[]>(`${this.apiUrl}/contact/messages`).subscribe({
      next: (data) => this.contactMessages = data,
      error: (err) => console.error('Failed to load contact messages', err)
    });
  }

  submitNewJob() {
    this.http.post(`${this.apiUrl}/jobs`, this.newJob).subscribe({
      next: () => {
        this.loadJobs();
        this.toggleNewJobForm();
      },
      error: (err) => console.error('Failed to save job', err)
    });
  }

  deleteJob(id: number) {
    if (confirm('Are you sure you want to delete this job opening?')) {
      this.http.delete(`${this.apiUrl}/jobs/${id}`).subscribe({
        next: () => this.loadJobs(),
        error: (err) => console.error('Failed to delete job', err)
      });
    }
  }
}
