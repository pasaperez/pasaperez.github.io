import { Component, ChangeDetectionStrategy, inject, afterNextRender } from '@angular/core';
import {LanguageService, PageContent} from './core/services/language.service';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './pages/home/home.component';

@Component({
  standalone: true,
  selector: 'app-root-pasaperez',
  imports: [
    SharedModule, HomeComponent
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <header app-header></header>
    <main app-home></main>
    <footer app-footer></footer>
    <nav class="actionbar" [attr.aria-label]="c.actionbar">
      <a class="btn btn--primary" [href]="c.cv.file" [attr.download]="c.cv.downloadName">{{ c.cv.label }}</a>
    </nav>
  `
})
export class AppPasaperez {
  private languageService: LanguageService = inject(LanguageService);

  constructor() {
    afterNextRender(() => this.localizeLoopPauses());
  }

  protected get c(): PageContent {
    return this.languageService.content();
  }

  private localizeLoopPauses(): void {
    const names: Record<string, string> = {'Pause animation': this.c.loop.pause, 'Play animation': this.c.loop.play};
    const localize = (button: Element): void => {
      for (const attribute of ['aria-label', 'title']) {
        const current = button.getAttribute(attribute) ?? '';
        const name = names[current];
        if (name && name !== current) button.setAttribute(attribute, name);
      }
    };
    new MutationObserver(records => {
      for (const record of records) {
        const target = record.target as Element;
        if (record.type === 'attributes' && target.matches('.loop-pause')) localize(target);
        record.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return;
          if (node.matches('.loop-pause')) localize(node);
          node.querySelectorAll('.loop-pause').forEach(localize);
        });
      }
    }).observe(document.body, {subtree: true, childList: true, attributes: true, attributeFilter: ['aria-label', 'title']});
    document.querySelectorAll('.loop-pause').forEach(localize);
  }
}
