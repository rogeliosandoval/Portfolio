import { Component, inject } from '@angular/core'
import { SharedService } from 'src/app/services/shared.service'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class Home {
  public sharedService = inject(SharedService)
}