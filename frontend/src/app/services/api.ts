import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface GenerateRequest {
  name: string;
  role: string;
  experience: string;
  skills: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  generateLetter(data: GenerateRequest): Observable<{ letter: string }> {
    console.log(data);
    return this.http.post<{ letter: string }>('/api/generate', data);
  }
}