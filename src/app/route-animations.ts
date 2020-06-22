import { trigger, transition, style, query, state, animate, keyframes, group, stagger} from '@angular/animations';

export const myAnimation = 
	trigger('routeAnimation', [
  			transition('* => slideUp', [
  				style({ height: '!' }),
  				query(':enter', style({ transform: 'translateY(100%)'})),
  				query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, opacity: 1 }), {optional: true}),
  				group([
  						query(':leave', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(-100%)', opacity: 0}))], {optional: true}),
  						query(':enter', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(100%)'}))])
  					])
  				]),
  			transition('* => zoomOut', [
  				style({ height: '!' }),
  				query(':enter', style({ transform: 'scale(1)'})),
  				query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, opacity: 1 }), {optional: true}),
  				group([
  						query(':leave', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'scale(0)', opacity: 0}))], {optional: true}),
  						query(':enter', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'scale(1)'}))])
  					])
  				]),
  			transition('* => slideLeft', [
  				style({ height: '!' }),
  				query(':enter', style({ transform: 'translateX(-100%)'})),
  				query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, opacity: 1 }), {optional: true}),
  				group([
  						query(':leave', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)', opacity: 0}))], {optional: true}),
  						query(':enter', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}))])
  					])
  				]),
  			transition('* => slideDown', [
  				style({ height: '!' }),
  				query(':enter', style({ transform: 'translateY(-100%)'})),
  				query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, opacity: 1 }), {optional: true}),
  				group([
  						query(':leave', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(100%)', opacity: 0}))], {optional: true}),
  						query(':enter', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateY(-100%)'}))])
  					])
  				]),
  			transition('* => slideRight', [
  				style({ height: '!' }),
  				query(':enter', style({ transform: 'translateX(100%)'})),
  				query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, opacity: 1 }), {optional: true}),
  				group([
  						query(':leave', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)', opacity: 0}))], {optional: true}),
  						query(':enter', [animate('1s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}))])
  					])
  				])
  		])