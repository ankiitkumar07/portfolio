import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { lineExpandAnimation } from './line-expand-animation';

@Component({
  selector: 'my-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [lineExpandAnimation]
})
export class ExperienceComponent implements OnInit, AfterViewInit {

  @ViewChild('line') line : ElementRef;
  @ViewChildren('circle') circles : QueryList<ElementRef>;
  @ViewChildren('exp') exp : QueryList<ElementRef>;

  experience : any = [{
    "title": "TechMahindra",
    "resposibity": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae," +
                    "similique, sit! Eligendi dolore corporis, veritatis totam sit repudiandae temporibus" +
                    "aperiam enim debitis praesentium atque tempora laborum ratione quisquam excepturi eveniet!"
  },
  {
    "title" : "KumarsJournal",
    "resposibity" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae," +
                    "similique, sit! Eligendi dolore corporis, veritatis totam sit repudiandae temporibus" +
                    "aperiam enim debitis praesentium atque tempora laborum ratione quisquam excepturi eveniet!"
  }];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(){
  }

  ngAfterViewInit(){
    this.cdRef.detectChanges();
    console.log("ngAfterViewInit");
    setTimeout(() => {
      this.animateLine();
    }, 1000);
  }

  animateLine(){
    this.line.nativeElement.style.height = '30rem';
    setTimeout(() => {
      this.circles.forEach(function (item) {
        console.log(item.nativeElement);
        item.nativeElement.style.opacity = 1;
        item.nativeElement.style.transform = 'scale(1.1)';
      });
    }, 500);
    setTimeout(() => {
      this.exp.forEach(function (item) {
        item.nativeElement.style.left = '20px';
        item.nativeElement.style.opacity = 1;
      })
    }, 800);
    console.log(this.line.nativeElement);
  }
}
