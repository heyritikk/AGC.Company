import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = {
    firstName: '',
    lastName: '',
    email: '',
    helpTopic: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private http: HttpClient) { }

  onSubmit(form: any) {
    if (form.invalid) return;

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // TODO: Update port based on launchSettings.json
    this.http.post('https://agc-company.onrender.com/api/Contact', this.contactData).subscribe({
      next: (res) => {
        this.submitSuccess = true;
        this.isSubmitting = false;
        form.resetForm();
      },
      error: (err) => {
        console.error(err);
        this.submitError = true;
        this.isSubmitting = false;
      }
    });
  }
}
