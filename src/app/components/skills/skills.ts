import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories = [
    {
      name: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3/SCSS']
    },
    {
      name: 'Frameworks & Libraries',
      skills: ['Angular (v14-18)', 'AngularJS', 'Node.js', 'RxJS', 'NgRx', 'Angular Material', 'PrimeNG', 'ASP.NET Core']
    },
    {
      name: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'Azure', 'Jira', 'Postman', 'Android Studio']
    },
    {
      name: 'Concepts',
      skills: ['Rest APIs', 'Agile/Scrum', 'Responsive Design', 'JWT Authentication', 'Unit Testing (Jasmine/Karma)']
    }
  ];
}

