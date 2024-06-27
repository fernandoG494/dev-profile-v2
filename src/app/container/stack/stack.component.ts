import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'container-stack',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class StackComponent {}
