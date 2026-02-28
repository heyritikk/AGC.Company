import { Component } from '@angular/core';
import { ProjectsPreviewComponent } from '../../components/projects-preview/projects-preview.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsPreviewComponent, CallToActionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
