import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      icon: 'M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m4-8h1m-1 4h1m-1 4h1',
      title: 'Civil & Construction Manpower Solutions',
      description: 'We deploy skilled professionals for large-scale and medium-sized construction projects, covering structural integrity, earthworks, foundations, and finishing.'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'MEP (Mechanical, Electrical, and Plumbing) Manpower',
      description: 'We provide specialized teams capable of handling complex mechanical setups, electrical installations, and intricate plumbing systems to keep your facilities fully operational.'
    },
    {
      icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
      title: 'Facilities Management & Infrastructure Maintenance',
      description: 'Our dedicated maintenance personnel ensure the continuous and safe operation of commercial, residential, and industrial infrastructure with routine testing and emergency response support.'
    }
  ];
}
