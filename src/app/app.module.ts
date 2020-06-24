import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts';
 
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ObjectiveComponent } from './objective/objective.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    IntroComponent,
    ObjectiveComponent,
    QualificationsComponent,
    ExperienceComponent,
    ProjectsComponent,
    HobbiesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
