import { Component, inject } from '@angular/core'
import { SharedService } from 'src/app/services/shared.service'

@Component({
  selector: 'projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss'],
})

export class Projects {
  public sharedService = inject(SharedService)

  public projects = [
    { 
      title: 'Budget Boy', 
      description: 'An online tool to help budget your expenses.',
      gifURL: 'budget-boy',
      logoURL: 'budget-boy.png',
      demoURL: 'https://budget-boy-ac3a5.web.app/home',
      routeURL: '/projects/budgetboy',
      invert: false
    },
    {
      title: 'Minna',
      description: 'A social platform that allows users to stay anonymous.',
      gifURL: 'minna',
      logoURL: 'minna.svg',
      demoURL: 'https://minna-c691d.web.app/home',
      routeURL: '/projects/minna',
      invert: true
    },
    {
      title: 'Action 6',
      description: 'A virtual arcade with JavaScript games to kill time.',
      gifURL: 'action-six',
      logoURL: 'action-six.png',
      demoURL: 'https://action-six.web.app/home',
      routeURL: '/projects/actionsix',
      invert: false
    }
  ]
}