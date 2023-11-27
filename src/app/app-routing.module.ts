import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienceComponent } from './experience/experience.component';
import { IntroComponent } from './intro/intro.component';
import { ObjectiveComponent } from './objective/objective.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { QualificationsComponent } from './qualifications/qualifications.component';


const routes: Routes = [
	{ path: '', component: IntroComponent, data: { animation: 'zoomOut'} },
	{ path: 'skills', component: ObjectiveComponent, data: { animation: 'slideUp' }},
	{ path: 'experience', component: ExperienceComponent, data: { animation: 'slideDown' } },
	// { path: 'education', component: QualificationsComponent, data: { animation: 'slideLeft' } },
	{ path: 'projects', component: ProjectsComponent, data: { animation: 'slideRight' } },
	{ path: 'hobbies', component: HobbiesComponent, data: { animation: 'fadeOut' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
