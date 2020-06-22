import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomAnimationService } from '../customAnimation';


@Component({
  selector: 'my-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  providers: [CustomAnimationService]
})
export class HobbiesComponent implements OnInit {

	@ViewChild('heading') heading : ElementRef;
  constructor(private animation: CustomAnimationService) { }

  ngOnInit() {
  	setTimeout(() => {
  		this.animation.animateHeading(this.heading);
  	}, 1000)
  }

}
