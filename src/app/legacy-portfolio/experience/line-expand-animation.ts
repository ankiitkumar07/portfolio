import { transition, style, trigger, animate, state, query, stagger } from '@angular/animations';

export const lineExpandAnimation = 

									trigger('lineExpand', [
										transition('initial=>final', [
													// query('.btn', [
													// 	style({opacity : 1}),
													// 	stagger( 300, [
													// 		animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
													// 			style({opacity : 0}))
													// 		])
													// 	]),
													query('.line', [
														style({height: '0px'}),
														stagger( 300, [
															animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
																style({height: '30rem'}))
															])
														])
												]),
											transition('*<=>*', [
													query('.line', [
														style({height: '0px'}),
														stagger( 300, [
															animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
																style({height: '30rem'}))
															])
														]),
													query('.experienceBox.one', [
														style({ opacity : 0 }),
														stagger( -100, [
															animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)',
																style({ opacity: 1 }))
															])
														])
												])
										]);







	// trigger('lineExpand', [
	// 	state('initial', style({
	//       height: '0px'
	//     })),
	//     state('final', style({
	//       height: '30rem'
	//     })),
	// 	transition('initial => final', [
	// 		query(".circle", [
	//     	style({ opacity : 0 }),
	//     	stagger( -20, [
	//     		animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
	// 			style({ opacity : 1 }))
	//     		])
	//     	])
	// 		],
	// 		)
	// 	]);