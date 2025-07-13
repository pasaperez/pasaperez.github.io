import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Language, LanguageService, PersonalData } from '../../../core/services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header-container">
      <mat-toolbar class="toolbar">
        <div class="header-content">
          <div class="title-section">
            <h1 class="main-title">{{getTranslation('portfolio')}}: {{ getTranslation('name') }}</h1>
            <p class="subtitle">{{ getTranslation('title') }}</p>
          </div>
          <div class="actions-section">
            <button mat-raised-button
                    class="lang-button"
                    (click)="toggleLanguage()"
                    [class.active]="getCurrentLanguage() === 'en'">
              <mat-icon>language</mat-icon>
              {{ getCurrentLanguage() === 'es' ? 'ES' : 'EN' }}
            </button>
          </div>
        </div>
      </mat-toolbar>
    </header>
  `,
  imports: [MatToolbar, MatButtonModule, MatIconModule],
  styles: [`
    .header-container {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
      max-width: 100vw;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      backdrop-filter: blur(10px);
      background: rgba(255,255,255,0.95);
      overflow: hidden;
    }

    .toolbar {
      background: transparent !important;
      color: #1a1a1a;
      padding: 0 1rem;
      min-height: 64px;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      overflow: hidden;
    }

    .title-section {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }

    .main-title {
      font-size: clamp(1rem, 4vw, 1.5rem);
      font-weight: 600;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    .subtitle {
      font-size: clamp(0.7rem, 2.5vw, 0.9rem);
      color: #666;
      margin: 0;
      font-weight: 400;
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    .actions-section {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      flex-shrink: 0;
      margin-left: 1rem;
    }

    .lang-button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      transition: all 0.3s ease;
      min-width: 60px;
      height: 36px;
      font-size: 0.75rem;
      flex-shrink: 0;
    }

    .lang-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    /* Solución específica para móvil */
    @media (max-width: 768px) {
      .header-container {
        position: sticky;
        overflow-x: hidden;
        overflow-y: visible;
      }

      .toolbar {
        padding: 0 0.5rem;
        min-height: 56px;
      }

      .header-content {
        flex-wrap: nowrap;
        gap: 0.5rem;
      }

      .title-section {
        flex: 1;
        min-width: 0;
      }

      .main-title {
        font-size: clamp(0.9rem, 5vw, 1.2rem);
        max-width: calc(100vw - 120px);
      }

      .subtitle {
        font-size: clamp(0.65rem, 3vw, 0.8rem);
        max-width: calc(100vw - 120px);
      }

      .actions-section {
        margin-left: 0.5rem;
      }

      .lang-button {
        min-width: 50px;
        height: 32px;
        font-size: 0.7rem;
        padding: 0 8px;
      }
    }

    /* Para pantallas muy pequeñas */
    @media (max-width: 480px) {
      .toolbar {
        padding: 0 0.25rem;
        min-height: 48px;
      }

      .header-content {
        gap: 0.25rem;
      }

      .main-title {
        font-size: clamp(0.8rem, 4vw, 1rem);
        max-width: calc(100vw - 100px);
      }

      .subtitle {
        font-size: clamp(0.6rem, 2.5vw, 0.7rem);
        max-width: calc(100vw - 100px);
      }

      .lang-button {
        min-width: 45px;
        height: 28px;
        font-size: 0.65rem;
      }
    }
  `]
})
export class HeaderComponent {
  private languageService: LanguageService = inject(LanguageService);

  public toggleLanguage(): void {
    const currentLang: Language = this.languageService.getCurrentLanguage();
    this.languageService.setLanguage(currentLang === 'es' ? 'en' : 'es');
  }

  public getTranslation(key: keyof PersonalData): string {
    return this.languageService.getTranslation(key);
  }

  public getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }
}
