import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ResumeModule } from "./resume/resume.module";
import { LegacyPortfolioModule } from "./legacy-portfolio/legacy-portfolio.module";

const routes: Routes = [
  {
    path: "legacy-portfolio",
    loadChildren: () =>
      import("./legacy-portfolio/legacy-portfolio.module").then(
        (m) => m.LegacyPortfolioModule
      ),
  },
  {
    path: "resume",
    loadChildren: () =>
      import("./resume/resume.module").then((m) => m.ResumeModule),
  },
  {
    path: "",
    redirectTo: "/legacy-portfolio/intro",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
