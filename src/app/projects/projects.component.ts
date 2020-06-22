import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CustomAnimationService } from '../customAnimation';

@Component({
  selector: 'my-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [CustomAnimationService]
})
export class ProjectsComponent implements OnInit {

	@ViewChild('heading') heading : ElementRef;
  constructor(private animation: CustomAnimationService) { }

  ngOnInit() {
  	setTimeout(() => {
  		this.animation.animateHeading(this.heading);
  	}, 1000)
  }

}
