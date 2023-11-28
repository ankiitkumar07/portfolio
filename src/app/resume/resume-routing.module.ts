import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AthenaComponent } from "./athena/athena.component";
const routes: Routes = [
  {
    path: "",
    component: AthenaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
