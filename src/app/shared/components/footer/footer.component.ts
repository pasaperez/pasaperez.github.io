import {Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {LanguageService, PersonalData} from '../../../core/services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <p class="footer-text">{{ getTranslation('pageFooter') }}</p>
          <p class="footer-date">{{ currentYear }}</p>
        </div>

        <div class="social-links">
          <a href="https://github.com/pasaperez" target="_blank" class="social-link">
            <mat-icon>code</mat-icon>
          </a>
          <a href="https://github.com/pasaperez-work" target="_blank" class="social-link">
            <mat-icon>work</mat-icon>
          </a>
          <a href="https://www.linkedin.com/in/pasaperez/" target="_blank" class="social-link">
            <mat-icon>business</mat-icon>
          </a>
          <a href="mailto:pasaperez@yahoo.com.ar" class="social-link">
            <mat-icon>mail</mat-icon>
          </a>
        </div>
      </div>
    </footer>
  `,
  imports: [MatIconModule],
  styles: [`
    .footer {
      background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
      color: white;
      padding: 2rem 0;
      margin-top: 4rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-info {
      flex: 1;
    }

    .footer-text {
      margin: 0 0 0.5rem 0;
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .footer-date {
      margin: 0;
      font-size: 0.8rem;
      opacity: 0.7;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: rgba(255,255,255,0.2);
      transform: translateY(-2px);
      color: white;
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
      }

      .footer-text {
        font-size: 0.8rem;
      }
    }
  `]
})
export class FooterComponent {
  private languageService: LanguageService = inject(LanguageService);
  protected currentYear: number = new Date().getFullYear();

  public getTranslation(key: keyof PersonalData): string {
    return this.languageService.getTranslation(key);
  }
}
