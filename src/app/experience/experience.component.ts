import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  company = [
    {
      name: 'Apple Procurement and Operations',
      image: '../../../assets/company/apple.png',
      location: 'Shanghai, China',
      year: '2022-2023',
      title: 'Manufacture Design Engineer',
      description: [
        'Overseeing Wireless charging ferrite product production using Pressing/Metal Injection Molding',
        'Work with vendor on process development and quality control for efficient production and increased yield',
        'Developing new process for ferrite product post processing',
        'Leading Green Manufacturing Initiative for Apple related manufacturing in Wireless charging and Haptics',
        'Revamping documentation template for manufacturing to improve efficiency in communication',
      ]
    }, {
      name: 'Microsoft',
      image: '../../../assets/company/microsoft.png',
      location: 'Beijing, China',
      year: '2019',
      title: 'Software Engineer',
      description: [
        'Using CSS/Html to design the frontend of web-based user interface',
        'Applying UI/UX techniques to improve user friendliness of the software',
        'Developing Web-based Software using Angular Framework'
      ]
    }
  ]

  projects = [
    {
      name: 'HelloMR Glasses',
      image: '../../../assets/project/hellomr.png',
      year: '2023-Now',
      project_description: 'HelloMR is a Mixed reality glasses that enable user to interact with the virtual world with bare hands. The user is able to see through the glasses using state-of the art birdbath optics that guides the optical path to the user eyes. The glasses utilizes camera for SLAM and hand detection, and a separate console perform all computation task to reduce weight and heat on the glasses.',
      role_description: 'Responsible for the mechanical design, integrating the camera, optical lenses, antenna, speaker, sensors and flexes into injection molding enclosure',
    }, {
      name: 'C1 Cube',
      image: '../../../assets/project/c1cube.png',
      year: '2020-2021',
      project_description: 'C1 Cube is an Intel NUC based chassis with discrete graphics card, which is the first of its kind. The discrete graphics card utilizes MXM graphics card, whose PCIe signal is redirected to the NUC using the NVMe connector.',
      role_description: 'Responsible for the mechanical design, integrating the motherboard, button, and flex into sheet metal cases'
    }, {
      name: 'Z-Cases',
      image: '../../../assets/project/zcases.png',
      year: '2018-2019',
      project_description: 'Z-Case is a mini-ITX case with only 7.8L of volume, and it touts the intricate electrical circuit with full-sized glasses panel.',
      role_description: 'Responsible for oversee the manufacture of the computer case and communicate with vendor on DFM'
    }
  ]
}
