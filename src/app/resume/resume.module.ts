import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AthenaComponent } from "./athena/athena.component";
import { ResumeRoutingModule } from "./resume-routing.module";
@NgModule({
  declarations: [AthenaComponent],
  imports: [CommonModule, ResumeRoutingModule],
})
export class ResumeModule {}
