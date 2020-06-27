import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
// import { lineExpandAnimation } from './line-expand-animation';
import { CustomAnimationService } from '../customAnimation';

@Component({
  selector: 'my-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [CustomAnimationService]
})
export class ExperienceComponent implements OnInit {

  // @ViewChildren('line') line : QueryList<ElementRef>;
  // @ViewChildren('circle') circles : QueryList<ElementRef>;
  @ViewChild('col1') col1 : ElementRef;
  @ViewChildren('exp') exp : QueryList<ElementRef<HTMLElement>>;
  @ViewChild('heading') heading : ElementRef;

  experience : any = [{
    "title": "TechMahindra",
    "resposibity": "<ul><li>I joined TechMahindra as a fresher as I entered the IT industry for the first time to work as a professional.</li>"+
                   "<li>I have been working on API development and Automation projects.</li>" + 
                   "<li>I have worked on languages like Java 9 and frameworks like Spring Boot and Angular.</li>" + 
                   "</ul>"
  },
  {
    "title" : "KumarsJournal",
    "resposibity" : "<ul>" + 
                    "<li>Worked as a Full Stack freelancer to build a website</li>" + 
                    "<li>Designed and developed the website's front end using HTML5, CSS3, and JavaScript.</li>" +
                    "<li>Used Ruby on Rails Web Application Development Framework for backend</li>" +
                    "<li>Used PostgresSQL as the Database.</li>" +
                    "</ul>"
  }];

  constructor(private animation: CustomAnimationService) { }

  ngOnInit(){
    setTimeout(() => {
      this.animation.animateHeading(this.heading);
    }, 1000);
    setTimeout(() => {
      this.setPosition()
    }, 1000);
  }

  createElements(){
    console.log("create Elements function");
  }

  setPosition(){
    let circles = <HTMLElement[]><any>document.getElementsByClassName('circle'); 
    // let lines = <HTMLElement[]><any>document.getElementsByClassName('line');
    let boxes = <HTMLElement[]><any>document.getElementsByClassName('experience-box');
    let i;    
    for(i = 0; i < boxes.length; i++){
      circles[i].style.top = (boxes[i].offsetTop + 20) + 'px';
      // lines[i].style.top = (circles[0].offsetTop + circles[0].offsetHeight + 10) + 'px';
    }
    setTimeout(() => {
      this.animateScene()
    }, 1000);
  }

  animateScene(){
    let circles = <HTMLElement[]><any>document.getElementsByClassName('circle'); 
    let lines = <HTMLElement[]><any>document.getElementsByClassName('line');
    let boxes = <HTMLElement[]><any>document.getElementsByClassName('experience-box');
    let i = 0;
    // let start = Date.now();
    // let timer = setInterval(function(){
    //   let timePassed = Date.now() - start;
    //   if (timePassed >= (boxes.length*3000)) {
    //     clearInterval(timer); // finish the animation after 2 seconds
    //     return;
    //   } 
    // }, 3000);
    for(i; i< boxes.length; i++){
      this.showBubble(circles[i]);
      this.showBox(boxes[i]);
      if(i < lines.length - 1){
        this.drawLine(lines[i], circles[1].offsetTop);
      }
    }
  }
  showBubble(el : HTMLElement){
     el.style.opacity = '1';
  }
  showBox(el : HTMLElement){
    el.style.opacity = '1';
  }
  drawLine(el : HTMLElement, height: number){
    el.style.height = height + 'px';
  }
}
