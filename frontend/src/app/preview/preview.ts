import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview',
  imports: [CommonModule],
  templateUrl: './preview.html',
  styleUrls: ['./preview.scss']
})
export class PreviewComponent implements OnInit {
  letter = '';
  loading = true;

  ngOnInit(): void {
    const formData = JSON.parse(localStorage.getItem('formData') || '{}');
    if (!formData.name || !formData.role || !formData.experience || !formData.skills) {
      this.letter = '[Error: Missing form data]';
      this.loading = false;
      return;
    }

    fetch('http://localhost:8000/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => {
        const reader = response.body!.getReader();
        const decoder = new TextDecoder('utf-8');
        let gotFirstChunk = false;

        const readChunk = () => {
          reader.read().then(({ done, value }) => {
            if (done) {
              this.loading = false;
              return;
            }

            const text = decoder.decode(value, { stream: true });
            this.letter += text;

            if (!gotFirstChunk && text.trim()) {
              gotFirstChunk = true;
              this.loading = false;
            }

            readChunk();
          });
        };

        readChunk();
      })
      .catch(err => {
        console.error('Streaming error:', err);
        this.letter = '[Error fetching letter]';
        this.loading = false;
      });
  }
}