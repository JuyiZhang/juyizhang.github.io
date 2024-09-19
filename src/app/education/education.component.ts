import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = [
    {
      school: 'University of Illinois, Urbana Champaign',
      degreelvl: 'B.S.',
      year: '2017-2021',
      gpa: '3.89',
      max_gpa: '4.0',
      major: 'Mechanical Engineering',
      classes: 'uiuc',
    },
    {
      school: 'ETH Zurich',
      degreelvl: 'M.S.',
      year: '2021-2024',
      gpa: '5.40',
      max_gpa: '6.0',
      major: 'Mechanical Engineering',
      classes: 'eth'
    },
    {
      school: 'University of California Berkeley',
      degreelvl: 'MEng',
      year: '2024-2025',
      gpa: 'NA',
      max_gpa: '4.0',
      major: 'Material Science and Engineering',
      classes: 'ucb'
    }
  ];
  classes = [
    {
      "category": "Manufacturing",
      "courses": [
        "Design for Manufacturability",
        "Sustainability & Manufacturing",
        "Additive Manufacturing Fundamental",
        "Additive Manufacturing and Product Design",
        "Introductory Solid Mechanics",
        "Computer-Aided Design",
        "Engineering Materials",
        "Manufacturing of Electronic Devices",
      ]
    },
    {
      "category": "Product Design",
      "courses": [
        "Human-Centered Product Design",
        "Industrial Design I",
        "Industrial Design II",
        "Industrial Design III",
        "Industrial Design IV",
        "Design History Survey"
      ]
    },{
      "category": "Mechanical Engineering",
      "courses": [
        "Mechaninal Design I/II",
        "Statics/Dynamics",
        "Thermodynamics/Heat Transfer",
        "Fundamentals of Fluid Dynamics",
        "Signal Processing",
        "Mass Transfer",
        "Control System",
        "Finite Element Analysis",
      ]
    },{
      "category": "Nanotechnology",
      "courses": [
        "Nanosystems",
        "Microsystems I: Process Technology and Integration",
        "Microsystems II: Devices and Applications",
        "Measuring on the Nanometer Scale",
        "Embedded MEMS Lab",
        "MEMS-NEMS Theory & Fabrication",
        "Nanotechnology",
        "Thin-film science",
      ]
    },
    {
      "category": "Arts",
      "courses": [
        "Expressive Drawing",
        "Design I/II",
        "Ancient to Medieval Art",
        "Art in a Global Context",
        "Contemporary Issues in Art",
        "Observational Drawing",
      ]
    },
    {
      "category": "Electrical Engineering/Computer Science",
      "courses": [
        "Electrical & Electronic Circuits",
        "Semiconductor Electronics",
        "System-On-Chip Design",
        "Digital Systems Laboratory",
        "Electrical & Electronic Circuits",
        "3D Vision",
        "Power Electronics",
        "Linear Integrated Circuits",
        "Analysis and Design of VLSI Circuits",
      ]
    }
  ]      
}
