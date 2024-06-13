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
    gifURL: 'budget-boy',
    demoURL: 'https://budget-boy-ac3a5.web.app/home',
    repoURL: 'https://github.com/rogeliosandoval/Budget-Boy',
    logoURL: 'budget-boy.png'
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
    gifURL: 'minna',
    demoURL: 'https://minna-c691d.web.app/home',
    repoURL: 'https://github.com/rogeliosandoval/Minna',
    logoURL: 'minna.svg'
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
    gifURL: 'action-six',
    demoURL: 'https://action-six.web.app/home',
    repoURL: 'https://github.com/rogeliosandoval/Action-Six',
    logoURL: 'action-six.png'
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
      }
    })
  }
}