import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Important for NgStyle/NgClass
import { FeaturesComponent } from '../../components/features/features.component';
import { AboutPreviewComponent } from '../../components/about-preview/about-preview.component';
import { MissionVisionComponent } from '../../components/mission-vision/mission-vision.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProjectsPreviewComponent } from '../../components/projects-preview/projects-preview.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FeaturesComponent, AboutPreviewComponent, MissionVisionComponent, ServicesComponent, ProjectsPreviewComponent, CallToActionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  heroImages: string[] = [
    'https://images.unsplash.com/photo-1541888081622-15950a2976b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f35e5d3?auto=format&fit=crop&w=1920&q=80'
  ];
  currentImageIndex = 0;
  private sliderInterval: any;

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    this.sliderInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
    }, 5000); // Change image every 5 seconds
  }

  stopSlider() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }
}
