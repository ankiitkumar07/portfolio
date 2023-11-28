import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { LegacyPortfolioRoutingModule } from "./legacy-portfolio-routing.module";
import { LegacyPortfolioComponent } from "./legacy-portfolio/legacy-portfolio.component";
import { IntroComponent } from "./intro/intro.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ObjectiveComponent } from "./objective/objective.component";
import { ProjectsComponent } from "./projects/projects.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";

@NgModule({
  declarations: [
    LegacyPortfolioComponent,
    IntroComponent,
    ExperienceComponent,
    ObjectiveComponent,
    ProjectsComponent,
    HobbiesComponent,


    // http://localhost:4200/legacy-portfolio/intro
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LegacyPortfolioRoutingModule,
  ],
})
export class LegacyPortfolioModule {}
