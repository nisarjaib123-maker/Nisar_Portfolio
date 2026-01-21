import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  email = 'nisarahamed4342@gmail.com';
  phone = '7893915723';
  location = 'Hyderabad, India';

  // Placeholder for social links, as none were provided except "Linkedin" text
  socials = [
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', link: '#' },
    { name: 'GitHub', icon: 'fa-brands fa-github', link: '#' }
  ];
}

