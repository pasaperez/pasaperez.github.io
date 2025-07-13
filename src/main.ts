import { bootstrapApplication } from '@angular/platform-browser';
import { AppPasaperez } from './app/app-pasaperez.component';
import {appConfig} from './app/app.config';

bootstrapApplication(AppPasaperez, appConfig)
  .catch((err) => console.error(err));
