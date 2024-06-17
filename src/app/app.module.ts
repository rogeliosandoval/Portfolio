//Angular
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

//Pages
import { AppComponent } from './app.component'
import { Home } from './Pages/home/home.component'
import { Projects } from './Pages/projects/projects.component'
import { ProjectDetails } from './Pages/project-details/project-details.component'
import { Work } from './Pages/work/work.component'
import { Contact } from './Pages/contact/contact.component';

//Angular Material
import { MatDividerModule } from '@angular/material/divider'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule } from '@angular/material/snack-bar'

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'projects', component: Projects },
  { path: 'projects/:id', component: ProjectDetails},
  { path: 'work', component: Work },
  { path: 'contact', component: Contact},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Projects,
    ProjectDetails,
    Work,
    Contact
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules }),
    MatDividerModule,
    MatTooltipModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
