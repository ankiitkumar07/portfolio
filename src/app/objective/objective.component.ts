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

  public skillChartOptions = {
    scaleShowVerticalLines : true,
    responsive : true
  };
  public skillChartLabels = ['Java 9', 'Angular 8', 'Spring Boot', 'HTML 5 / CSS 3', 'Ruby on Rails'];
  public skillChartType = 'bar';
  public skillChartLegend = true;
  public skillChartData = [{data: [20, 30, 40, 50, 60], label: 'Skill Level'}];



  constructor(private animation: CustomAnimationService) { }

  ngOnInit() {
  	setTimeout(() => {
  		this.animation.animateHeading(this.heading);
  	}, 1000);
  }

}
