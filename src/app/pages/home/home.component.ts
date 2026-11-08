import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {LanguageService, PageContent, SkillGroup} from '../../core/services/language.service';
import {Tool, TOOLS, ToolId} from './tools';

@Component({
  selector: 'main[app-home]',
  standalone: true,
  host: {id: 'top'},
  template: `
    <section class="hero hero--collage" data-enter aria-labelledby="hero-h">
      <div class="wrap"><div class="hero-text grid hero__grid">
        <div class="hero__text span-5">
          <h1 id="hero-h">{{ c.hero.name }} <span class="hero__role">{{ c.hero.role }}</span></h1>
          <p class="hero__lead">{{ c.hero.lead }}</p>
          <div class="btn-row">
            <a class="btn btn--primary" [href]="c.cv.file" [attr.download]="c.cv.downloadName">{{ c.cv.label }}<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8"/><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg></a>
            <a class="btn btn--secondary" href="mailto:pasaperez@yahoo.com.ar">{{ c.email }}</a>
          </div>
          <p class="hero__proof"><img class="hero__avatar" src="/perfil.jpg" alt="" width="40" height="40"><span>@for (fact of c.hero.proof; track fact; let last = $last) {{{ fact }}@if (!last) {<i class="hero__sep" aria-hidden="true"> · </i>}}</span></p>
        </div>
        <div class="hero__art span-6 start-7" data-fx="grain-gradient" data-fx-seed="11" role="img" [attr.aria-label]="c.hero.art">
          <div class="ly-piece ly-piece--main" aria-hidden="true" data-ui-loop>
            <div class="ui ui-panel ui-pipe" data-ui="pipeline-board">
              <div class="ui-pipe__head">
                <svg class="ui-icon ui-pipe__branch" viewBox="0 0 16 16" aria-hidden="true"><circle cx="4.5" cy="3.5" r="1.5"/><circle cx="4.5" cy="12.5" r="1.5"/><circle cx="11.5" cy="5" r="1.5"/><path d="M4.5 5v6M11.5 6.5c0 2.6-2.2 3.6-5.6 4.6"/></svg>
                <span class="ui-pipe__repo">{{ c.hero.pipe.repo }}</span><i class="ui-pipe__slash">/</i><code class="ui-pipe__ref">main</code>
                <span class="ui-spacer"></span>
                <span class="ui-pipe__total"><span data-pipe-total>{{ c.hero.pipe.live }}</span></span>
                <span class="ui-chip ui-chip--ink ui-chip--live ui-pipe__chip" data-pipe-chip [attr.data-done]="c.hero.pipe.passed">{{ c.hero.pipe.running }}</span>
              </div>
              <div class="ui-pipe__commit">
                <span class="ui-avatar" data-tone="4">AP</span>
                <span class="ui-pipe__msg">{{ c.hero.pipe.commit }}</span>
                <span class="ui-spacer"></span>
                <button class="ui-btn ui-btn--ghost ui-btn--sm ui-pipe__btn" type="button" tabindex="-1" data-pipe-btn [attr.data-done]="c.hero.pipe.rerun">{{ c.hero.pipe.cancel }}</button>
              </div>
              <ol class="ui-pipe__steps">
                @for (step of c.hero.pipe.steps; track step.name; let i = $index) {
                  <li class="ui-pipe__step" [class.is-run]="i === 0" [attr.style]="i === 0 ? '--k:0' : null" [attr.data-step]="'s' + i"><span class="ui-pipe__ico"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-pipe__name"><span class="ui-pipe__tool" aria-hidden="true"><img [src]="pipeIcon(i)" alt="" width="14" height="14"></span><span class="ui-pipe__nm">{{ step.name }}</span></span><code class="ui-pipe__cmd">{{ step.cmd }}</code><span class="ui-pipe__time" [attr.data-time]="c.hero.pipe.done">{{ i === 0 ? c.hero.pipe.live : c.hero.pipe.queued }}</span><span class="ui-pipe__bar"><i></i></span></li>
                }
              </ol>
            </div>
          </div>
          <div class="hero-card hero__identity" aria-hidden="true">
            <img class="hero-card__photo" src="/perfil.jpg" alt="" width="96" height="96">
            <div class="hero-card__text">
              <b>Angel Santiago Perez</b>
              <span>{{ c.hero.card.role }}</span>
              <span class="hero-card__meta">{{ c.hero.card.place }}</span>
            </div>
          </div>
        </div>
      </div></div>
    </section>

    <section class="section g2" id="proyectos" aria-labelledby="proyectos-h">
      <div class="wrap">
        <div class="group">
          <div class="section-head">
            <h2 id="proyectos-h">{{ c.projects.h2 }} <span class="muted">{{ c.projects.muted }}</span></h2>
          </div>
          <div class="grid">
            <article class="card card--row span-6 m-nolift">
              <h3>{{ c.projects.cards[0].title }}</h3>
              <p>{{ c.projects.cards[0].text }}</p>
              <div class="panel panel--flush"><div class="dg" data-ui-loop [attr.data-diagram]="vbDiagram()"></div></div>
            </article>
            <article class="card card--row span-6 m-nolift">
              <h3>{{ c.projects.cards[1].title }}</h3>
              <p>{{ c.projects.cards[1].text }}</p>
              <div class="panel panel--flush"><div class="dg" data-ui-loop [attr.data-diagram]="wepaDiagram()"></div></div>
            </article>
          </div>
        </div>
        <div class="grid">
          <article class="card card--row span-6 m-nolift">
            <h3>{{ c.projects.cards[2].title }}</h3>
            <p>{{ c.projects.cards[2].text }}</p>
            <div class="panel panel--flush">
              <div class="stage stage--fade-b"><div class="at-rise fit" style="--fit-max:400px;--ax:max(24px, 50% - 200px);--ay:64px;--ay-sm:24px">
                <div class="ui ui-panel ui-checks" data-ui="checklist" data-ui-loop>
                  <div class="ui-checks__head">
                    <div class="ui-title">{{ c.projects.devflow.title }}</div>
                    <span class="ui-spacer"></span>
                    <div class="ui-meta" data-checks-count>{{ c.projects.devflow.count }}</div>
                  </div>
                  <div class="ui-checks__bar"><i data-checks-bar style="--k:0.4"></i></div>
                  <ul class="ui-checks__list">
                    @for (item of c.projects.devflow.items; track item; let i = $index) {
                      <li class="ui-check" [class.is-done]="i < 2"><span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span><span class="ui-check__label">{{ item }}</span></li>
                    }
                  </ul>
                </div>
              </div></div>
            </div>
          </article>
          <article class="card card--row span-6 m-nolift">
            <h3>{{ c.projects.cards[3].title }}</h3>
            <p>{{ c.projects.cards[3].text }}</p>
            <div class="panel panel--flush">
              <div class="stage"><div class="at-rise fit" style="--fit-max:480px;--ax:max(24px, 50% - 240px);--ay:36px;--ay-sm:24px">
                <div class="ui ui-panel ui-term" data-ui="terminal-run" data-ui-loop>
                  <div class="ui-term__head">
                    <span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                    <span class="ui-term__title">{{ c.projects.qaflow.repo }}</span>
                    <span class="ui-meta">claude</span>
                    <span class="ui-spacer"></span>
                    <span class="ui-chip ui-chip--plain ui-term__branch">main</span>
                  </div>
                  <div class="ui-term__screen" data-term-screen>
                    <div class="ui-term__track" data-term-track>
                      <div class="ui-term__ln ui-term__cmd"><span class="ui-term__cwd">~/{{ c.projects.qaflow.repo }}</span><span class="ui-term__sig">&gt;</span><span class="ui-term__typed" data-term-cmd>{{ c.projects.qaflow.cmd }}</span></div>
                      <div class="ui-term__ln ui-term__meter" data-term-out data-term-meter><span class="ui-term__bar" style="--p:1"><i></i></span><span class="ui-term__count" data-term-count>{{ c.projects.qaflow.steps.length }} / {{ c.projects.qaflow.steps.length }}</span></div>
                      @for (step of c.projects.qaflow.steps; track step.stage) {
                        <div class="ui-term__ln ui-term__log" data-term-out data-term-step><svg class="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg><span class="ui-term__path qa-stage">{{ step.stage }}</span><span class="ui-term__dim">{{ step.what }}</span></div>
                      }
                      <div class="ui-term__ln ui-term__gap" data-term-out aria-hidden="true"></div>
                      <div class="ui-term__ln ui-term__sum" data-term-out><span class="ui-term__key">{{ c.projects.qaflow.suite }}</span><span class="ui-term__val">{{ c.projects.qaflow.result }}</span></div>
                      <div class="ui-term__ln ui-term__done" data-term-out data-term-done><span class="ui-term__ok"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 8.3 2.4 2.4 4.6-5"/></svg></span><b>{{ c.projects.qaflow.done }}</b></div>
                      <div class="ui-term__ln ui-term__cmd" data-term-next><span class="ui-term__cwd">~/{{ c.projects.qaflow.repo }}</span><span class="ui-term__sig">&gt;</span><span class="ui-term__typed"></span><i class="ui-term__caret" aria-hidden="true"></i></div>
                    </div>
                  </div>
                </div>
              </div></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section statement" id="enfoque" data-moment="letters-assemble" data-moment-opts='{"spread": 0.8, "from": 0.95, "to": -0.15}' aria-labelledby="enfoque-h">
      <div class="wrap">
        <h2 class="mo-la__type" id="enfoque-h">{{ c.focus.h2 }}</h2>
        <p class="mo-la__sub">{{ c.focus.sub }}</p>
        <dl class="grid focus__stats">
          @for (stat of c.focus.stats; track stat.label) {
            <div class="span-4 focus__stat"><dt>{{ stat.label }}</dt><dd class="t-stat">{{ stat.value }}</dd></div>
          }
        </dl>
      </div>
    </section>

    <section class="section" id="experiencia" style="--hm: 2" aria-labelledby="experiencia-h">
      <div class="wrap">
        <div class="section-head">
          <h2 id="experiencia-h">{{ c.experience.h2 }} <span class="muted">{{ c.experience.muted }}</span></h2>
        </div>
        <ul class="rows jobs">
          @for (job of c.experience.jobs; track job.title) {
            <li>
              <span class="rows__name">{{ job.title }}
                <span class="jobs__where">
                  @if (job.companyUrl) {
                    <a class="link" [href]="job.companyUrl" target="_blank" rel="noopener">{{ job.company }}</a>
                  } @else {
                    {{ job.company }}
                  }
                  · {{ job.place }}
                </span>
              </span>
              <p>{{ job.text }}</p>
              <span class="rows__value"><span class="year">{{ job.years }}</span></span>
            </li>
          }
        </ul>
      </div>
    </section>

    <section class="section ground-surface" id="tecnologias" style="--hm: 2" data-moment="iris-opens" data-moment-opts='{"from": "base", "start": 0.95, "end": 0.1, "ease": "linear"}' aria-labelledby="tecnologias-h">
      <div class="wrap">
        <div class="section-head">
          <h2 id="tecnologias-h">{{ toolCount() }} {{ c.stack.h2 }}. <span class="muted">{{ c.stack.muted }}</span></h2>
        </div>
        <div class="grid tech">
          @for (group of c.stack.groups; track group.name) {
            <div class="tech__group span-3" role="group" [attr.aria-label]="group.name">
              <div class="tech__head"><p class="tech__name">{{ group.name }}</p><span class="tech__count">{{ group.tools.length }}</span></div>
              <ul class="tech__top">
                @for (t of tools(group.tools.slice(0, 4)); track t.name) {
                  <li>
                    @if (t.icon) {
                      <span class="ic-tile ic-tile--40"><img [class]="'ic ' + t.shape" [src]="t.icon" alt="" width="24" height="24" loading="lazy"></span>
                    } @else {
                      <span class="ic-tile ic-tile--40 ic-tile--accent"><span class="ic ic-mask ic-20" [attr.style]="'--m:' + t.glyph"></span></span>
                    }
                    {{ t.name }}
                  </li>
                }
              </ul>
              @if (rest(group).length) {
                <p class="tech__also"><span class="t-label">{{ c.stack.also }}</span> {{ rest(group) }}</p>
              }
            </div>
          }
          @for (m of c.stack.methods; track m.label) {
            <div class="tech__group tech__group--words span-3" role="group" [attr.aria-label]="m.label">
              <div class="tech__head"><p class="tech__name">{{ m.label }}</p><span class="tech__count">{{ m.items.length }}</span></div>
              <ul class="tech__words">
                @for (item of m.items; track item) {
                  <li><i class="tech__dot" aria-hidden="true"></i>{{ item }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section ground-surface" id="sobre-mi" style="--hm: 2" aria-labelledby="sobre-mi-h">
      <div class="wrap">
        <div class="grid grid--top about">
          <div class="span-6">
            <div class="section-head"><h2 id="sobre-mi-h">{{ c.about.h2 }}</h2><p class="about__lead">{{ c.about.lead }}</p></div>
            <div class="card about__card">
            <ul class="ic-list about__facts">
              @for (row of c.about.rows; track row.label; let i = $index) {
                <li class="ic-row">
                  <span class="ic-tile ic-tile--40 ic-tile--accent"><span class="ic ic-mask ic-20" [attr.style]="'--m:' + aboutIcon(i)"></span></span>
                  <span class="ic-row__main"><span class="about__label">{{ row.label }}</span><span class="ic-row__title">{{ row.value }}</span></span>
                </li>
              }
            </ul>
            <p class="about__note"><span class="ic ic-mask ic-20" style="--m:url(assets/icons/ui-accessibility.svg)"></span>{{ c.about.note }}</p>
            <p class="t-label muted list-label about__soft-label" id="blandas-l">{{ c.about.softTitle }}</p>
            <ul class="tags" aria-labelledby="blandas-l">
              @for (skill of c.about.soft; track skill) {
                <li>{{ skill }}</li>
              }
            </ul>
            </div>
          </div>
          <div class="span-6 start-7 about__side">
            <div class="frame frame--photo frame--square about__portrait">
              <img class="frame__img" src="/perfil.jpg" [alt]="c.about.portraitAlt" width="320" height="320" loading="lazy" data-source="client" data-subject="portrait">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="formacion" style="--hm: 2" aria-labelledby="formacion-h">
      <div class="wrap">
        <div class="section-head">
          <h2 id="formacion-h">{{ c.education.h2 }} <span class="muted">{{ c.education.muted }}</span></h2>
        </div>
        <div class="grid grid--top">
          <div class="span-6 edu" role="group" aria-labelledby="titulos-l">
            <p class="t-label muted list-label" id="titulos-l">{{ c.education.degreesTitle }}</p>
            <ul class="rows">
              @for (d of c.education.degrees; track d.title) {
                <li><span class="rows__name">{{ d.title }}</span><p>{{ d.school }}</p><span class="rows__value"><span class="year">{{ d.year }}</span></span></li>
              }
            </ul>
            <p class="t-label muted list-label list-label--next" id="certificaciones-l">{{ c.education.certsTitle }}</p>
            <ul class="edu__certs" aria-labelledby="certificaciones-l">
              @for (cert of c.education.certs; track cert) {
                <li><span class="ic ic-mask ic-20" style="--m:url(assets/icons/ui-badge-check.svg)"></span>{{ cert }}</li>
              }
            </ul>
          </div>
          <div class="span-6 start-7" role="group" aria-labelledby="idiomas-l">
            <p class="t-label muted list-label" id="idiomas-l">{{ c.about.languagesTitle }}</p>
            <article class="card langs">
              <ul>
                @for (l of c.about.languages; track l.label) {
                  <li>
                    <span class="langs__name">{{ l.label }}</span><span class="langs__level">{{ l.value }}</span>
                    <span class="langs__bar" aria-hidden="true"><i [attr.style]="'--v:' + l.level + '%'"></i></span>
                  </li>
                }
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class HomeComponent {
  private languageService: LanguageService = inject(LanguageService);
  protected get c(): PageContent {
    return this.languageService.content();
  }

  protected tools(ids: ToolId[]): Tool[] {
    return ids.map(id => TOOLS[id]);
  }

  protected vbDiagram(): string {
    return JSON.stringify({layout: 'hub', alt: this.c.projects.diagrams.vb, motion: {cycle: 4}, center: {label: 'Spring Boot 4', icon: 'spring'},
      spokes: [{label: 'PostgreSQL', icon: 'postgres'}, {label: 'React', icon: 'react'}, {label: 'Docker', icon: 'docker'},
        {label: 'Caddy', icon: 'caddy'}, {label: 'Cloudflare', icon: 'cloudflare'}, {label: 'DeepSeek', icon: 'deepseek'}]});
  }

  protected wepaDiagram(): string {
    const es = this.languageService.getCurrentLanguage() === 'es';
    return JSON.stringify({layout: 'lanes', alt: this.c.projects.diagrams.wepa, curve: 'curve',
      input: {label: es ? 'Caja' : 'Cash', icon: 'java', sub: 'API'},
      core: {label: 'Amazon SQS', icon: 'aws-sqs'},
      lanes: [{label: 'Lambda', icon: 'aws-lambda', done: true, sub: es ? 'Pagos' : 'Payments'},
        {label: es ? 'Cobros' : 'Billers', icon: 'ui:receipt', done: true, sub: 'Timeouts'},
        {label: 'KMS', icon: 'aws-kms', done: true, sub: 'AuthGuard'}]});
  }

  protected pipeIcon(i: number): string {
    return ['assets/icons/spring.svg', 'assets/icons/playwright.svg', 'assets/icons/postgres.svg', 'assets/icons/docker.svg', 'assets/icons/cloudflare.svg'][i];
  }

  protected toolCount(): number {
    return new Set(this.c.stack.groups.flatMap(g => g.tools)).size;
  }

  // what a tech card names under its four tiles: the group's other tools, then its own note
  protected rest(group: SkillGroup): string {
    return [...this.tools(group.tools.slice(4)).map(t => t.name), ...(group.also ? [group.also] : [])].join(', ');
  }

  protected aboutIcon(i: number): string {
    return `url(assets/icons/ui-${['user-round', 'calendar', 'map-pin'][i]}.svg)`;
  }
}
