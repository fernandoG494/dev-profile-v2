import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() projectName = '';
  @Input() projectDescription = '';
  @Input() projectLink = '';

  handleRedirect() {
    window.open(this.projectLink, '_blank');
  }
}
