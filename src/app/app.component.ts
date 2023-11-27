import { Component, TemplateRef } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { myAnimation } from "./route-animations";
import { combineLatest, Subscription, take } from "rxjs";
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faLaptopCode,
  faChartArea,
  faProjectDiagram,
  faBasketballBall,
} from "@fortawesome/free-solid-svg-icons";

import { MatIcon, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [myAnimation],
})
export class AppComponent {
  title = "portfolio";

  width = window.innerWidth;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private matDialog: MatDialog
  ) {
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/svg-icons/facebook-fb-social-icon.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "instagram",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/svg-icons/icons8-instagram-100.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/svg-icons/icons8-github.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/svg-icons/icons8-linkedin.svg"
      )
    );
  }

  public dialogRef: MatDialogRef<any>;

  //icons
  fb = faFacebookSquare;
  git = faGithub;
  insta = faInstagram;
  linkedin = faLinkedin;
  faUser = faUser;
  faLaptopCode = faLaptopCode;
  faProjectDiagram = faProjectDiagram;
  faChartArea = faChartArea;
  faBasketballBall = faBasketballBall;

  //navBar data
  buttonData = [
    {
      text: "Intro",
      link: "/",
      icon: '<span class="material-icons">face</span>',
    },
    {
      text: "Technical Experience",
      link: "/experience",
      icon: '<span class="material-icons">laptop</span>',
    },
    {
      text: "Projects Undertaken",
      link: "/projects",
      icon: '<span class="material-icons">code</span>',
    },
    {
      text: "Skills",
      link: "/skills",
      icon: '<span class="material-icons">insert_chart_outlined</span>',
    },
    {
      text: "Hobbies and Interests",
      link: "/hobbies",
      icon: '<span class="material-icons">sports_basketball</span>',
    },
  ];

  //Animation Route
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData["animation"];
  }

  //Modal
  // modalRef: BsModalRef;

  openModal(template: TemplateRef<any>, event) {
    let span = <HTMLElement>event.target;
    span.style.transform === "rotate(360deg)"
      ? (span.style.transform = "rotate(0deg)")
      : (span.style.transform = "rotate(360deg)");

    this.dialogRef = this.matDialog.open(ModalComponent, {
      width: "40%",
      height: "50%",
      hasBackdrop: true,
    });
    // this.modalRef = this.modalService.show(template, {
    //   class: "modal-lg modal-dialog-centered",
    // });
    // this.modalService.onHide.subscribe((reason: string) => {
    // });

    this.dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          span.style.transform === "rotate(360deg)"
            ? (span.style.transform = "rotate(0deg)")
            : (span.style.transform = "rotate(360deg)");
        },
      });
  }

  //Buttons
  stacked: boolean = true;
  btnStacked($event) {
    console.log("hey");
    this.stacked === true ? (this.stacked = false) : (this.stacked = true);
    console.log(event.target);
    let span = <HTMLElement>event.target;
    span.style.transform === "rotate(180deg)"
      ? (span.style.transform = "rotate(0deg)")
      : (span.style.transform = "rotate(180deg)");
  }
}
