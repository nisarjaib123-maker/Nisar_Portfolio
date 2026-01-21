import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Education } from '../education/education';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    About,
    Experience,
    Projects,
    Skills,
    Education,
    Contact,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

