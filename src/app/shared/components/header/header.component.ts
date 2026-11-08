import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {LanguageService, PageContent} from '../../../core/services/language.service';

@Component({
  selector: 'header[app-header]',
  standalone: true,
  host: {class: 'nav nav--centre'},
  template: `
    <div class="wrap nav__bar">
      <a class="skip-link" [href]="here + '#top'">{{ c.skip }}</a>
      <a class="nav__logo" [href]="here + '#top'"><span class="mark" data-mark="deploy" aria-hidden="true"></span>Angel Perez</a>
      <nav class="nav__links" [attr.aria-label]="c.nav.main">
        <div class="nav__item"><a class="nav__link" [href]="here + '#proyectos'">{{ c.nav.projects }}</a></div>
        <div class="nav__item"><a class="nav__link" [href]="here + '#experiencia'">{{ c.nav.experience }}</a></div>
        <div class="nav__item"><a class="nav__link" [href]="here + '#tecnologias'">{{ c.nav.stack }}</a></div>
        <div class="nav__item"><a class="nav__link" [href]="here + '#formacion'">{{ c.nav.education }}</a></div>
      </nav>
      <div class="nav__actions">
        <a class="nav__link" [href]="c.switchTo.lang === 'en' ? '/en/' : '/'" [attr.hreflang]="c.switchTo.lang" [attr.lang]="c.switchTo.lang" [title]="c.switchTo.label">{{ c.switchTo.word }}</a>
        <a class="btn btn--primary" [href]="c.cv.file" [attr.download]="c.cv.downloadName">{{ c.cv.label }}</a>
      </div>
      <button class="nav__toggle" type="button" aria-expanded="false" [attr.aria-label]="c.nav.menu">
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class HeaderComponent {
  private languageService: LanguageService = inject(LanguageService);
  protected get here(): string {
    return this.languageService.path();
  }

  protected get c(): PageContent {
    return this.languageService.content();
  }
}
