import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  homeActive = true;
  projectsActive = false;
  contactActive = false;
  hiddenNav = true;
  mobileShow = false;
  navToggle = false;
  navMorph = false;
  boolean = false;

  @HostListener('window:scroll', ['$event']) onViewPortScroll() {

    //show mobile navbar
    if (window.pageYOffset > 200) {
      this.mobileShow = true;
    } else {
      this.mobileShow = false;
    }

    //show desktop navbar background
    if (window.pageYOffset > 20) {
      this.navMorph = true;
    } else {
      this.navMorph = false;
    }

    //about me active
    if (window.pageYOffset < 650) {
      this.homeActive = true;
      this.projectsActive = false;
      this.contactActive = false;
    }

    //projects active
    if (window.pageYOffset > 650 && window.pageYOffset < 3550) {
      this.projectsActive = true;
      this.homeActive = false;
      this.contactActive = false;
    }

    //contact active
    if (window.pageYOffset > 3550) {
      this.contactActive = true;
      this.homeActive = false;
      this.projectsActive = false;
    }

  }

  scroll(el: HTMLElement) {
    this.boolean = true;
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 50)
  }

  scrollRef(el: ElementRef) {
    el.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTheTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggle() {
    this.navToggle = !this.navToggle;
  }
}
