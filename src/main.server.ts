import {BootstrapContext, bootstrapApplication} from '@angular/platform-browser';
import {AppPasaperez} from './app/app-pasaperez.component';
import {config} from './app/app.config.server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppPasaperez, config, context);

export default bootstrap;
