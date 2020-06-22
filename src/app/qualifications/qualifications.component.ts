import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomAnimationService } from '../customAnimation';


@Component({
  selector: 'my-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss'],
  providers: [CustomAnimationService]
})
export class QualificationsComponent implements OnInit {

	@ViewChild('heading') heading : ElementRef;
  constructor(private animation: CustomAnimationService) { }

  ngOnInit() {
  	setTimeout(() => {
  		this.animation.animateHeading(this.heading)
  	}, 1000);
  }

}
