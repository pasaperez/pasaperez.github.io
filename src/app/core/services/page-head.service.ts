import {DOCUMENT, Injectable, inject} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import type {Language, PageContent} from './language.service';
import {TOOLS} from '../../pages/home/tools';

const ORIGIN = 'https://pasaperez.github.io';
const PATHS: Record<Language, string> = {es: '/', en: '/en/'};
const LOCALES: Record<Language, string> = {es: 'es_AR', en: 'en_US'};
const PROFILES = ['https://www.linkedin.com/in/pasaperez/', 'https://github.com/pasaperez', 'https://github.com/pasaperez-work'];

@Injectable({providedIn: 'root'})
export class PageHeadService {
  private document: Document = inject(DOCUMENT);
  private title: Title = inject(Title);
  private meta: Meta = inject(Meta);

  public apply(lang: Language, c: PageContent): void {
    const url = ORIGIN + PATHS[lang];
    const other: Language = lang === 'es' ? 'en' : 'es';
    const image = `${ORIGIN}/share.jpg`;
    this.document.documentElement.lang = lang;
    this.title.setTitle(c.meta.title);
    for (const [key, value] of [
      ['description', c.meta.description],
      ['robots', 'index, follow, max-image-preview:large, max-snippet:-1'],
      ['author', 'Angel Santiago Perez'],
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', c.meta.title],
      ['twitter:description', c.meta.description],
      ['twitter:image', image],
      ['twitter:image:alt', c.meta.shareAlt]
    ]) this.meta.updateTag({name: key, content: value});
    for (const [key, value] of [
      ['og:type', 'profile'],
      ['og:site_name', 'Angel Santiago Perez'],
      ['og:url', url],
      ['og:title', c.meta.title],
      ['og:description', c.meta.description],
      ['og:locale', LOCALES[lang]],
      ['og:locale:alternate', LOCALES[other]],
      ['og:image', image],
      ['og:image:width', '1200'],
      ['og:image:height', '750'],
      ['og:image:alt', c.meta.shareAlt],
      ['profile:first_name', 'Angel Santiago'],
      ['profile:last_name', 'Perez']
    ]) this.meta.updateTag({property: key, content: value});
    this.link('canonical', url);
    this.link('alternate', ORIGIN + PATHS.es, 'es');
    this.link('alternate', ORIGIN + PATHS.en, 'en');
    this.link('alternate', ORIGIN + PATHS.es, 'x-default');
    this.jsonLd(this.profile(lang, url, c));
  }

  private link(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
    let el = this.document.head.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.document.createElement('link');
      el.setAttribute('rel', rel);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      this.document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  private jsonLd(data: object): void {
    let el = this.document.head.querySelector<HTMLScriptElement>('script#ld-profile');
    if (!el) {
      el = this.document.createElement('script');
      el.id = 'ld-profile';
      el.type = 'application/ld+json';
      this.document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  private profile(lang: Language, url: string, c: PageContent): object {
    const person = {
      '@type': 'Person',
      '@id': `${ORIGIN}/#person`,
      name: 'Angel Santiago Perez',
      alternateName: 'Angel Perez',
      jobTitle: c.hero.role.charAt(0).toUpperCase() + c.hero.role.slice(1),
      description: c.meta.description,
      image: `${ORIGIN}/perfil.jpg`,
      url,
      sameAs: PROFILES,
      address: {'@type': 'PostalAddress', addressLocality: 'Maipú', addressRegion: 'Mendoza', addressCountry: 'AR'},
      worksFor: {'@type': 'Organization', name: 'Visto Bueno', url: 'https://vistobueno.tech'},
      alumniOf: {'@type': 'CollegeOrUniversity', name: 'Universidad Tecnológica Nacional, Facultad Regional Mendoza'},
      hasCredential: c.education.degrees.map(d => ({'@type': 'EducationalOccupationalCredential', name: d.title, credentialCategory: 'degree'})),
      knowsLanguage: c.about.languages.map(l => l.label),
      knowsAbout: [...new Set(c.stack.groups.flatMap(g => g.tools).map(id => TOOLS[id].name))]
    };
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {'@type': 'ProfilePage', '@id': `${url}#page`, url, name: c.meta.title, inLanguage: lang, mainEntity: {'@id': person['@id']}, isPartOf: {'@id': `${ORIGIN}/#site`}},
        {'@type': 'WebSite', '@id': `${ORIGIN}/#site`, url: `${ORIGIN}/`, name: 'Angel Santiago Perez', inLanguage: ['es', 'en']},
        person
      ]
    };
  }
}
