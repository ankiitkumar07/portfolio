import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CustomAnimationService } from '../customAnimation';

@Component({
  selector: 'my-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [CustomAnimationService]
})
export class ProjectsComponent implements OnInit {

	@ViewChild('heading') heading : ElementRef;
  @ViewChildren('cards') cards : QueryList<ElementRef>;
  width = window.innerWidth;

  projects = [{
    "title" : "KumarsJournal",
    "description" : "Website for Online travel blog.",
    "link" : "kumarsjournal.herokuapp.com",
    "imagePath" : "",
    "color" : "a2de96"
  },
  {
    "title": "Bookstore",
    "description": "An online bookstore where users can get recommendations from thier fellow book lovers.",
    "link": "google.com",
    "imagePath": "",
    "color" : "f37121"
  },
  {
    "title": "Timeline",
    "description": "JavaScript based timeline to show various chronology based events.",
    "link": "",
    "imagePath": "",
    "color" : "f3c623"
  }];
  constructor(private animation: CustomAnimationService) { }

  ngOnInit() {
  	setTimeout(() => {
  		this.animation.animateHeading(this.heading);
  	}, 1000);
    setTimeout(() => {
      this.animateCards();
    }, 1500)
  }

  animateCards(){
    this.cards.forEach(function (item){
      item.nativeElement.style.transform = 'rotateY(0deg) scale(1)';
      item.nativeElement.style.opacity = 1;
      console.log('hi');
    });
  }

  over(event){
    let target = event.target || event.srcElement || event.currentTarget;
    target.style.transform = 'scale(1.1)';
    target.style.zIndex = '100';
    // console.log(target.attributes.classList);
    // event.stopPropagation();
  }

  out(event){
    let target = event.currentTarget;
    target.style.transform = 'scale(1)';
    target.style.zIndex = '1';
  }

}
