import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  homeActive = true;
  projectsActive = false;
  contactActive = false;

  home() {
    this.homeActive = true;
    this.projectsActive = false;
    this.contactActive = false;
  }

  projects() {
    this.projectsActive = true;
    this.homeActive = false;
    this.contactActive = false;
  }

  contact() {
    this.contactActive = true;
    this.homeActive = false;
    this.projectsActive = false;
  }
}
