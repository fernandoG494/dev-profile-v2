import { Component } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card/project-card.component';

@Component({
  selector: 'container-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
