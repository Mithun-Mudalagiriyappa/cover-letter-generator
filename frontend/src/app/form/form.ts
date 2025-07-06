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

  loading = false;

  submit() {
    if (!this.form.name || !this.form.role || !this.form.experience || !this.form.skills) return;
     console.log("Form submitted", this.form);

    this.loading = true;
    this.api.generateLetter(this.form).subscribe({
      next: (res) => {
        console.log("Response from backend:", res);

        localStorage.setItem('letter', res.letter);
        this.router.navigate(['/preview']);
      },
      error: (err) => {
        console.error('Generation failed', err);
        alert('Something went wrong. Please try again.');
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}