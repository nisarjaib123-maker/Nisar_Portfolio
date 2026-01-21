import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  profileText = `Highly motivated and detail-oriented Angular frontend developer with 3 years of experience at Infosys, 
  specializing in building scalable and responsive web and mobile applications. Seeking a challenging role 
  where I can leverage my expertise in JavaScript frameworks, user-centric design, and performance 
  optimization to contribute to innovative digital solutions and grow as a key member of a dynamic 
  development team.`;
}

