import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements OnInit, OnDestroy {
  @ViewChild('featuresSection', { static: true }) featuresSection!: ElementRef;
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
      threshold: 0.2 // Trigger when 20% of the section is visible
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

    if (this.featuresSection && this.featuresSection.nativeElement) {
      this.observer.observe(this.featuresSection.nativeElement);
    }
  }
}
