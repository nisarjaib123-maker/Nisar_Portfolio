import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 0.2s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class Hero {
  name = 'Nisar';
  title = 'Senior System Engineer';
  location = 'Hyderabad, India';
  email = 'nisarahamed4342@gmail.com';
  phone = '7893915723';
}

