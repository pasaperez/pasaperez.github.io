import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SharedModule} from './shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-root-pasaperez',
  imports: [
    RouterOutlet, SharedModule
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class AppPasaperez {}
