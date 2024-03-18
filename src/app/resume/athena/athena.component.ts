import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
enum SkillCtegory {
  TECHNICAL,
  PROGRAMMING_LANGUAGE,
  GENERAL,
}
@Component({
  selector: "app-athena",
  templateUrl: "./athena.component.html",
  styleUrl: "./athena.component.scss",
})
export class AthenaComponent {
  constructor() {}

  public data = {
    profileSummary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum qui ducimus? Optio deserunt modi beatae quo, rem, soluta repudiandae eveniet est culpa commodi animi dolore tempora aliquam nemo sunt?",
    imageLink: "",
    name: "Ankit Kumar",
    positionHeading: "Web Developer",
    skills: [
      {
        id: 1,
        name: "Java",
        category: SkillCtegory.PROGRAMMING_LANGUAGE,
      },
      {
        id: 2,
        name: "JavaScript",
        category: SkillCtegory.PROGRAMMING_LANGUAGE,
      },
      {
        id: 3,
        name: "TypeScript",
        category: SkillCtegory.PROGRAMMING_LANGUAGE,
      },
      {
        id: 4,
        name: "Angular",
        category: SkillCtegory.TECHNICAL,
      },
      {
        id: 5,
        name: "Spring Boot",
        category: SkillCtegory.TECHNICAL,
      },
      {
        id: 6,
        name: "SQL",
        category: SkillCtegory.TECHNICAL,
      },
    ],

    projects: [
      {
        id: 1,
        position: "Analyst",
        from: "Feb-2022",
        to: null,
        org: "ValueLabs",
        projectLink: "",
        detils: "",
      },
      {
        id: 2,
        position: "Analyst",
        from: "Jun-2021",
        to: "Feb-2022",
        org: "Filed",
        projectLink: "",
        detils: "",
      },
      {
        id: 3,
        position: "Analyst",
        from: "Apr-2018",
        to: "Jun-2021",
        org: "Tech Mahindra",
        projectLink: "",
        detils: "",
      },
    ],
  };
}
