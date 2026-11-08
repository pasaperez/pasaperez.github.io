import { bootstrapApplication } from '@angular/platform-browser';
import { AppPasaperez } from './app/app-pasaperez.component';
import {appConfig} from './app/app.config';

const loadKit = (): void => {
  for (const src of ['assets/system.js', 'assets/motion/motion.js', 'assets/layout/layout.js', 'assets/diagrams/mount.js']) {
    const script = document.createElement('script');
    script.type = 'module';
    script.async = false;
    script.src = src;
    document.body.append(script);
  }
};

const asked = new URLSearchParams(location.search).get('lang');
const target = asked === 'en' ? '/en/' : asked === 'es' ? '/' : null;
if (target) {
  location.replace(target + location.hash);
} else {
  bootstrapApplication(AppPasaperez, appConfig)
    .then(loadKit)
    .catch((err) => console.error(err));
}
