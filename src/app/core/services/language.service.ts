import {effect, Injectable, signal, WritableSignal} from '@angular/core';
import {StorageService} from './storage.service';

const experienceYears: number = new Date().getFullYear() - 2019;

export type Language = 'es' | 'en';

export interface PersonalData {
  portfolio: string;
  name: string;
  title: string;
  summary: string;
  experience: string;
  skills: string;
  education: string;
  other: string;
  personal: string;
  about: string;
  contact: string;
  fullName: string;
  birthDate: string;
  location: string;
  email: string;
  alternativeEmail: string;
  linkedIn: string;
  github: string;
  phone: string;
  downloadCV: string;
  viewInEnglish: string;
  viewInSpanish: string;
  professionalExperience: string;
  technicalSkills: string;
  academicFormation: string;
  certifications: string;
  projects: string;
  languages: string;
  softSkills: string;
  designPatterns: string;
  backendTech: string;
  frontendTech: string;
  databases: string;
  devOps: string;
  mobile: string;
  testing: string;
  methodologies: string;
  yearsExp: string;
  monthsExp: string;
  present: string;
  repositories: string;
  clickToMinimize: string;
  pageFooter: string;
  native: string;
  intermediate: string;
  basic: string;
  advanced: string;
  expertLevel: string;
  professionalLevel: string;
  workingLevel: string;
  basicLevel: string;
  beginner: string;
  expandAll: string;
  collapseAll: string;

  // New properties for improved portfolio
  aboutMeDescription: string;
  experienceYears: string;
  currentPosition: string;
  currentCompany: string;
  workingRemotely: string;
  specializedIn: string;
  keyStrengths: string;
  techStack: string;
  personalRepos: string;
  workRepos: string;
  featuredProjects: string;
  viewProject: string;
  viewCode: string;
  liveDemo: string;
  technologies: string;
  description: string;
  highlights: string;

  // Skills categories
  programmingLanguages: string;
  backendFrameworks: string;
  frontendFrameworks: string;
  databaseTech: string;
  cloudDevOps: string;
  mobiledev: string;
  testingTools: string;
  designPatternsTitle: string;
  developmentMethodologies: string;

  // Experience details
  jobTitle: string;
  company: string;
  period: string;
  responsibilities: string;
  achievements: string;

  // Education
  degree: string;
  university: string;
  graduationYear: string;
  relevantCourses: string;

  // Contact info
  getInTouch: string;
  sendMessage: string;
  followMe: string;

  // Navigation
  home: string;
  aboutSection: string;
  skillsSection: string;
  experienceSection: string;
  projectsSection: string;
  educationSection: string;
  contactSection: string;

  slingr_title: string;
  slingr_company: string;
  slingr_location: string;
  slingr_desc1: string;
  slingr_desc2: string;
  slingr_desc3: string;
  slingr_desc4: string;
  softwaredelsur_title: string;
  softwaredelsur_company: string;
  softwaredelsur_location: string;
  softwaredelsur_desc1: string;
  softwaredelsur_desc2: string;
  softwaredelsur_desc3: string;
  softwaredelsur_desc4: string;
  metacod_title: string;
  metacod_company: string;
  metacod_location: string;
  metacod_desc1: string;
  metacod_desc2: string;
  metacod_desc3: string;
  metacod_desc4: string;
  freelance_title: string;
  freelance_company: string;
  freelance_location: string;
  freelance_desc1: string;
  freelance_desc2: string;
  freelance_desc3: string;
  freelance_desc4: string;
  degree1: string;
  degree1_desc: string;
  university1: string;
  degree2: string;
  degree2_desc: string;
  university2: string;
  cert1: string;
  cert2: string;
  cert3: string;
  cert4: string;
  softskill_proactivity: string;
  softskill_leadership: string;
  softskill_selflearning: string;
  softskill_teamwork: string;
  softskill_organization: string;
  softskill_adaptability: string;
  softskill_methodology: string;
  softskill_problem_solving: string;
  full_name_value: string;
  birth_date_value: string;
  location_value: string;
  disability_note: string;
  spanish: string;
  english: string;
  german: string;
  italian: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: WritableSignal<Language> = signal<Language>('es');

