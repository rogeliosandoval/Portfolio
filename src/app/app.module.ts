//Angular
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

//Pages
import { AppComponent } from './app.component'
import { Home } from './Pages/home/home.component'
import { Projects } from './Pages/projects/projects.component'
import { Work } from './Pages/work/work.component'
import { Contact } from './Pages/contact/contact.component'

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'projects', component: Projects },
  { path: 'work', component: Work },
  { path: 'contact', component: Contact},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
