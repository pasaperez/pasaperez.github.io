import {Component, inject} from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatButton} from '@angular/material/button';
import {LanguageService, PersonalData} from '../../core/services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatDivider,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatIcon,
    MatChip,
    MatChipSet,
    MatButton
  ],
  template: `
    <div class="portfolio-container">
      <section class="hero-section">
        <div class="hero-content">
          <div class="profile-image">
            <img src="/perfil.jpg" alt="{{getTranslation('name')}}">
          </div>
          <div class="hero-text">
            <h1>{{getTranslation('name')}}</h1>
            <h2>{{getTranslation('title')}}</h2>
            <p class="hero-description">{{getTranslation('aboutMeDescription')}}</p>
            <div class="hero-stats">
              <div class="stat">
                <span class="stat-number">{{getTranslation('experienceYears')}}</span>
                <span class="stat-label">{{getTranslation('yearsExp')}}</span>
              </div>
              <div class="stat">
                <span class="stat-position">{{getTranslation('currentPosition')}}</span>
                <span class="stat-company">{{getTranslation('currentCompany')}}</span>
              </div>
              <div class="stat">
                <span class="stat-work">{{getTranslation('workingRemotely')}}</span>
              </div>
            </div>
            <div class="hero-actions">
              <a mat-raised-button color="primary" class="cta-button" href="/Angel_Perez_CV_2025.pdf" download="Angel_Perez_CV.pdf">
                <mat-icon>download</mat-icon>
                {{getTranslation('downloadCV')}}
              </a>
              <a mat-stroked-button class="contact-button" href="mailto:pasaperez@yahoo.com.ar" target="_blank">
                <mat-icon>mail</mat-icon>
                {{getTranslation('contact')}}
              </a>
            </div>
          </div>
        </div>
      </section>

      <mat-divider class="section-divider"></mat-divider>

      <section class="about-section">
        <div class="section-header">
          <h3>{{getTranslation('about')}}</h3>
        </div>
        <div class="about-content">
          <div class="about-text">
            <p>{{getTranslation('specializedIn')}}</p>
          </div>
          <div class="key-strengths">
            <h4>{{getTranslation('keyStrengths')}}</h4>
            <mat-chip-set>
              <mat-chip>{{getTranslation('backendTech')}}</mat-chip>
              <mat-chip>{{getTranslation('devOps')}}</mat-chip>
              <mat-chip>{{getTranslation('methodologies')}}</mat-chip>
              <mat-chip>{{getTranslation('softSkills')}}</mat-chip>
            </mat-chip-set>
          </div>
        </div>
      </section>

      <mat-divider class="section-divider"></mat-divider>

      <section class="experience-section">
        <div class="section-header">
          <h3>{{getTranslation('professionalExperience')}}</h3>
        </div>
        <div class="experience-timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>{{getTranslation('slingr_title')}}</h4>
              <h5>{{getTranslation('slingr_company')}}</h5>
              <span class="period">2022 - {{getTranslation('present')}}</span>
              <p>{{getTranslation('workingRemotely')}}</p>
              <ul>
                <li>{{getTranslation('slingr_desc1')}}</li>
                <li>{{getTranslation('slingr_desc2')}}</li>
                <li>{{getTranslation('slingr_desc3')}}</li>
                <li>{{getTranslation('slingr_desc4')}}</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>{{getTranslation('softwaredelsur_title')}}</h4>
              <h5>{{getTranslation('softwaredelsur_company')}}</h5>
              <span class="period">2021 - 2022</span>
              <p>{{getTranslation('softwaredelsur_location')}}</p>
              <ul>
                <li>{{getTranslation('softwaredelsur_desc1')}}</li>
                <li>{{getTranslation('softwaredelsur_desc2')}}</li>
                <li>{{getTranslation('softwaredelsur_desc3')}}</li>
                <li>{{getTranslation('softwaredelsur_desc4')}}</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>{{getTranslation('metacod_title')}}</h4>
              <h5>{{getTranslation('metacod_company')}}</h5>
              <span class="period">2021 - 2022</span>
              <p>{{getTranslation('metacod_location')}}</p>
              <ul>
                <li>{{getTranslation('metacod_desc1')}}</li>
                <li>{{getTranslation('metacod_desc2')}}</li>
                <li>{{getTranslation('metacod_desc3')}}</li>
                <li>{{getTranslation('metacod_desc4')}}</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>{{getTranslation('freelance_title')}}</h4>
              <h5>{{getTranslation('freelance_company')}}</h5>
              <span class="period">2019 - 2021</span>
              <p>{{getTranslation('freelance_location')}}</p>
              <ul>
                <li>{{getTranslation('freelance_desc1')}}</li>
                <li>{{getTranslation('freelance_desc2')}}</li>
                <li>{{getTranslation('freelance_desc3')}}</li>
                <li>{{getTranslation('freelance_desc4')}}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <mat-divider class="section-divider"></mat-divider>

      <section class="skills-section">
        <div class="section-header">
          <h3>{{getTranslation('technicalSkills')}}</h3>
          <div class="expand-controls">
            <button mat-button (click)="expandAll()">
              <mat-icon>expand_more</mat-icon>
              {{getTranslation('expandAll')}}
            </button>
            <button mat-button (click)="collapseAll()">
              <mat-icon>expand_less</mat-icon>
              {{getTranslation('collapseAll')}}
            </button>
          </div>
        </div>

        <div class="skills-grid">
          <mat-expansion-panel class="skill-category" [expanded]="allExpanded">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon>code</mat-icon>
                {{getTranslation('programmingLanguages')}}
              </mat-panel-title>
            </mat-expansion-panel-header>
            <div class="skills-content">
              <div class="skill-group">
                <h5>{{getTranslation('backendFrameworks')}}</h5>
                <mat-chip-set>
                  <mat-chip class="skill-expert">Java 8+</mat-chip>
                  <mat-chip class="skill-advanced">Spring Boot</mat-chip>
                  <mat-chip class="skill-advanced">Hibernate</mat-chip>
                  <mat-chip class="skill-professional">Node.js</mat-chip>
                  <mat-chip class="skill-professional">Express.js</mat-chip>
                  <mat-chip class="skill-intermediate">Python</mat-chip>
                  <mat-chip class="skill-intermediate">C/C++</mat-chip>
                </mat-chip-set>
              </div>
              <div class="skill-group">
                <h5>{{getTranslation('frontendFrameworks')}}</h5>
                <mat-chip-set>
                  <mat-chip class="skill-expert">Angular 8+</mat-chip>
                  <mat-chip class="skill-advanced">TypeScript</mat-chip>
                  <mat-chip class="skill-advanced">JavaScript</mat-chip>
                  <mat-chip class="skill-professional">HTML5/CSS3</mat-chip>
                  <mat-chip class="skill-intermediate">React</mat-chip>
                  <mat-chip class="skill-intermediate">Vue.js</mat-chip>
                  <mat-chip class="skill-basic">Flutter/Dart</mat-chip>
                </mat-chip-set>
              </div>
            </div>
          </mat-expansion-panel>

          <mat-expansion-panel class="skill-category" [expanded]="allExpanded">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon>storage</mat-icon>
                {{getTranslation('databaseTech')}}
              </mat-panel-title>
            </mat-expansion-panel-header>
            <div class="skills-content">
              <div class="skill-group">
                <h5>SQL {{getTranslation('databases')}}</h5>
                <mat-chip-set>
                  <mat-chip class="skill-expert">MySQL/MariaDB</mat-chip>
                  <mat-chip class="skill-advanced">PostgreSQL</mat-chip>
                  <mat-chip class="skill-professional">MS SQL Server</mat-chip>
                  <mat-chip class="skill-professional">H2</mat-chip>
                </mat-chip-set>
              </div>
              <div class="skill-group">
                <h5>NoSQL {{getTranslation('databases')}}</h5>
                <mat-chip-set>
                  <mat-chip class="skill-professional">MongoDB</mat-chip>
                  <mat-chip class="skill-intermediate">DynamoDB</mat-chip>
                </mat-chip-set>
              </div>
            </div>
          </mat-expansion-panel>

          <mat-expansion-panel class="skill-category" [expanded]="allExpanded">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon>cloud</mat-icon>
                {{getTranslation('cloudDevOps')}}
              </mat-panel-title>
            </mat-expansion-panel-header>
            <div class="skills-content">
              <div class="skill-group">
                <h5>DevOps & Infrastructure</h5>
                <mat-chip-set>
                  <mat-chip class="skill-advanced">Docker</mat-chip>
                  <mat-chip class="skill-professional">Kubernetes</mat-chip>
                  <mat-chip class="skill-professional">AWS</mat-chip>
                  <mat-chip class="skill-professional">GCP</mat-chip>
                  <mat-chip class="skill-professional">Jenkins</mat-chip>
                  <mat-chip class="skill-professional">GitHub Actions</mat-chip>
                </mat-chip-set>
              </div>
              <div class="skill-group">
                <h5>{{getTranslation('testingTools')}}</h5>
                <mat-chip-set>
                  <mat-chip class="skill-professional">Selenium</mat-chip>
                  <mat-chip class="skill-professional">CI/CD</mat-chip>
                  <mat-chip class="skill-intermediate">Unit Testing</mat-chip>
                </mat-chip-set>
              </div>
            </div>
          </mat-expansion-panel>

          <mat-expansion-panel class="skill-category" [expanded]="allExpanded">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon>architecture</mat-icon>
                {{getTranslation('designPatternsTitle')}}
              </mat-panel-title>
            </mat-expansion-panel-header>
            <div class="skills-content">
              <div class="skill-group">
                <mat-chip-set>
                  <mat-chip class="skill-expert">REST Architecture</mat-chip>
                  <mat-chip class="skill-expert">Microservices</mat-chip>
                  <mat-chip class="skill-advanced">MVC Pattern</mat-chip>
                  <mat-chip class="skill-advanced">DDD</mat-chip>
                  <mat-chip class="skill-advanced">TDD</mat-chip>
                  <mat-chip class="skill-professional">Client-Server</mat-chip>
                  <mat-chip class="skill-professional">OOP</mat-chip>
                  <mat-chip class="skill-intermediate">SOAP APIs</mat-chip>
                </mat-chip-set>
              </div>
            </div>
          </mat-expansion-panel>

          <mat-expansion-panel class="skill-category" [expanded]="allExpanded">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <mat-icon>groups</mat-icon>
                {{getTranslation('developmentMethodologies')}}
              </mat-panel-title>
            </mat-expansion-panel-header>
            <div class="skills-content">
              <div class="skill-group">
                <mat-chip-set>
                  <mat-chip class="skill-expert">Scrum</mat-chip>
                  <mat-chip class="skill-advanced">Kanban</mat-chip>
                  <mat-chip class="skill-professional">XP</mat-chip>
                  <mat-chip class="skill-professional">Agile</mat-chip>
                  <mat-chip class="skill-intermediate">Waterfall</mat-chip>
                </mat-chip-set>
              </div>
            </div>
          </mat-expansion-panel>
        </div>
      </section>

      <mat-divider class="section-divider"></mat-divider>

      <section class="education-section">
        <div class="section-header">
          <h3>{{getTranslation('academicFormation')}}</h3>
        </div>
        <div class="education-content">
          <div class="education-item">
            <div class="education-icon">
              <mat-icon>school</mat-icon>
            </div>
            <div class="education-details">
              <h4>{{getTranslation('degree1')}}</h4>
              <h5>{{getTranslation('university1')}}</h5>
              <span class="year">2022</span>
              <p>{{getTranslation('degree1_desc')}}</p>
            </div>
          </div>
          <div class="education-item">
            <div class="education-icon">
              <mat-icon>school</mat-icon>
            </div>
            <div class="education-details">
              <h4>{{getTranslation('degree2')}}</h4>
              <h5>{{getTranslation('university2')}}</h5>
              <span class="year">2022</span>
              <p>{{getTranslation('degree2_desc')}}</p>
            </div>
          </div>
        </div>

        <div class="certifications-section">
          <h4>{{getTranslation('certifications')}}</h4>
          <div class="certifications-grid">
            <div class="certification-item">
              <mat-icon>verified</mat-icon>
              <span>{{getTranslation('cert1')}}</span>
            </div>
            <div class="certification-item">
              <mat-icon>verified</mat-icon>
              <span>{{getTranslation('cert2')}}</span>
            </div>
            <div class="certification-item">
              <mat-icon>verified</mat-icon>
              <span>{{getTranslation('cert3')}}</span>
            </div>
            <div class="certification-item">
              <mat-icon>verified</mat-icon>
              <span>{{getTranslation('cert4')}}</span>
            </div>
          </div>
        </div>
      </section>

      <mat-divider class="section-divider"></mat-divider>

      <section class="additional-info-section">
        <div class="info-grid">
          <div class="info-card">
            <h4>{{getTranslation('languages')}}</h4>
            <div class="language-skills">
              <div class="language-item">
                <span class="language-name">{{getTranslation('spanish')}}</span>
                <span class="language-level native">{{getTranslation('native')}}</span>
              </div>
              <div class="language-item">
                <span class="language-name">{{getTranslation('english')}}</span>
                <span class="language-level intermediate">{{getTranslation('intermediate')}}(B2)/{{getTranslation('advanced')}} (C1)</span>
              </div>
              <div class="language-item">
                <span class="language-name">{{getTranslation('german')}}</span>
                <span class="language-level basic">{{getTranslation('basic')}} (A1)</span>
              </div>
              <div class="language-item">
                <span class="language-name">{{getTranslation('italian')}}</span>
                <span class="language-level basic">{{getTranslation('basic')}} (A1)</span>
              </div>
            </div>
          </div>

          <div class="info-card">
            <h4>{{getTranslation('softSkills')}}</h4>
            <mat-chip-set>
              <mat-chip>{{getTranslation('softskill_proactivity')}}</mat-chip>
              <mat-chip>{{getTranslation('softskill_leadership')}}</mat-chip>
              <mat-chip>{{getTranslation('softskill_selflearning')}}</mat-chip>
              <mat-chip>{{getTranslation('softskill_teamwork')}}</mat-chip>
              <mat-chip>{{getTranslation('softskill_organization')}}</mat-chip>
              <mat-chip>{{getTranslation('softskill_adaptability')}}</mat-chip>
              <mat-chip>{{getTranslation('softskill_methodology')}}</mat-chip>
              <mat-chip>{{getTranslation('softskill_problem_solving')}}</mat-chip>
            </mat-chip-set>
          </div>
        </div>
      </section>

      <mat-divider class="section-divider"></mat-divider>

      <section class="contact-section">
        <div class="section-header">
          <h3>{{getTranslation('contact')}}</h3>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <mat-icon>person</mat-icon>
              <div>
                <strong>{{getTranslation('fullName')}}:</strong>
                <span>{{getTranslation('full_name_value')}}</span>
              </div>
            </div>
            <div class="contact-item">
              <mat-icon>cake</mat-icon>
              <div>
                <strong>{{getTranslation('birthDate')}}:</strong>
                <span>{{getTranslation('birth_date_value')}}</span>
              </div>
            </div>
            <div class="contact-item">
              <mat-icon>location_on</mat-icon>
              <div>
                <strong>{{getTranslation('location')}}:</strong>
                <span>{{getTranslation('location_value')}}</span>
              </div>
            </div>
            <div class="contact-item">
              <mat-icon>email</mat-icon>
              <div>
                <strong>{{getTranslation('email')}}:</strong>
                <a href="mailto:pasaperez@yahoo.com.ar">pasaperez&#64;yahoo.com.ar</a>
              </div>
            </div>
            <div class="contact-item">
              <mat-icon>alternate_email</mat-icon>
              <div>
                <strong>{{getTranslation('alternativeEmail')}}:</strong>
                <a href="mailto:angel.pasaperez@gmail.com">angel.pasaperez&#64;gmail.com</a>
              </div>
            </div>
            <div class="contact-item">
              <mat-icon>work</mat-icon>
              <div>
                <strong>{{getTranslation('linkedIn')}}:</strong>
                <a href="https://www.linkedin.com/in/pasaperez/" target="_blank">linkedin.com/in/pasaperez</a>
              </div>
            </div>
            <div class="contact-item">
              <mat-icon>code</mat-icon>
              <div>
                <strong>{{getTranslation('github')}}:</strong>
                <a href="https://github.com/pasaperez" target="_blank">github.com/pasaperez</a>
              </div>
            </div>
            <div class="contact-item">
              <mat-icon>work_outline</mat-icon>
              <div>
                <strong>Work GitHub:</strong>
                <a href="https://github.com/pasaperez-work" target="_blank">github.com/pasaperez-work</a>
              </div>
            </div>
          </div>
          <div class="accessibility-notice">
            <mat-icon>accessible</mat-icon>
            <span>{{getTranslation('disability_note')}}</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    /* Home Component Styles - Consistent with Header/Footer */

    .portfolio-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      background: #f8f9fa;
      min-height: 100vh;
    }

    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 0;
      margin: 0 -2rem 3rem -2rem;
      border-radius: 0 0 2rem 2rem;
      box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2);
    }

    .hero-content {
      display: flex;
      align-items: center;
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .profile-image {
      flex-shrink: 0;
    }

    .profile-image img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 6px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }

    .profile-image img:hover {
      transform: scale(1.05);
    }

    .hero-text h1 {
      font-size: 3rem;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .hero-text h2 {
      font-size: 1.3rem;
      font-weight: 400;
      margin: 0 0 1.5rem 0;
      opacity: 0.9;
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      opacity: 0.95;
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      /* Eliminar position y z-index que pueden causar problemas */
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 1rem;
      backdrop-filter: blur(10px);
      min-width: 120px;
      /* Eliminar position y z-index */
      /* Asegurar que no haya transforms que causen movimiento */
      transform: none !important;
      will-change: auto !important;
    }

    .stat-label,
    .stat-position,
    .stat-company,
    .stat-work {
      font-size: 0.9rem;
      opacity: 0.9;
      margin-top: 0.25rem;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 1rem;
      /* Eliminar z-index innecesario */
    }

    .cta-button {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
      color: white !important;
      border: none !important;
      padding: 0.75rem 2rem !important;
      font-size: 1rem !important;
      transition: all 0.3s ease !important;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(245, 87, 108, 0.3);
    }

    .contact-button {
      background: transparent !important;
      color: white !important;
      border: 2px solid rgba(255, 255, 255, 0.3) !important;
      padding: 0.75rem 2rem !important;
      transition: all 0.3s ease !important;
    }

    .contact-button:hover {
      background: rgba(255, 255, 255, 0.1) !important;
      border-color: rgba(255, 255, 255, 0.6) !important;
    }

    .cta-button,
    .contact-button {
      /* Remover position: relative y z-index */
    }

    /* Section Headers */
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .section-header h3 {
      font-size: 2.2rem;
      font-weight: 600;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-divider {
      margin: 3rem 0;
      background: linear-gradient(90deg, transparent, #667eea, transparent);
      height: 2px;
      border: none;
    }

    /* About Section */
    .about-section {
      padding: 2rem 0;
    }

    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #2c3e50 !important;
      margin: 0;
      font-weight: 400;
    }

    .key-strengths {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border-left: 4px solid #667eea;
    }

    .key-strengths h4 {
      margin: 0 0 1rem 0;
      color: #333;
      font-weight: 600;
    }

    /* Key Strengths chips - Better contrast */
    .key-strengths .mat-mdc-chip {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      color: white !important;
      font-weight: 500 !important;
      border: none !important;
    }

    .key-strengths .mat-mdc-chip:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%) !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3) !important;
    }

    /* Experience Timeline */
    .experience-section {
      padding: 2rem 0;
    }

    .experience-timeline {
      position: relative;
      padding-left: 2rem;
    }

    .experience-timeline::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
      border-radius: 2px;
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      padding-left: 2rem;
    }

    .timeline-marker {
      position: absolute;
      left: -2rem;
      top: 0.5rem;
      width: 16px;
      height: 16px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
    }

    .timeline-content {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .timeline-content:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    .timeline-content h4 {
      color: #333;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
      font-size: 1.3rem;
    }

    .timeline-content h5 {
      color: #667eea;
      font-weight: 500;
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
    }

    .timeline-content .period {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.85rem;
      font-weight: 500;
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    .timeline-content ul {
      margin: 1rem 0 0 0;
      padding-left: 1.5rem;
    }

    .timeline-content li {
      margin-bottom: 0.5rem;
      color: #666;
      line-height: 1.5;
    }

    /* Skills Section */
    .skills-section {
      padding: 2rem 0;
    }

    .expand-controls {
      display: flex;
      gap: 0.5rem;
    }

    .expand-controls button {
      color: #667eea !important;
    }

    .skills-grid {
      display: grid;
      gap: 1.5rem;
    }

    .skill-category {
      background: white !important;
      border-radius: 1rem !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
      overflow: hidden !important;
    }

    .skill-category .mat-expansion-panel-header {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
      border-bottom: 2px solid #667eea !important;
      padding: 1.5rem !important;
    }

    /* Selectores más específicos para los títulos */
    .skill-category .mat-expansion-panel-header .mat-panel-title,
    .skill-category .mat-panel-title,
    .skill-category .mat-expansion-panel-header-title,
    .skill-category .mat-expansion-panel-header .mat-expansion-panel-header-title {
      display: flex !important;
      align-items: center !important;
      gap: 1rem !important;
      font-weight: 700 !important;
      color: #1a1a1a !important;
      font-size: 1.2rem !important;
    }

    /* Forzar color en todos los elementos de texto dentro del header */
    .skill-category .mat-expansion-panel-header * {
      color: #1a1a1a !important;
    }

    .skill-category .mat-expansion-panel-header mat-icon {
      color: #667eea !important;
      font-size: 1.3rem !important;
    }

    /* Asegurar que el texto del título sea visible */
    .skill-category .mat-expansion-panel-header-title .mat-panel-title {
      color: #1a1a1a !important;
      font-weight: 700 !important;
    }

    .skills-content {
      padding: 2rem;
    }

    .skill-group {
      margin-bottom: 2rem;
    }

    .skill-group:last-child {
      margin-bottom: 0;
    }

    .skill-group h5 {
      color: #2c3e50 !important;
      font-weight: 600;
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
    }

    /* Skill Level Colors */
    .skill-expert {
      background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;
      color: white !important;
    }

    .skill-advanced {
      background: linear-gradient(135deg, #007bff 0%, #6610f2 100%) !important;
      color: white !important;
    }

    .skill-professional {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      color: white !important;
    }

    .skill-intermediate {
      background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%) !important;
      color: white !important;
    }

    .skill-basic {
      background: linear-gradient(135deg, #6c757d 0%, #495057 100%) !important;
      color: white !important;
    }

    /* Education Section */
    .education-section {
      padding: 2rem 0;
    }

    .education-content {
      margin-bottom: 3rem;
    }

    .education-item {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      margin-bottom: 2rem;
      transition: transform 0.3s ease;
    }

    .education-item:hover {
      transform: translateY(-2px);
    }

    .education-icon {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .education-details h4 {
      color: #333;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
      font-size: 1.3rem;
    }

    .education-details h5 {
      color: #667eea;
      font-weight: 500;
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
    }

    .education-details .year {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.85rem;
      font-weight: 500;
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    .certifications-section h4 {
      color: #333;
      font-weight: 600;
      margin: 0 0 1.5rem 0;
      font-size: 1.5rem;
    }

    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
    }

    .certification-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: white;
      padding: 1.5rem;
      border-radius: 0.75rem;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
      border-left: 4px solid #28a745;
      transition: transform 0.3s ease;
    }

    .certification-item:hover {
      transform: translateX(4px);
    }

    .certification-item mat-icon {
      color: #28a745;
    }

    /* Additional Info Section */
    .additional-info-section {
      padding: 2rem 0;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }

    .info-card {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border-top: 4px solid #667eea;
    }

    .info-card h4 {
      color: #333;
      font-weight: 600;
      margin: 0 0 1.5rem 0;
      font-size: 1.3rem;
    }

    .language-skills {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .language-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid #eee;
    }

    .language-item:last-child {
      border-bottom: none;
    }

    .language-name {
      font-weight: 500;
      color: #333;
    }

    .language-level {
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .language-level.native {
      background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
      color: white;
    }

    .language-level.intermediate {
      background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
      color: white;
    }

    .language-level.basic {
      background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%);
      color: white;
    }

    /* Soft Skills chips - Better contrast */
    .additional-info-section .mat-mdc-chip {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      color: white !important;
      font-weight: 500 !important;
      border: none !important;
      font-size: 0.9rem !important;
    }

    .additional-info-section .mat-mdc-chip:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%) !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3) !important;
    }

    /* Contact Section */
    .contact-section {
      padding: 2rem 0;
    }

    .contact-content {
      background: white;
      padding: 3rem;
      border-radius: 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .contact-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 0.75rem;
      transition: background-color 0.3s ease;
    }

    .contact-item:hover {
      background: #e9ecef;
    }

    .contact-item mat-icon {
      color: #667eea;
      background: rgba(102, 126, 234, 0.1);
      border-radius: 50%;
    }

    .contact-item div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .contact-item strong {
      color: #333;
      font-size: 0.9rem;
    }

    .contact-item span,
    .contact-item a {
      color: #666;
      text-decoration: none;
      font-size: 0.95rem;
    }

    .contact-item a:hover {
      color: #667eea;
    }

    .accessibility-notice {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
      padding: 1.5rem;
      border-radius: 0.75rem;
      border-left: 4px solid #2196f3;
    }

    .accessibility-notice mat-icon {
      color: #2196f3;
    }

    .accessibility-notice span {
      color: #333;
      font-weight: 500;
    }

    /* Portfolio Footer */
    .portfolio-footer {
      text-align: center;
      padding: 2rem 0;
      margin-top: 3rem;
      border-top: 1px solid #eee;
      color: #666;
      font-size: 0.9rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .portfolio-container {
        padding: 0 1rem;
      }

      .hero-section {
        margin: 0 -1rem 2rem -1rem;
        padding: 3rem 0;
      }

      .hero-content {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
        padding: 0 1rem;
      }

      .hero-text h1 {
        font-size: 2.2rem;
      }

      .hero-stats {
        justify-content: center;
      }

      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      .section-header h3 {
        font-size: 1.8rem;
      }

      .info-grid {
        grid-template-columns: 1fr;
      }

      .contact-info {
        grid-template-columns: 1fr;
      }

      .certifications-grid {
        grid-template-columns: 1fr;
      }

      .education-item {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .timeline-item {
        padding-left: 1.5rem;
      }

      .timeline-marker {
        left: -1.5rem;
      }
    }

    @media (max-width: 480px) {
      .hero-text h1 {
        font-size: 1.8rem;
      }

      .hero-stats {
        flex-direction: column;
        align-items: center;
      }

      .stat {
        min-width: 200px;
      }

      .hero-actions {
        flex-direction: column;
        width: 100%;
      }

      .cta-button,
      .contact-button {
        width: 100% !important;
      }
    }

    /* Material Design Enhancements */
    .mat-mdc-chip {
      margin: 0.25rem !important;
      transition: all 0.3s ease !important;
    }

    .mat-mdc-chip:hover {
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
    }

    .mat-expansion-panel {
      transition: all 0.3s ease !important;
    }

    .mat-expansion-panel:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12) !important;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    }
  `]
})
export class HomeComponent {
  private languageService: LanguageService = inject(LanguageService);
  protected allExpanded: boolean = false;

  public expandAll(): void {
    this.allExpanded = true;
  }

  public collapseAll(): void {
    this.allExpanded = false;
  }

  public getTranslation(key: keyof PersonalData): string {
    return this.languageService.getTranslation(key);
  }
}
