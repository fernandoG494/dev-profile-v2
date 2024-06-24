import { Routes } from '@angular/router';
import { StackComponent } from './container/stack/stack.component';
import { AboutComponent } from './container/about/about.component';
import { ResumeComponent } from './container/resume/resume.component';
import { ContactComponent } from './container/contact/contact.component';
import { ProjectsComponent } from './container/projects/projects.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'stack', component: StackComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];
