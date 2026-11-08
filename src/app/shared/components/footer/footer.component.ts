import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {LanguageService, PageContent} from '../../../core/services/language.service';

@Component({
  selector: 'footer[app-footer]',
  standalone: true,
  host: {class: 'footer closing footer--statement g2m', id: 'contact', 'aria-labelledby': 'close-h'},
  template: `
    <div class="wrap">
      <div class="closing__cta close--type">
        <div class="grid close__grid">
          <div class="span-6 close__text">
            <div class="section-head">
              <h2 id="close-h">{{ c.close.h2 }}</h2>
              <p>{{ c.close.line }}</p>
            </div>
            <a class="btn btn--primary" [href]="c.cv.file" [attr.download]="c.cv.downloadName">{{ c.cv.label }}<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8"/><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg></a>
          </div>
          <div class="span-6 start-7 frame frame--photo close__cv">
            <img class="frame__img" [src]="c.close.preview" [alt]="c.close.previewAlt" width="720" height="850" loading="lazy" data-source="client">
          </div>
        </div>
      </div>
      <div class="closing__links">
        <div class="grid">
          <div class="span-4 stack-4">
            <a class="nav__logo" [href]="here + '#top'"><span class="mark" data-mark="deploy" aria-hidden="true"></span>Angel Perez</a>
            <p class="footer__lede">{{ c.footer.lede }}</p>
          </div>
          <div class="span-2 footer__col">
            <h3>{{ c.footer.sectionsTitle }}</h3>
            <ul>
              <li><a [href]="here + '#proyectos'">{{ c.nav.projects }}</a></li>
              <li><a [href]="here + '#experiencia'">{{ c.nav.experience }}</a></li>
              <li><a [href]="here + '#tecnologias'">{{ c.nav.stack }}</a></li>
              <li><a [href]="here + '#formacion'">{{ c.nav.education }}</a></li>
            </ul>
          </div>
          <div class="span-3 footer__col">
            <h3>{{ c.footer.contactTitle }}</h3>
            <ul>
              <li><a href="mailto:pasaperez@yahoo.com.ar">pasaperez&#64;yahoo.com.ar</a></li>
              <li><a href="mailto:angel.pasaperez@gmail.com">angel.pasaperez&#64;gmail.com</a></li>
            </ul>
          </div>
          <div class="span-3 footer__col">
            <h3>{{ c.footer.profilesTitle }}</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/pasaperez/" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="https://github.com/pasaperez" target="_blank" rel="noopener">GitHub</a></li>
              <li><a href="https://github.com/pasaperez-work" target="_blank" rel="noopener">{{ c.footer.workGithub }}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__legal">
          <span>&copy; {{ currentYear }} Angel Santiago Perez. {{ c.footer.built }}</span>
          <span>{{ c.footer.trademarks }}</span>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class FooterComponent {
  private languageService: LanguageService = inject(LanguageService);
  protected get here(): string {
    return this.languageService.path();
  }
  protected currentYear: number = new Date().getFullYear();

  protected get c(): PageContent {
    return this.languageService.content();
  }
}
