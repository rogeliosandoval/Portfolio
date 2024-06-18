import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'project-details',
  templateUrl: 'project-details.component.html',
  styleUrls: ['project-details.component.scss']
})

export class ProjectDetails implements OnInit {
  public activatedRoute = inject(ActivatedRoute)
  public param = ''
  public project: any
  public budgetboy = {
    title: 'Budget Boy',
    description: 'An online tool for keeping track of all of your expenses so that way you never miss a payment or go under budget. Along with a dashboard that tracks profits, users will get a checklist to keep track of monthly expenses that reflect their total funds.',
    learned: 'How to deal with slight complex mathematical cases with different formatted numeric values. Making sure to parse where needed to prevent errors. Also learned more about CRUD functionalities, working with a backend to keep track of user\'s expenses.',
    technologies: [
      "angularjs/angularjs-original.svg",
      "html5/html5-original.svg",
      "css3/css3-original.svg",
      "javascript/javascript-original.svg",
      "typescript/typescript-original.svg",
      "firebase/firebase-original.svg"
    ],
    picURL: 'budget-boy.gif',
    demoURL: 'https://budget-boy-ac3a5.web.app/home',
    repoURL: 'https://github.com/rogeliosandoval/Budget-Boy',
    logoURL: 'budget-boy.png',
    learnedDesc: true,
    built: ''
  }
  public minna = {
    title: 'Minna',
    description: 'A social platform that allows users to create posts about any topic they choose. Anonymous options are available when creating posts as well as posting comments. A personal notebook is provided with every account for simple note taking if desired.',
    learned: 'How to intergrate CRUD operations using a backend service. Implementing authentication and guards for a more secure and smooth UI/UX. Dynamically changing variables based off of user specific properties. Creating custom pipes for different use cases.',
    technologies: [
      "angularjs/angularjs-original.svg",
      "html5/html5-original.svg",
      "css3/css3-original.svg",
      "javascript/javascript-original.svg",
      "bootstrap/bootstrap-original.svg",
      "typescript/typescript-original.svg",
      "firebase/firebase-original.svg"
    ],
    picURL: 'minna.gif',
    demoURL: 'https://minna-c691d.web.app/home',
    repoURL: 'https://github.com/rogeliosandoval/Minna',
    logoURL: 'minna.svg',
    learnedDesc: true,
    built: ''
  }
  public actionsix = {
    title: 'Action 6',
    description: 'A virtual arcade made completely with JavaScript. Nothing more than a fun little web application to pass the time.',
    learned: 'How to manipulate DOM elements through the Angular framework, along with dynamic styling, and programming. A great experience on how to create simple games using JavaScript/TypeScript. Also learned how to design unique logos and wording using Adobe Photoshop.',
    technologies: [
      "angularjs/angularjs-original.svg",
      "html5/html5-original.svg",
      "css3/css3-original.svg",
      "javascript/javascript-original.svg",
      "bootstrap/bootstrap-original.svg",
      "typescript/typescript-original.svg",
      "photoshop/photoshop-original.svg"
    ],
    picURL: 'action-six.gif',
    demoURL: 'https://action-six.web.app/home',
    repoURL: 'https://github.com/rogeliosandoval/Action-Six',
    logoURL: 'action-six.png',
    learnedDesc: true,
    built: ''
  }
  public riseup = {
    title: 'Rise Up Acai Bowls',
    description: 'Rise up is a popular acai cafe located in San Antonio, Texas. Starting off in a food truck, Rise Up has grown in popularity over the years and now has two locations within the San Antonio area.',
    learned: 'I am currently responsible for the maintenance and implementation of new features upon request by the owner. The design is not by me.',
    picURL: 'rise-up.png',
    technologies: [
      "html5/html5-original.svg",
      "css3/css3-original.svg",
      "javascript/javascript-original.svg"
    ],
    demoURL: 'https://riseupsatx.com/',
    logoURL: 'rise-up.png',
    learnedDesc: false,
    built: 'Squarespace'
  }
  public startcenter = {
    title: 'The START Center',
    description: 'The START Center combines sophisticated treatment modalities & one of the world\'s largest and most active Phase I clinical trial programs.',
    learned: 'While I was employed here I had the honor to contribute to the complete redesign of the company website. Building out the frontend that included forms, navigation, footers and many other features, I am glad to have been apart of something very beneficial to the patients.',
    picURL: 'start-center.png',
    technologies: [
      "angularjs/angularjs-original.svg",
      "html5/html5-original.svg",
      "css3/css3-original.svg",
      "javascript/javascript-original.svg",
      "bootstrap/bootstrap-original.svg",
      "typescript/typescript-original.svg",
      "jquery/jquery-original.svg"
    ],
    demoURL: 'https://www.thestartcenter.com/',
    logoURL: 'start-center.png',
    learnedDesc: false,
    built: ''
  }
  public ythi = {
    title: 'Your Time Home Inspections',
    description: 'Your Time Home Inspections is a Texas licensed professional inspection company, giving thier clients confidence in their property.',
    learned: 'I am currently responsible for the maintenance and implementations of new features upon request by the owners. The design is not by me.',
    picURL: 'ythi.png',
    technologies: [
      "html5/html5-original.svg",
      "css3/css3-original.svg",
      "javascript/javascript-original.svg",
      "jquery/jquery-original.svg"
    ],
    demoURL: 'https://yourtimehomeinspections.com/',
    logoURL: 'ythi.png',
    learnedDesc: false,
    built: 'Wordpress'
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.param = params['id']
      if (params['id'] === 'budgetboy') {
        this.project = this.budgetboy
      } else if (params['id'] === 'minna') {
        this.project = this.minna
      } else if (params['id'] === 'actionsix') {
        this.project = this.actionsix
      } else if (params['id'] === 'riseup') {
        this.project = this.riseup
      } else if (params['id'] === 'startcenter') {
        this.project = this.startcenter
      } else if (params['id'] === 'ythi') {
        this.project = this.ythi
      }
    })
  }
}