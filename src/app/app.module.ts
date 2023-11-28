import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";

import { NgChartsModule } from "ng2-charts";
import {
  ReactiveFormsModule,
  FormsModule,
  UntypedFormControl,
} from "@angular/forms";

import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal/modal.component";
import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule,
    // FontAwesomeModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
  ],
  declarations: [AppComponent, ModalComponent],
  providers: [UntypedFormControl],
  bootstrap: [AppComponent],
})
export class AppModule {}
