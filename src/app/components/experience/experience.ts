import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      role: 'Senior System Engineer',
      company: 'Infosys Ltd',
      location: 'Hyderabad, India',
      date: '27/06/2022 – Present', // Adjusted "22/07/2025" to Present or similar
      description: [
        'Played a significant role in the development of "Lex," a comprehensive educational application built with AngularJS.',
        'Designed and implemented user interfaces, ensuring a seamless and intuitive user experience.',
        'Integrated various modules and functionalities, enhancing the application core features.',
        'Developed secure and responsive front-end components using AngularJS to meet complex banking requirements.',
        'Collaborated closely with the Dubai-based client team to gather requirements and deliver tailor-made solutions.',
        'Ensured adherence to strict security protocols and data privacy standards relevant to the financial sector.',
        'Led the complete API migration for the existing banking application to a new API system, ensuring minimal downtime.',
        'Designed and implemented new dynamic banner functionalities across the application, improving user engagement.',
        'Successfully managed the integration of new APIs, conducting thorough testing to ensure data integrity.',
        'Developed and customized responsive user interfaces using Angular Material components.'
      ]
    }
  ];
}

