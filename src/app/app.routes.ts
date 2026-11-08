import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', children: []},
  {path: 'en', children: []},
  {path: '**', redirectTo: ''}
];
