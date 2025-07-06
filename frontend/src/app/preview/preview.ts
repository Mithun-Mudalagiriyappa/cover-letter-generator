import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.html',
  styleUrls: ['./preview.scss']
})
export default class PreviewComponent {
  letter: string = localStorage.getItem('letter') || '';
}