  constructor(private storageService: StorageService) {
    const savedLang = this.storageService.getItem('language') as Language | 'es';
    if (savedLang) {
      this.currentLanguage.set(savedLang);
    }
   effect(() => {
      const lang = this.currentLanguage();
      this.storageService.saveItem('language', lang);
    });
  }

  private translations: Record<Language, PersonalData> = {
    es: {
      portfolio: 'Portafolio',
      name: 'Angel Santiago Perez',
      title: 'Ingeniero en Sistemas - Analista de Sistemas - Desarrollador Backend',
      summary: 'Resumen',
      experience: 'Experiencia Profesional',
      skills: 'Conocimientos Tecnológicos',
      education: 'Formación Académica',
      other: 'Otros Conocimientos',
      personal: 'Antecedentes Personales',
      about: 'Sobre Mí',
      contact: 'Contacto',
      fullName: 'Nombre Completo',
      birthDate: 'Fecha de Nacimiento',
      location: 'Ubicación',
      email: 'Email',
      alternativeEmail: 'Email Alternativo',
      linkedIn: 'LinkedIn',
      github: 'GitHub',
      phone: 'Teléfono',
      downloadCV: 'Descargar CV',
      viewInEnglish: 'View in English',
      viewInSpanish: 'Ver en Español',
      professionalExperience: 'Experiencia Profesional en Desarrollo',
      technicalSkills: 'Conocimientos Tecnológicos',
      academicFormation: 'Formación Académica y Certificaciones',
      certifications: 'Certificaciones',
      projects: 'Proyectos Destacados',
      languages: 'Idiomas',
      softSkills: 'Habilidades Blandas',
      designPatterns: 'Patrones de Diseño',
      backendTech: 'Tecnologías Backend',
      frontendTech: 'Tecnologías Frontend',
      databases: 'Bases de Datos',
      devOps: 'DevOps & Cloud',
      mobile: 'Desarrollo Móvil',
      testing: 'Testing & CI/CD',
      methodologies: 'Metodologías',
      yearsExp: 'años de experiencia',
      monthsExp: 'meses de experiencia',
      present: 'Presente',
      repositories: 'Repositorios',
      clickToMinimize: 'Hacer clic para minimizar',
      pageFooter: 'Esta página web fue hecha desde cero por mi mismo. Desarrollado con Angular 20 Zoneless, alojado en GitHub Pages.',
      native: 'Nativo',
      intermediate: 'Intermedio',
      basic: 'Básico',
      advanced: 'Avanzado',
      expertLevel: 'Experto',
      professionalLevel: 'Profesional',
      workingLevel: 'Laboral',
      basicLevel: 'Básico',
      beginner: 'Principiante',
      expandAll: 'Expandir Todo',
      collapseAll: 'Contraer Todo',

      // New properties
      aboutMeDescription: 'Soy un Ingeniero en Sistemas con más de '+experienceYears+' años de experiencia especializándome en desarrollo backend y arquitectura de sistemas escalables. Actualmente trabajo como Backend Technical Expert en Slingr, donde lidero equipos técnicos y diseño soluciones empresariales robustas.',
      experienceYears: experienceYears+'+',
      currentPosition: 'Backend Technical Expert / Chief Operations Engineer',
      currentCompany: 'Slingr',
      workingRemotely: 'Trabajo Remoto',
      specializedIn: 'Especializado en desarrollo backend, arquitectura de microservicios, CI/CD y liderazgo técnico',
      keyStrengths: 'Fortalezas Clave',
      techStack: 'Stack Tecnológico',
      personalRepos: 'Repositorios Personales',
      workRepos: 'Repositorios Profesionales',
      featuredProjects: 'Proyectos Destacados',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
      liveDemo: 'Demo en Vivo',
      technologies: 'Tecnologías',
      description: 'Descripción',
      highlights: 'Aspectos Destacados',

      // Skills categories
      programmingLanguages: 'Lenguajes de Programación',
      backendFrameworks: 'Frameworks Backend',
      frontendFrameworks: 'Frameworks Frontend',
      databaseTech: 'Bases de Datos',
      cloudDevOps: 'Cloud & DevOps',
      mobiledev: 'Desarrollo Móvil',
      testingTools: 'Testing & QA',
      designPatternsTitle: 'Patrones de Diseño',
      developmentMethodologies: 'Metodologías de Desarrollo',

      // Experience details
      jobTitle: 'Cargo',
      company: 'Empresa',
      period: 'Período',
      responsibilities: 'Responsabilidades',
      achievements: 'Logros',

      // Education
      degree: 'Título',
      university: 'Universidad',
      graduationYear: 'Año de Graduación',
      relevantCourses: 'Cursos Relevantes',

      // Contact info
      getInTouch: 'Ponte en Contacto',
      sendMessage: 'Enviar Mensaje',
      followMe: 'Sígueme',

      // Navigation
      home: 'Inicio',
      aboutSection: 'Sobre Mí',
      skillsSection: 'Habilidades',
      experienceSection: 'Experiencia',
      projectsSection: 'Proyectos',
      educationSection: 'Formación',
      contactSection: 'Contacto',
      slingr_title: "Experto Técnico Backend / Ingeniero Jefe de Operaciones",
      slingr_company: "Slingr",
      slingr_location: "Remoto, Mendoza, Argentina",
      slingr_desc1: "Liderazgo técnico en desarrollo de plataformas backend escalables",
      slingr_desc2: "Arquitectura de microservicios y sistemas distribuidos",
      slingr_desc3: "Implementación de CI/CD y prácticas DevOps",
      slingr_desc4: "Mentoreo de equipos de desarrollo",
      softwaredelsur_title: "Desarrollador Full Stack",
      softwaredelsur_company: "Software del Sur S.R.L.",
      softwaredelsur_location: "Mendoza, Argentina",
      softwaredelsur_desc1: "Desarrollo de plataformas web clínicas y comerciales",
      softwaredelsur_desc2: "Análisis funcional y diseño de sistemas",
      softwaredelsur_desc3: "Implementación de sistemas de gestión médica",
      softwaredelsur_desc4: "Testing e implementación de soluciones web",
      metacod_title: "Ingeniero de Sistemas",
      metacod_company: "Grupo Metacod Simple Asociación",
      metacod_location: "Mendoza, Argentina",
      metacod_desc1: "Desarrollo de sistema generador de APIs RESTful",
      metacod_desc2: "Integración con GitHub y configuración DevOps",
      metacod_desc3: "Implementación en AWS",
      metacod_desc4: "Análisis de requisitos y factibilidad",
      freelance_title: "Analista Funcional & Desarrollador de Software",
      freelance_company: "Proyectos Independientes",
      freelance_location: "Remoto, Argentina",
      freelance_desc1: "Sistema de routeo y control de links",
      freelance_desc2: "Gestión de contenidos y metadatos",
      freelance_desc3: "Implementación en Google Cloud Platform",
      freelance_desc4: "Desarrollo de soluciones personalizadas",
      degree1: "Ingeniero en Sistemas de Información",
      degree1_desc: "Graduado con especialización en desarrollo de software y análisis de sistemas",
      university1: "Universidad Tecnológica Nacional - Facultad Regional Mendoza",
      degree2: "Analista Universitario de Sistemas",
      degree2_desc: "Título intermedio obtenido durante la carrera de Ingeniería",
      university2: "Universidad Tecnológica Nacional - Facultad Regional Mendoza",
      cert1: "Coautor de Metacod System - CoNaIISI 2021",
      cert2: "Introducción al Desarrollo Front-end con ReactJS",
      cert3: "Principios de Blockchain y Bitcoin",
      cert4: "Redes Abiertas y Automatización",
      softskill_proactivity: "Proactividad",
      softskill_leadership: "Liderazgo Técnico",
      softskill_selflearning: "Autocapacitación",
      softskill_teamwork: "Trabajo en Equipo",
      softskill_organization: "Organización",
      softskill_adaptability: "Adaptabilidad",
      softskill_methodology: "Metodología",
      softskill_problem_solving: "Resolución de Problemas",
      full_name_value: "Angel Santiago Perez",
      birth_date_value: "28 de mayo de 1996",
      location_value: "Maipú, Mendoza, Argentina",
      disability_note: "Persona con C.U.D. (Certificado Único de Discapacidad)",
      spanish: "Español",
      english: "Inglés",
      german: "Alemán",
      italian: "Italiano"
    },
    en: {
      portfolio: 'Portfolio',
      name: 'Angel Santiago Perez',
      title: 'Information Systems Engineer - Systems Analyst - Backend Developer',
      summary: 'Summary',
      experience: 'Professional Experience',
      skills: 'Technical Skills',
      education: 'Academic Background',
      other: 'Other Knowledge',
      personal: 'Personal Background',
      about: 'About Me',
      contact: 'Contact',
      fullName: 'Full Name',
      birthDate: 'Birth Date',
      location: 'Location',
      email: 'Email',
      alternativeEmail: 'Alternative Email',
      linkedIn: 'LinkedIn',
      github: 'GitHub',
      phone: 'Phone',
      downloadCV: 'Download CV',
      viewInEnglish: 'View in English',
      viewInSpanish: 'Ver en Español',
      professionalExperience: 'Professional Development Experience',
      technicalSkills: 'Technical Skills',
      academicFormation: 'Academic Formation & Certifications',
      certifications: 'Certifications',
      projects: 'Featured Projects',
      languages: 'Languages',
      softSkills: 'Soft Skills',
      designPatterns: 'Design Patterns',
      backendTech: 'Backend Technologies',
      frontendTech: 'Frontend Technologies',
      databases: 'Databases',
      devOps: 'DevOps & Cloud',
      mobile: 'Mobile Development',
      testing: 'Testing & CI/CD',
      methodologies: 'Methodologies',
      yearsExp: 'years of experience',
      monthsExp: 'months of experience',
      present: 'Present',
      repositories: 'Repositories',
      clickToMinimize: 'Click to minimize',
      pageFooter: 'This website was built from scratch by myself. Developed with Angular 20 Zoneless, hosted on GitHub Pages.',
      native: 'Native',
      intermediate: 'Intermediate',
      basic: 'Basic',
      advanced: 'Advanced',
      expertLevel: 'Expert',
      professionalLevel: 'Professional',
      workingLevel: 'Working',
      basicLevel: 'Basic',
      beginner: 'Beginner',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',

      // New properties
      aboutMeDescription: 'I am an Information Systems Engineer with over '+experienceYears+' years of experience specializing in backend development and scalable system architecture. Currently working as Backend Technical Expert at Slingr, where I lead technical teams and design robust enterprise solutions.',
      experienceYears: experienceYears+'+',
      currentPosition: 'Backend Technical Expert / Chief Operations Engineer',
      currentCompany: 'Slingr',
      workingRemotely: 'Remote Work',
      specializedIn: 'Specialized in backend development, microservices architecture, CI/CD and technical leadership',
      keyStrengths: 'Key Strengths',
      techStack: 'Tech Stack',
      personalRepos: 'Personal Repositories',
      workRepos: 'Professional Repositories',
      featuredProjects: 'Featured Projects',
      viewProject: 'View Project',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      technologies: 'Technologies',
      description: 'Description',
      highlights: 'Highlights',

      // Skills categories
      programmingLanguages: 'Programming Languages',
      backendFrameworks: 'Backend Frameworks',
      frontendFrameworks: 'Frontend Frameworks',
      databaseTech: 'Database Technologies',
      cloudDevOps: 'Cloud & DevOps',
      mobiledev: 'Mobile Development',
      testingTools: 'Testing & QA',
      designPatternsTitle: 'Design Patterns',
      developmentMethodologies: 'Development Methodologies',

      // Experience details
      jobTitle: 'Job Title',
      company: 'Company',
      period: 'Period',
      responsibilities: 'Responsibilities',
      achievements: 'Achievements',

      // Education
      degree: 'Degree',
      university: 'University',
      graduationYear: 'Graduation Year',
      relevantCourses: 'Relevant Courses',

      // Contact info
      getInTouch: 'Get In Touch',
      sendMessage: 'Send Message',
      followMe: 'Follow Me',

      // Navigation
      home: 'Home',
      aboutSection: 'About',
      skillsSection: 'Skills',
      experienceSection: 'Experience',
      projectsSection: 'Projects',
      educationSection: 'Education',
      contactSection: 'Contact',
      slingr_title: "Backend Technical Expert / Chief Operations Engineer",
      slingr_company: "Slingr",
      slingr_location: "Remote, Mendoza, Argentina",
      slingr_desc1: "Technical leadership in developing scalable backend platforms",
      slingr_desc2: "Microservices architecture and distributed systems",
      slingr_desc3: "Implementation of CI/CD and DevOps practices",
      slingr_desc4: "Mentoring development teams",
      softwaredelsur_title: "Full Stack Developer",
      softwaredelsur_company: "Software del Sur S.R.L.",
      softwaredelsur_location: "Mendoza, Argentina",
      softwaredelsur_desc1: "Development of clinical and commercial web platforms",
      softwaredelsur_desc2: "Functional analysis and system design",
      softwaredelsur_desc3: "Implementation of medical management systems",
      softwaredelsur_desc4: "Testing and implementation of web solutions",
      metacod_title: "Systems Engineer",
      metacod_company: "Grupo Metacod Simple Asociación",
      metacod_location: "Mendoza, Argentina",
      metacod_desc1: "Development of RESTful API generator system",
      metacod_desc2: "Integration with GitHub and DevOps configuration",
      metacod_desc3: "Implementation on AWS",
      metacod_desc4: "Requirements and feasibility analysis",
      freelance_title: "Functional Analyst & Software Developer",
      freelance_company: "Independent Projects",
      freelance_location: "Remote, Argentina",
      freelance_desc1: "Routing and link control system",
      freelance_desc2: "Content and metadata management",
      freelance_desc3: "Implementation on Google Cloud Platform",
      freelance_desc4: "Development of custom solutions",
      degree1: "Information Systems Engineer",
      degree1_desc: "Graduated with specialization in software development and systems analysis",
      university1: "National Technological University - Mendoza Regional Faculty",
      degree2: "University Systems Analyst",
      degree2_desc: "Intermediate degree obtained during the Engineering program",
      university2: "National Technological University - Mendoza Regional Faculty",
      cert1: "Co-author of Metacod System - CoNaIISI 2021",
      cert2: "Introduction to Front-end Development with ReactJS…",
      cert3: "Blockchain and Bitcoin Principles",
      cert4: "Open Networks and Automation",
      softskill_proactivity: "Proactivity",
      softskill_leadership: "Technical Leadership",
      softskill_selflearning: "Self-learning",
      softskill_teamwork: "Teamwork",
      softskill_organization: "Organization",
      softskill_adaptability: "Adaptability",
      softskill_methodology: "Methodology",
      softskill_problem_solving: "Problem Solving",
      full_name_value: "Angel Santiago Perez",
      birth_date_value: "May 28, 1996",
      location_value: "Maipú, Mendoza, Argentina",
      disability_note: "Person with C.U.D. (Unique Disability Certificate)",
      spanish: "Spanish",
      english: "English",
      german: "German",
      italian: "Italian"
    }
  };

  public setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
  }

  public getTranslation(key: keyof PersonalData): string {
    return this.translations[this.currentLanguage()][key];
  }

  public getCurrentLanguage(): Language {
    return this.currentLanguage();
  }
}
