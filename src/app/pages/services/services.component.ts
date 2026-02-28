import { Component } from '@angular/core';
import { ServicesComponent as SharedServicesComponent } from '../../components/services/services.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [SharedServicesComponent, CallToActionComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
