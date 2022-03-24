import { Component, OnInit } from '@angular/core';
import { researchTableData, classProjects, workExperienceData } from '../data';
import 'vanilla-tilt'
declare var VanillaTilt:any



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  researchData = researchTableData
  workExperience = workExperienceData
  classpj = classProjects

  constructor() { 
  }
  
  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    VanillaTilt.init(document.querySelector(".tilt-card"), {max: 2, speed: 1000, glare: true});
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {max: 2, speed: 1000, glare: true});
  }  

}
