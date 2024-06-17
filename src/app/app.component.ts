import { Component, inject } from '@angular/core'
import { SharedService } from './services/shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public sharedService = inject(SharedService)
  public panelOpenState = false
  public navLinks = [
    { label: 'Home', route: '/home' },
    { label: 'Projects', route: '/projects' },
    { label: 'Work', route: '/work' },
    { label: 'Contact', route: '/contact' }
  ]
}
