import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomAnimationService } from '../customAnimation';

@Component({
  selector: 'my-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss'],
  providers: [CustomAnimationService]
})
export class ObjectiveComponent implements OnInit {

	@ViewChild('heading') heading : ElementRef;

  constructor(private animation: CustomAnimationService) { }

  ngOnInit() {
  	setTimeout(() => {
  		this.animation.animateHeading(this.heading);
  	}, 1000);
  }

}
