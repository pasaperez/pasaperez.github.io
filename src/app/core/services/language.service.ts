import {Injectable, inject, signal, WritableSignal} from '@angular/core';
import {PlatformLocation} from '@angular/common';
import {PageHeadService} from './page-head.service';
import {ToolId} from '../../pages/home/tools';

const experienceYears: number = new Date().getFullYear() - 2019;

export type Language = 'es' | 'en';

export interface Labelled {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  text: string;
}

export interface Job {
  title: string;
  company: string;
  companyUrl?: string;
  place: string;
  years: string;
  text: string;
}

export interface SkillGroup {
  name: string;
  tools: ToolId[];
  also?: string;
}

export interface Methods {
  label: string;
  items: string[];
}

export interface Spoken {
  label: string;
  value: string;
  level: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Degree {
  title: string;
  school: string;
  year: string;
}

export interface PageContent {
  meta: {title: string; description: string; shareAlt: string};
  skip: string;
  actionbar: string;
  loop: {pause: string; play: string};
  nav: {projects: string; experience: string; stack: string; education: string; main: string; menu: string};
  switchTo: {lang: Language; word: string; label: string};
  cv: {label: string; file: string; downloadName: string};
  email: string;
  hero: {name: string; role: string; lead: string; proof: string[]; art: string; card: {role: string; place: string}; pipe: {repo: string; commit: string; running: string; passed: string; rerun: string; cancel: string; queued: string; done: string; live: string; steps: {name: string; cmd: string}[]}};
  projects: {h2: string; muted: string; cards: Project[]; diagrams: {vb: string; wepa: string}; devflow: {title: string; count: string; items: string[]}; qaflow: {repo: string; cmd: string; steps: {stage: string; what: string}[]; suite: string; result: string; done: string}};
  experience: {h2: string; muted: string; jobs: Job[]};
  stack: {h2: string; muted: string; also: string; groups: SkillGroup[]; methods: Methods[]};
  focus: {h2: string; sub: string; stats: Stat[]};
  about: {h2: string; lead: string; portraitAlt: string; rows: Labelled[]; softTitle: string; soft: string[]; languagesTitle: string; languages: Spoken[]; note: string};
  education: {h2: string; muted: string; degreesTitle: string; degrees: Degree[]; certsTitle: string; certs: string[]};
  close: {h2: string; line: string; preview: string; previewAlt: string};
  footer: {lede: string; sectionsTitle: string; contactTitle: string; profilesTitle: string; workGithub: string; built: string; trademarks: string};
}

const es: PageContent = {
  meta: {
    title: 'Angel Santiago Perez: ingeniero en sistemas full stack en Mendoza',
    description: `Ingeniero en Sistemas full stack con más de ${experienceYears} años: backend en Java y Spring Boot, frontend en React y Angular, nube en AWS y GCP. Cofundador de Visto Bueno; antes, pagos para la red Wepa en itti.`,
    shareAlt: 'Angel Santiago Perez, ingeniero en sistemas full stack, junto al deploy de Visto Bueno'
  },
  skip: 'Saltar al contenido',
  actionbar: 'Acción rápida',
  loop: {pause: 'Pausar animación', play: 'Reanudar animación'},
  nav: {projects: 'Proyectos', experience: 'Experiencia', stack: 'Tecnologías', education: 'Formación', main: 'Principal', menu: 'Menú'},
  switchTo: {lang: 'en', word: 'English', label: 'Ver la página en inglés'},
  cv: {label: 'Descargar CV', file: '/Angel_Perez_CV_2026_ES.pdf', downloadName: 'Angel_Perez_CV_ES.pdf'},
  email: 'Enviar un email',
  hero: {
    name: 'Angel Perez,',
    role: 'ingeniero en sistemas full stack',
    lead: 'Backend en Java y Spring Boot, frontend en React y Angular, y operación en la nube con AWS, GCP y CI/CD. Cofundé Visto Bueno, un SaaS de alquileres, y construí servicios de pagos para la red Wepa en itti.',
    proof: [`${experienceYears}+ años de ingeniería, hoy también con IA`, 'Liderazgo técnico', 'Inglés C1/C2'],
    card: {role: 'Cofundador y Staff Software Engineer en Visto Bueno', place: 'Maipú, Mendoza · trabajo remoto'},
    art: 'Angel Santiago Perez junto al deploy de Visto Bueno en un comando: tests, QA end-to-end, snapshot de la base, imagen Docker y publicación con Caddy y Cloudflare',
    pipe: {
      repo: 'visto-bueno', commit: 'Deploy a producción', running: 'En curso', passed: 'Listo', rerun: 'Repetir', cancel: 'Cancelar', queued: 'En cola', done: 'Listo', live: 'en curso',
      steps: [
        {name: 'Tests', cmd: '~10.000 tests'},
        {name: 'QA E2E', cmd: '500+ Playwright'},
        {name: 'Snapshot', cmd: 'pg_dump'},
        {name: 'Imagen', cmd: 'docker build'},
        {name: 'Publicar', cmd: 'Caddy y Cloudflare'}
      ]
    }
  },
  projects: {
    h2: 'Sistemas que llevé a producción.',
    muted: 'De pagos a agentes de IA.',
    cards: [
      {title: 'Llevé Visto Bueno a producción', text: 'Monolito modular multi-tenant en Spring Boot 4 y PostgreSQL, con deploy en un comando y rollback automático.'},
      {title: 'Construí pagos para la red Wepa', text: 'Servicios core de una red que procesa millones de transacciones por día, con pagos asíncronos en SQS y Lambda.'},
      {title: 'Cocreé DevFlow para agentes de IA', text: 'Desarrollo guiado por especificaciones para agentes de IA, con una revisión independiente de lo que construyen.'},
      {title: 'Creé QAFlow, QA generado con IA', text: 'QA end-to-end de un sistema completo, generado con IA: más de 500 tests de Playwright.'}
    ],
    diagrams: {
      vb: 'Visto Bueno: Spring Boot 4 con PostgreSQL, React, Docker, Caddy, Cloudflare y lectura de documentos con DeepSeek',
      wepa: 'Wepa: la API de caja encola en SQS y de ahí salen los pagos en Lambda, los facturadores y la autorización con KMS'
    },
    devflow: {title: 'DevFlow · un cambio', count: '2 de 5', items: ['Escribir la especificación', 'Revisar el plan', 'Implementa el agente de IA', 'Revisión independiente', 'Merge a main']},
    qaflow: {
      repo: 'inmo-flow', cmd: '/qaflow', suite: 'Suite', result: '500+ tests en verde', done: 'Listo',
      steps: [
        {stage: 'preflight', what: 'stack arriba'},
        {stage: 'regression', what: 'suite codificada'},
        {stage: 'charter', what: 'unidades de COVERAGE.md'},
        {stage: 'arm', what: 'estado vía helpers'},
        {stage: 'explore', what: 'lo nuevo con MCP de Chrome'},
        {stage: 'codify', what: 'helpers y specs'},
        {stage: 'gate', what: 'specs nuevos en verde'}
      ]
    }
  },
  experience: {
    h2: 'Experiencia desde 2019.',
    muted: 'Seis puestos, de analista a cofundador.',
    jobs: [
      {title: 'Cofundador y Staff Software Engineer', company: 'Visto Bueno', companyUrl: 'https://vistobueno.tech', place: 'Mendoza', years: '2026', text: 'Lideré arquitectura, ingeniería, despliegue y decisiones de tecnología de un SaaS para inmobiliarias, inquilinos, propietarios y portales.'},
      {title: 'Ingeniero de Software Senior', company: 'itti · Wepa', place: 'Remoto', years: '2025 – 2026', text: 'Servicios core de pagos, deploys sin downtime, modernización del core legacy y mentoría con code reviews y pair programming.'},
      {title: 'Experto Técnico Backend / Ingeniero Jefe de Operaciones', company: 'Slingr', place: 'Remoto', years: '2022 – 2025', text: 'Liderazgo técnico de plataformas backend, microservicios y sistemas distribuidos, CI/CD y mentoría de equipos.'},
      {title: 'Desarrollador Full Stack', company: 'Software del Sur', place: 'Mendoza', years: '2021 – 2022', text: 'Plataformas web clínicas y comerciales: análisis funcional, sistemas de gestión médica, testing e implementación.'},
      {title: 'Ingeniero de Sistemas', company: 'Grupo Metacod', place: 'Mendoza', years: '2021 – 2022', text: 'Generador de APIs RESTful integrado con GitHub, configuración DevOps e implementación en AWS.'},
      {title: 'Analista Funcional y Desarrollador de Software', company: 'Proyectos independientes', place: 'Remoto', years: '2019 – 2021', text: 'Sistema de ruteo y control de links, gestión de contenidos y metadatos sobre Google Cloud Platform.'}
    ]
  },
  stack: {
    h2: 'tecnologías que uso',
    muted: 'Arriba, las que más uso.',
    also: 'También',
    groups: [
      {name: 'Backend', tools: ['java', 'spring', 'hibernate', 'node', 'express', 'python', 'go', 'cpp']},
      {name: 'Frontend web', tools: ['angular', 'typescript', 'javascript', 'html', 'css', 'react', 'vue', 'flutter']},
      {name: 'Bases de datos', tools: ['mysql', 'mariadb', 'postgres', 'sqlserver', 'h2', 'mongodb', 'dynamodb', 'couchdb', 'redis', 'valkey']},
      {name: 'Cloud y DevOps', tools: ['docker', 'kubernetes', 'aws', 'gcp', 'jenkins', 'actions', 'caddy', 'cloudflare', 'sentry', 'lambda', 'sqs', 'kms', 'kong']},
      {name: 'Testing y QA', tools: ['selenium', 'testcontainers', 'playwright', 'vitest'], also: 'CI/CD y tests unitarios'},
      {name: 'Ingeniería con IA', tools: ['claude', 'opencode', 'speckit', 'anthropic', 'deepseek', 'ollama'], also: 'DevFlow, OpenSpec, QAFlow y revisión multiagente'}
    ],
    methods: [
      {label: 'Arquitectura', items: ['Microservicios', 'Hexagonal', 'Monolito modular', 'Event-driven', 'Multi-tenancy', 'REST', 'DDD', 'TDD', 'MVC', 'Cliente-servidor', 'POO', 'SOAP']},
      {label: 'Metodologías', items: ['Scrum', 'Kanban', 'XP', 'Agile', 'Waterfall']}
    ]
  },
  focus: {
    h2: 'Ingeniería hasta producción',
    sub: 'Me especializo en desarrollo, arquitectura de microservicios, CI/CD, liderazgo técnico e ingeniería de software con agentes de IA.',
    stats: [
      {value: `${experienceYears}+`, label: 'años de experiencia, desde 2019'},
      {value: '~10.000', label: 'tests en cada deploy de Visto Bueno'},
      {value: '500+', label: 'tests end-to-end generados con QAFlow'}
    ]
  },
  about: {
    h2: 'Sobre mí',
    lead: 'Ingeniero en Sistemas de Información, ingeniero de software senior y arquitecto. Diseño, modernizo y opero plataformas: de servicios de pagos fintech de alto volumen a un SaaS multi-tenant que cofundé y llevé a producción.',
    portraitAlt: 'Retrato de Angel Santiago Perez',
    rows: [
      {label: 'Nombre completo', value: 'Angel Santiago Perez'},
      {label: 'Fecha de nacimiento', value: '28 de mayo de 1996'},
      {label: 'Ubicación', value: 'Maipú, Mendoza, Argentina'}
    ],
    softTitle: 'Habilidades blandas',
    soft: ['Proactividad', 'Liderazgo técnico', 'Autocapacitación', 'Trabajo en equipo', 'Organización', 'Adaptabilidad', 'Metodología', 'Resolución de problemas'],
    languagesTitle: 'Idiomas',
    languages: [
      {label: 'Español', value: 'Nativo', level: 100},
      {label: 'Inglés', value: 'Avanzado (C1/C2)', level: 90},
      {label: 'Alemán', value: 'Básico (A1)', level: 17},
      {label: 'Italiano', value: 'Básico (A1)', level: 17}
    ],
    note: 'Persona con C.U.D. (Certificado Único de Discapacidad).'
  },
  education: {
    h2: 'Formación e idiomas.',
    muted: 'Dos títulos de la UTN Mendoza, en 2022.',
    degreesTitle: 'Títulos',
    degrees: [
      {title: 'Ingeniero en Sistemas de Información', school: 'Universidad Tecnológica Nacional, Facultad Regional Mendoza. Especialización en desarrollo de software y análisis de sistemas.', year: '2022'},
      {title: 'Analista Universitario de Sistemas', school: 'Universidad Tecnológica Nacional, Facultad Regional Mendoza. Título intermedio de la carrera de Ingeniería.', year: '2022'}
    ],
    certsTitle: 'Certificaciones',
    certs: ['Coautor de Metacod System, CoNaIISI 2021', 'Introducción al desarrollo front-end con ReactJS', 'Principios de Blockchain y Bitcoin', 'Redes abiertas y automatización']
  },
  close: {
    h2: 'El CV completo en PDF',
    line: 'En español; la versión en inglés se descarga desde la página en inglés.',
    preview: '/cv-es.jpg',
    previewAlt: 'Primera página del CV de Angel Perez: resumen y habilidades técnicas'
  },
  footer: {
    lede: 'Ingeniero en sistemas full stack en Mendoza, Argentina.',
    sectionsTitle: 'Secciones',
    contactTitle: 'Email',
    profilesTitle: 'Perfiles',
    workGithub: 'GitHub de trabajo',
    built: 'Hecha desde cero con Angular 22 zoneless y publicada en GitHub Pages.',
    trademarks: 'Los nombres y logos de productos son marcas de sus dueños.'
  }
};

const en: PageContent = {
  meta: {
    title: 'Angel Santiago Perez: full stack systems engineer in Mendoza, Argentina',
    description: `Full stack Information Systems Engineer with over ${experienceYears} years: backend in Java and Spring Boot, frontend in React and Angular, cloud on AWS and GCP. Co-founder of Visto Bueno; before that, payments for the Wepa network at itti.`,
    shareAlt: 'Angel Santiago Perez, full stack systems engineer, next to the Visto Bueno deploy'
  },
  skip: 'Skip to content',
  actionbar: 'Quick action',
  loop: {pause: 'Pause animation', play: 'Play animation'},
  nav: {projects: 'Projects', experience: 'Experience', stack: 'Stack', education: 'Education', main: 'Main', menu: 'Menu'},
  switchTo: {lang: 'es', word: 'Español', label: 'Ver la página en español'},
  cv: {label: 'Download CV', file: '/Angel_Perez_CV_2026.pdf', downloadName: 'Angel_Perez_CV_EN.pdf'},
  email: 'Send an email',
  hero: {
    name: 'Angel Perez,',
    role: 'full stack systems engineer',
    lead: 'Backend in Java and Spring Boot, frontend in React and Angular, and cloud operations on AWS and GCP with CI/CD. I co-founded Visto Bueno, a rental SaaS, and built payment services for the Wepa network at itti.',
    proof: [`${experienceYears}+ years of engineering, now also with AI`, 'Technical leadership', 'English C1/C2'],
    card: {role: 'Co-founder & Staff Software Engineer at Visto Bueno', place: 'Maipú, Mendoza · remote work'},
    art: 'Angel Santiago Perez beside the one-command Visto Bueno deploy: tests, end-to-end QA, a database snapshot, a Docker image and publishing with Caddy and Cloudflare',
    pipe: {
      repo: 'visto-bueno', commit: 'Deploy to production', running: 'Running', passed: 'Passed', rerun: 'Re-run', cancel: 'Cancel', queued: 'Queued', done: 'Done', live: 'running',
      steps: [
        {name: 'Tests', cmd: '~10,000 tests'},
        {name: 'E2E QA', cmd: '500+ Playwright'},
        {name: 'Snapshot', cmd: 'pg_dump'},
        {name: 'Image', cmd: 'docker build'},
        {name: 'Publish', cmd: 'Caddy and Cloudflare'}
      ]
    }
  },
  projects: {
    h2: 'Systems I took to production.',
    muted: 'From payments to AI agents.',
    cards: [
      {title: 'Took Visto Bueno to production', text: 'A multi-tenant Spring Boot 4 modular monolith on PostgreSQL, with one-command deploys and automatic rollback.'},
      {title: 'Built payments for the Wepa network', text: 'Core services for a network that processes millions of transactions a day, with asynchronous payments on SQS and Lambda.'},
      {title: 'Co-created DevFlow for AI agents', text: 'Spec-driven development for AI coding agents, with an independent review of what they build.'},
      {title: 'Created QAFlow, AI-generated QA', text: 'End-to-end QA for a whole system, generated with AI: over 500 Playwright tests.'}
    ],
    diagrams: {
      vb: 'Visto Bueno: Spring Boot 4 with PostgreSQL, React, Docker, Caddy, Cloudflare and document reading with DeepSeek',
      wepa: 'Wepa: the cash API queues on SQS, which feeds Lambda payments, the billers and KMS authorization'
    },
    devflow: {title: 'DevFlow · one change', count: '2 of 5', items: ['Write the spec', 'Review the plan', 'The AI agent implements', 'Independent review', 'Merge to main']},
    qaflow: {
      repo: 'inmo-flow', cmd: '/qaflow', suite: 'Suite', result: '500+ tests green', done: 'Done',
      steps: [
        {stage: 'preflight', what: 'stack up'},
        {stage: 'regression', what: 'codified suite'},
        {stage: 'charter', what: 'units from COVERAGE.md'},
        {stage: 'arm', what: 'state via helpers'},
        {stage: 'explore', what: 'new surface via Chrome MCP'},
        {stage: 'codify', what: 'helpers and specs'},
        {stage: 'gate', what: 'new specs green'}
      ]
    }
  },
  experience: {
    h2: 'Experience since 2019.',
    muted: 'Six roles, from analyst to co-founder.',
    jobs: [
      {title: 'Co-founder & Staff Software Engineer', company: 'Visto Bueno', companyUrl: 'https://vistobueno.tech', place: 'Mendoza', years: '2026', text: 'Led architecture, engineering, deployment and technology decisions for a SaaS used by agencies, tenants, landlords and listing portals.'},
      {title: 'Senior Software Engineer', company: 'itti · Wepa', place: 'Remote', years: '2025 – 2026', text: 'Core payment services, zero-downtime deployments, legacy core modernization and mentoring through code reviews and pair programming.'},
      {title: 'Backend Technical Expert / Chief Operations Engineer', company: 'Slingr', place: 'Remote', years: '2022 – 2025', text: 'Technical leadership on backend platforms, microservices and distributed systems, CI/CD and mentoring of development teams.'},
      {title: 'Full Stack Developer', company: 'Software del Sur', place: 'Mendoza', years: '2021 – 2022', text: 'Clinical and commercial web platforms: functional analysis, medical management systems, testing and rollout.'},
      {title: 'Systems Engineer', company: 'Grupo Metacod', place: 'Mendoza', years: '2021 – 2022', text: 'A RESTful API generator integrated with GitHub, DevOps configuration and deployment on AWS.'},
      {title: 'Functional Analyst & Software Developer', company: 'Independent projects', place: 'Remote', years: '2019 – 2021', text: 'A link routing and control system, content and metadata management on Google Cloud Platform.'}
    ]
  },
  stack: {
    h2: 'tools I use',
    muted: 'On top, the ones I use most.',
    also: 'Also',
    groups: [
      {name: 'Backend', tools: ['java', 'spring', 'hibernate', 'node', 'express', 'python', 'go', 'cpp']},
      {name: 'Web frontend', tools: ['angular', 'typescript', 'javascript', 'html', 'css', 'react', 'vue', 'flutter']},
      {name: 'Databases', tools: ['mysql', 'mariadb', 'postgres', 'sqlserver', 'h2', 'mongodb', 'dynamodb', 'couchdb', 'redis', 'valkey']},
      {name: 'Cloud and DevOps', tools: ['docker', 'kubernetes', 'aws', 'gcp', 'jenkins', 'actions', 'caddy', 'cloudflare', 'sentry', 'lambda', 'sqs', 'kms', 'kong']},
      {name: 'Testing and QA', tools: ['selenium', 'testcontainers', 'playwright', 'vitest'], also: 'CI/CD and unit testing'},
      {name: 'AI engineering', tools: ['claude', 'opencode', 'speckit', 'anthropic', 'deepseek', 'ollama'], also: 'DevFlow, OpenSpec, QAFlow and multi-agent review'}
    ],
    methods: [
      {label: 'Architecture', items: ['Microservices', 'Hexagonal', 'Modular monolith', 'Event-driven', 'Multi-tenancy', 'REST', 'DDD', 'TDD', 'MVC', 'Client-server', 'OOP', 'SOAP']},
      {label: 'Methodologies', items: ['Scrum', 'Kanban', 'XP', 'Agile', 'Waterfall']}
    ]
  },
  focus: {
    h2: 'Engineering to production',
    sub: 'I specialize in software development, microservices architecture, CI/CD, technical leadership and software engineering with AI agents.',
    stats: [
      {value: `${experienceYears}+`, label: 'years of experience, since 2019'},
      {value: '~10,000', label: 'tests on every Visto Bueno deploy'},
      {value: '500+', label: 'end-to-end tests generated with QAFlow'}
    ]
  },
  about: {
    h2: 'About me',
    lead: 'Information Systems Engineer, senior software engineer and architect. I design, modernize and run platforms: from high-volume fintech payment services to a multi-tenant SaaS I co-founded and took to production.',
    portraitAlt: 'Portrait of Angel Santiago Perez',
    rows: [
      {label: 'Full name', value: 'Angel Santiago Perez'},
      {label: 'Birth date', value: 'May 28, 1996'},
      {label: 'Location', value: 'Maipú, Mendoza, Argentina'}
    ],
    softTitle: 'Soft skills',
    soft: ['Proactivity', 'Technical leadership', 'Self-learning', 'Teamwork', 'Organization', 'Adaptability', 'Methodology', 'Problem solving'],
    languagesTitle: 'Languages',
    languages: [
      {label: 'Spanish', value: 'Native', level: 100},
      {label: 'English', value: 'Advanced (C1/C2)', level: 90},
      {label: 'German', value: 'Basic (A1)', level: 17},
      {label: 'Italian', value: 'Basic (A1)', level: 17}
    ],
    note: 'Person with a C.U.D. (Argentina’s Unique Disability Certificate).'
  },
  education: {
    h2: 'Education and languages.',
    muted: 'Two UTN Mendoza degrees, in 2022.',
    degreesTitle: 'Degrees',
    degrees: [
      {title: 'Information Systems Engineer', school: 'National Technological University, Mendoza Regional Faculty. Specialized in software development and systems analysis.', year: '2022'},
      {title: 'University Systems Analyst', school: 'National Technological University, Mendoza Regional Faculty. Intermediate degree of the Engineering program.', year: '2022'}
    ],
    certsTitle: 'Certifications',
    certs: ['Co-author of Metacod System, CoNaIISI 2021', 'Introduction to front-end development with ReactJS', 'Blockchain and Bitcoin principles', 'Open networks and automation']
  },
  close: {
    h2: 'The full CV as a PDF',
    line: 'In English; the Spanish version downloads from the Spanish page.',
    preview: '/cv-en.jpg',
    previewAlt: 'First page of Angel Perez’s CV: summary and technical skills'
  },
  footer: {
    lede: 'Full stack systems engineer in Mendoza, Argentina.',
    sectionsTitle: 'Sections',
    contactTitle: 'Email',
    profilesTitle: 'Profiles',
    workGithub: 'Work GitHub',
    built: 'Built from scratch with zoneless Angular 22 and hosted on GitHub Pages.',
    trademarks: 'Product names and logos are trademarks of their owners.'
  }
};

const CONTENT: Record<Language, PageContent> = {es, en};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: WritableSignal<Language> = signal<Language>('es');
  private head: PageHeadService = inject(PageHeadService);

  constructor() {
    const path = inject(PlatformLocation).pathname;
    this.setLanguage(/^\/en(\/|$)/.test(path) ? 'en' : 'es');
  }

  public setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    this.head.apply(lang, CONTENT[lang]);
  }

  public getCurrentLanguage(): Language {
    return this.currentLanguage();
  }

  public path(): string {
    return this.currentLanguage() === 'en' ? '/en/' : '/';
  }

  public content(): PageContent {
    return CONTENT[this.currentLanguage()];
  }
}
