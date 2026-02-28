import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  jobs: any[] = [];

  isModalOpen = false;
  selectedJob: any = null;

  applicationData = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    country: '',
    coverLetter: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.http.get<any[]>('http://localhost:5200/api/jobs').subscribe({
      next: (data) => this.jobs = data,
      error: (err) => console.error('Failed to load active jobs', err)
    });
  }

  openApplyModal(job: any) {
    this.selectedJob = job;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeApplyModal() {
    this.isModalOpen = false;
    this.selectedJob = null;
    this.resetFormState();
    document.body.style.overflow = '';
  }

  submitApplication(form: any) {
    if (form.invalid) return;

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const payload = {
      jobId: this.selectedJob.id,
      ...this.applicationData
    };

    const apiUrl = 'http://localhost:5200/api/careers/apply';

    this.http.post(apiUrl, payload).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        setTimeout(() => {
          this.closeApplyModal();
        }, 2000);
      },
      error: (error) => {
        console.error('Error submitting application:', error);
        this.isSubmitting = false;
        this.submitError = true;
      }
    });
  }

  private resetFormState() {
    this.applicationData = {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      country: '',
      coverLetter: ''
    };
    this.submitSuccess = false;
    this.submitError = false;
    this.isSubmitting = false;
  }
}
