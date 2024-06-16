import { Component } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss']
})

export class Work {
  public projects = [
    { 
      title: 'Rise Up Acai Bowls', 
      description: 'An acai cafe located in San Antonio, Texas.',
      picURL: 'rise-up.png',
      logoURL: 'rise-up.png',
      demoURL: 'https://riseupsatx.com/',
      routeURL: '/projects/riseup',
      invert: false
    },
    {
      title: 'The START Center',
      description: 'A cancer care facility with one of the most active clinical trial programs.',
      picURL: 'start-center.png',
      logoURL: 'start-center.png',
      demoURL: 'https://www.thestartcenter.com/',
      routeURL: '/projects/startcenter',
      invert: true
    },
    {
      title: 'Your Time Home Inspections',
      description: 'A home inspection company located in San Antonio, Texas.',
      picURL: 'ythi.png',
      logoURL: 'ythi.png',
      demoURL: 'https://yourtimehomeinspections.com/',
      routeURL: '/projects/ythi',
      invert: false
    }
  ]
}