//Angular
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

//Pages
import { AppComponent } from './app.component'
import { Home } from './Pages/home/home.component'
import { Projects } from './Pages/projects/projects.component'
import { Work } from './Pages/work/work.component'
import { Contact } from './Pages/contact/contact.component';

//Angular Material
import { MatDividerModule } from '@angular/material/divider'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatButtonModule } from '@angular/material/button'

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'projects', component: Projects },
  { path: 'work', component: Work },
  { path: 'contact', component: Contact},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Projects,
    Work,
    Contact
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatDividerModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
