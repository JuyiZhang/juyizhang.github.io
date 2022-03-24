import { Component, OnInit } from '@angular/core';
import 'vanilla-tilt'
declare var VanillaTilt:any

@Component({
  selector: 'app-juyi',
  templateUrl: './juyi.component.html',
  styleUrls: ['./juyi.component.css']
})
export class JuyiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector(".tilt-card"), {max: 2, speed: 1000, glare: true});
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {max: 2, speed: 1000, glare: true});
  }

}
