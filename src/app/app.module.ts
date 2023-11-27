import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule, UntypedFormControl } from '@angular/forms'; 
 
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ObjectiveComponent } from './objective/objective.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ModalComponent } from './modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    IntroComponent,
    ObjectiveComponent,
    QualificationsComponent,
    ExperienceComponent,
    ProjectsComponent,
    HobbiesComponent,
    ModalComponent
  ],
  providers: [UntypedFormControl],
  bootstrap: [AppComponent]
})
export class AppModule { }
