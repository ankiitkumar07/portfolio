import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ExperienceComponent } from "./experience/experience.component";
import { IntroComponent } from "./intro/intro.component";
import { ObjectiveComponent } from "./objective/objective.component";
import { ProjectsComponent } from "./projects/projects.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";
import { QualificationsComponent } from "./qualifications/qualifications.component";
import { LegacyPortfolioComponent } from "./legacy-portfolio/legacy-portfolio.component";

const routes: Routes = [
  {
    path: "",
    component: LegacyPortfolioComponent,
    children: [
      // {
      //   path: "",
      //   redirectTo: "/legacy-portfolio/intro",
      //   pathMatch: "full",
      // },
      {
        path: "intro",
        component: IntroComponent,
        data: { animation: "zoomOut" },
        // outlet: 'legacy-outlet'
      },
      {
        path: "skills",
        component: ObjectiveComponent,
        data: { animation: "slideUp" },
        // outlet: 'legacy-outlet'
      },
      {
        path: "experience",
        component: ExperienceComponent,
        data: { animation: "slideDown" },
        // outlet: 'legacy-outlet'
      },
      // { path: 'education', component: QualificationsComponent, data: { animation: 'slideLeft' } },
      {
        path: "projects",
        component: ProjectsComponent,
        data: { animation: "slideRight" },
      },
      {
        path: "hobbies",
        component: HobbiesComponent,
        data: { animation: "fadeOut" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegacyPortfolioRoutingModule {}
