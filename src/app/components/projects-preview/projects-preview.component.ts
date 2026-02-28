import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-preview.component.html',
  styleUrl: './projects-preview.component.css'
})
export class ProjectsPreviewComponent implements OnInit, OnDestroy {
  @ViewChild('projectsSection', { static: true }) projectsSection!: ElementRef;
  isVisible = false;
  private observer: IntersectionObserver | undefined;

  ngOnInit() {
    this.setupObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the section is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          // Stop observing once animated
          if (this.observer) {
            this.observer.unobserve(entry.target);
          }
        }
      });
    }, options);

    if (this.projectsSection && this.projectsSection.nativeElement) {
      this.observer.observe(this.projectsSection.nativeElement);
    }
  }

  projects = [
    {
      title: 'Avanos',
      description: 'Avanos, a six-story building in Jumeirah Village Circle, boasts 49 apartments with a unique design, offering stunning views of the courtyard and Jumeirah skyline.',
      imageUrl: 'avanos_building.png'
    },
    {
      title: 'Botanica Shipping',
      description: 'AGC completed the Botanica Shipping project in Dubai, a multifunctional development in Business Bay, involving a shipping terminal.',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Botanica Residence',
      description: 'AGC, a reputable UAE construction firm, utilized diverse technologies like traditional methods and advanced tools such as prefabrication and BIM on the Botanica Residence project.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Rigel Residence',
      description: 'The Rigel Residence project, led by AGC Construction Company, comprised two 12-story towers with 384 apartments in Dubai, UAE.',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Crystal Residence',
      description: 'The Crystal Residence is a 5-story commercial building in Dubai\'s Jumeirah Village Circle with over 200 apartments of varying sizes, catering to residential and rental needs.',
      imageUrl: 'crystal_residence.png'
    },
    {
      title: 'MHLogistics',
      description: 'MHLogistic is a modern UAE logistics hub offering warehousing, and regional support, set to become the Middle East\'s largest, bolstering the region\'s economic growth.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Hans-Logistics',
      description: 'Hans-Logistics, a state-of-the-art facility with warehouse and distribution facilities for logistics and freight forwarding, was constructed by AGC.',
      imageUrl: 'hans_logistics.png'
    },
    {
      title: 'Myra Food',
      description: 'AGC Construction used precast concrete and Building Information Modeling (BIM) to efficiently design and construct the Myra Food Umm Al Quwain project.',
      imageUrl: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];
}
