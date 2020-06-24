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
  interests : any[] = [
    {
      "title" : "Basketball",
      "subTitle": "I play Basketball!",
     "image" : "https://images.pexels.com/photos/1607855/pexels-photo-1607855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "title" : "Photography",
      "subTitle": "I love making memories and capturing nature!",
      "image" : "https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "title" : "Web Development",
      "subTitle": "Trying to be creative!",
      "image" : "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "title" : "Blogging",
      "subTitle": "I write to express!",
      "image" : "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "title" : "Videography",
      "subTitle": "I someitmes make travel videos!",
      "image" : "https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];
  constructor(private animation: CustomAnimationService) { }

  ngOnInit() {
  	setTimeout(() => {
  		this.animation.animateHeading(this.heading);
  	}, 1000)
  }

}
