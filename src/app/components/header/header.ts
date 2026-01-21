import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  themeService = inject(ThemeService);
  isMenuOpen = false;
  activeSection = 'home';

  // Listen for scroll events to update active section
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Check if top of section is within viewport (with some offset)
        if (rect.top >= -100 && rect.top <= 150) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  setActive(section: string) {
    this.activeSection = section;
    this.isMenuOpen = false;
  }
}


