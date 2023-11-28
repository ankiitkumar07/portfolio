import { Component, OnInit, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { ModalComponent } from "src/app/modal/modal.component";
import { take } from "rxjs";
import { myAnimation } from "../../route-animations";

@Component({
  selector: "app-legacy-portfolio",
  templateUrl: "./legacy-portfolio.component.html",
  styleUrl: "./legacy-portfolio.component.scss",
  animations: [myAnimation],
})
export class LegacyPortfolioComponent implements OnInit {
  public title = "portfolio";
  public width = window.innerWidth;
  public dialogRef: MatDialogRef<any>;
  public stacked: boolean = true;

  //navBar data
  buttonData = [
    {
      text: "Intro",
      link: "intro",
      icon: '<span class="material-icons">face</span>',
    },
    {
      text: "Technical Experience",
      link: "experience",
      icon: '<span class="material-icons">laptop</span>',
    },
    {
      text: "Projects Undertaken",
      link: "projects",
      icon: '<span class="material-icons">code</span>',
    },
    {
      text: "Skills",
      link: "skills",
      icon: '<span class="material-icons">insert_chart_outlined</span>',
    },
    {
      text: "Hobbies and Interests",
      link: "hobbies",
      icon: '<span class="material-icons">sports_basketball</span>',
    },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private matDialog: MatDialog,
    private router: Router,
    public route: ActivatedRoute
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
  ngOnInit(): void {
    console.log("Legacy Componene is loaded");
    // this.router.navigate(["intro"], { relativeTo: this.route });
  }

  //Animation Route
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData["animation"];
  }

  public openModal(template: TemplateRef<any>, event) {
    let span = <HTMLElement>event.target;
    span.style.transform === "rotate(360deg)"
      ? (span.style.transform = "rotate(0deg)")
      : (span.style.transform = "rotate(360deg)");

    this.dialogRef = this.matDialog.open(ModalComponent, {
      width: "40%",
      height: "50%",
      hasBackdrop: true,
    });

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

  public btnStacked($event) {
    console.log("hey");
    this.stacked === true ? (this.stacked = false) : (this.stacked = true);
    console.log(event.target);
    let span = <HTMLElement>event.target;
    span.style.transform === "rotate(180deg)"
      ? (span.style.transform = "rotate(0deg)")
      : (span.style.transform = "rotate(180deg)");
  }
}
