import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  education = [
    {
      degree: 'Bachelor Of Technology',
      university: 'Jawaharal Nehru Technological University, Anantapur',
      location: 'Kurnool',
      year: '2016 – 2019',
      cgpa: '6.92'
    }
  ];
}

