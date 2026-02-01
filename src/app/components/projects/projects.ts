import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Rakbank Mobile Banking App',
      role: 'Front-end Lead',
      duration: '09/2024 - 07/2025',
      description: 'Led front-end development for RAKBANK mobile Banking, delivering high-performance banking solutions. Spearheaded migration of legacy APIs to Optimizely APIs.',
      techStack: ['Angular 18', 'NgRx', 'Optimizely APIs', 'JWT', 'SCSS', 'PrimeNG', 'Docker']
    },
    {
      title: 'LEX App (Infosys)',
      role: 'Senior System Engineer',
      duration: '12/2024 - 07/2024',
      description: 'Comprehensive educational application for over 300K+ employees. Improved user experience and optimized training session scheduling module.',
      techStack: ['Angular 14', 'TypeScript', 'RxJS', 'Angular Material', 'REST APIs', 'Jasmine']
    },
    {
      title: 'Emirates HealthCare Portal',
      role: 'Developer',
      duration: '07/2022 – 11/2022',
      description: 'Responsive healthcare management portal using Angular and ASP.NET Core. Implemented patient records management and real-time health analytics dashboards.',
      techStack: ['Angular 12', 'ASP.NET Core', 'Angular Material', 'RxJS', 'SCSS']
    }
  ];
}

