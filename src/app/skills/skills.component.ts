import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      category: 'Programming',
      skills: [
        'Machine Learning: Python, Pytorch',
        'Mobile Development: Swift, Java',
        'Embedded Linux: C/C++',
        '3D Development: Unity, MRTK, C#',
        'Web Development: HTML/CSS/JS/TS', 
      ]
    },{
      category: 'Parametric Modeling',
      skills: [
        'SolidWorks',
        'AutoCAD',
        'Fusion 360',
        'Creo',
        'Siemens NX',
      ]
    }, {
      category: 'Analysis',
      skills: [
        'Ansys Zemax',
        'COMSOL',
        'Solidworks Simulation',
        'Autodesk Moldflow',
        'Matlab',
      ]
    }, {
      category: 'Design',
      skills: [
        'Keyshot',
        'Blender',
        'Final Cut Pro',
        'Adobe PS/AI',
        'Adobe Premiere',
        'Figma'
      ]
    },{
      category: 'Electrical Engineering',
      skills: [
        'Altium Designer',
        'Cadence',
        'Autodesk Eagle',
        'PLECS',
        'Quartus'
      ]
    }, {
      category: 'Office',
      skills: [
        'Keynote',
        'Excel VBA',
        'iWork Suite',
        'Microsoft Suite',
        'Google Suite'
      ]
    }, {
      category: 'Languages',
      skills: [
        'English',
        'Chinese',
        'Japanese',
        'German',
      ]
    }
  ]
}
