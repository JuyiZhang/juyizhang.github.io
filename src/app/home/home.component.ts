import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummargComponent } from '../summarg/summarg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SummargComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  experience = [
    {
      title: 'Manufacture Design Engineer',
      company: 'Apple',
      year: '2022-2023',
      location: 'Shanghai, China',
      description: [
        'Ferrite product development',
        'New process development',
        'Green initiative'
      ],
      class: 'apple'
    }, {
      title: 'Software Engineer',
      company: 'Microsoft',
      year: '2019',
      location: 'Beijing, China',
      description: [
        'Web development based on Angular',
        'Frontend design'
      ],
      class: 'microsoft'
    }
  ];
  skills = [
    "Modeling",
    "Simulation",
    "Rendering",
    "MEMS",
    "Design for Manufacturing",
    "Robotics",
    "FPGA",
    "Embedded System",
    "PCB Design",
    "Machine Learning",
    "Computer Vision",
    "Computer Architecture",
  ]
  education = [
    {
      school: 'University of Illinois, Urbana Champaign',
      degreelvl: 'Bachelor of Science',
      year: '2017-2021',
      gpa: '3.89',
      max_gpa: '4.0',
      major: 'Mechanical Engineering',
      class: "uiuc"
    },
    {
      school: 'ETH Zurich',
      degreelvl: 'Master of Science',
      year: '2021-2024',
      gpa: '5.40',
      max_gpa: '6.0',
      major: 'Mechanical Engineering',
      class: 'eth'
    },
    {
      school: 'University of California, Berkeley',
      degreelvl: 'Master of Engineering',
      year: '2024-2025',
      gpa: 'NA',
      max_gpa: '4.0',
      major: 'Material Sci Eng',
      class: "cal"
    }
  ]
}
