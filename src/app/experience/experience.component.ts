import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent, ThemeDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  company = [
    {
      name: 'Apple Procurement and Operations',
      image: '../assets/Logo/apple.png',
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
      image: '../../assets/Logo/microsoft.png',
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
      title: 'Smart Wearable',
      name: 'HelloMR Glasses',
      images: [
        'assets/Projects/hellomr/1.png',
        'assets/Projects/hellomr/2.png',
      ],
      year: '2023-Now',
      project_description: 'HelloMR is a Mixed reality glasses that enable user to interact with the virtual world with bare hands. The user is able to see through the glasses using state-of the art birdbath optics that guides the optical path to the user eyes. The glasses utilizes camera for SLAM and hand detection',
      role_description: 'Responsible for integrating the camera, optical lenses, antenna, speaker, sensors and flexes into injection molding enclosure',
      xr: '',
    }, {
      title: 'Wearable',
      name: 'Z-Watch',
      images: [
        '../../assets/Projects/zwatch/1.jpg',
        '../../assets/Projects/zwatch/2.jpg',
      ],
      year: '2021',
      project_description: 'Z-Watch is a watch printed with SLS metal 3D printing. the design tout the highly intricate design that is only possible with 3D printing and preserves a fine-rough surface maintaining the 3D printing feature.',
      role_description: 'Responsible for the mechanical design, including designing the chassis and assembly of the watch',
      xr: '',
    }, {
      title: 'Computer Chassis',
      name: 'Z-Cube',
      images: [
        '../../assets/Projects/ccube/1.jpg',
      ],
      year: '2020-2021',
      project_description: 'C1 Cube is an Intel NUC based chassis with discrete graphics card, which is the first of its kind. The discrete graphics card utilizes MXM graphics card, whose PCIe signal is redirected to the NUC using the NVMe connector.',
      role_description: 'Responsible for the mechanical design, integrating the motherboard, button, and flex into sheet metal cases',
      xr: ''
    }, {
      title: 'Computer Chassis',
      name: 'Z-Cases',
      images: [
        '../../assets/Projects/zcase/2.png',
        '../../assets/Projects/zcase/1.jpg',
      ],
      year: '2018-2019',
      project_description: 'Z-Case is a mini-ITX case with only 7.8L of volume, and it touts the intricate electrical circuit with full-sized glasses panel.',
      role_description: 'Responsible for oversee the manufacture of the computer case and communicate with vendor on DFM',
      xr: ''
    }, {
      title: 'Accessories',
      name: 'Z-Hub',
      images: [
        '../../assets/Projects/zhub/1.jpg'
      ],
      year: '2018-2019',
      project_description: 'Z-Case is a mini-ITX case with only 7.8L of volume, and it touts the intricate electrical circuit with full-sized glasses panel.',
      role_description: 'Responsible for oversee the manufacture of the computer case and communicate with vendor on DFM',
      xr: ''
    }
  ]
}
