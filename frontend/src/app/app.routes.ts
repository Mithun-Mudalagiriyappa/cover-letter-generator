import { Routes } from '@angular/router';
import FormComponent from './form/form';
import {PreviewComponent} from './preview/preview';

export const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'preview', component: PreviewComponent }
];