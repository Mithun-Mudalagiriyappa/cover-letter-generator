import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form.html',
  styleUrls: ['./form.scss']
})
export default class FormComponent {
  form = {
    name: '',
    role: '',
    experience: '',
    skills: ''
  };

  constructor(private api: ApiService, private router: Router) { }

  submit() {
    if (!this.form.name || !this.form.role || !this.form.experience || !this.form.skills) return;

    // Save form data for preview component to access
    localStorage.setItem('formData', JSON.stringify(this.form));

    // Navigate to preview page to handle the stream
    this.router.navigate(['/preview']);
  }

}