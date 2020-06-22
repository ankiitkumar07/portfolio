import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class CustomAnimationService {

	animateHeading(el : ElementRef) {
		el.nativeElement.style.bottom = 0;
	}
}