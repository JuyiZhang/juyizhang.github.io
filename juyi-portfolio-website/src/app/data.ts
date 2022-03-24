import {tableValue, skills, categorizedSkills} from './datastructure';

export let researchTableData: tableValue[] = [
    {
        title:'Fabrication and Characterization of Carbon-based Thin Electrodes',
        caption:'ETH Zürich',
        descriptor:'Under Mentoring of Lu Bin',
        date:'2022.1 - Now',
        list: [
            "Based on the conductivity of sp2 hybridized carbon structures (such as graphene)",
            "Manufacture Carbon-Based Electrode with E-beam lithography of different types of resist",
            "Conduct testing on the resistivity of the structure and find the optimal resist"
        ]
    },{
        title:'Nano Manufacturing Research',
        caption:'UIUC',
        descriptor:'Under Mentoring of Zhichao Zhang',
        date:'2019.11 - Now',
        list: [
            "Research on gas sensors that could detect possible gases using pattern recognition and machine learning",
            "Route circuit board for embedding the nano-manufactured device and design testing procedures",
            "Currently working on the wireless communication of sensors with controlling device with multiplexing",
            "Create and maintain the research group website"
        ]
    },{
        title:'Automation and Digital Manufacturing Lab',
        caption:'UIUC',
        descriptor:'Under Mentoring of Qasim Nazir',
        date:'2019.11 - 2020.5',
        list: [
            "The device is a microphone detecting the flawed supersonic welding",
            "Design the enclosure for research devices",
            "Focus on optimizing experience for using the device"
        ]
    },
]

export let workExperienceData: tableValue[] = [
    {
        title:'exA Arcadia.',
        caption:'Champaign, IL, US',
        descriptor:'Electrical and Mechanical Engineer',
        date:'2018.9 - 2019.6',
        list: [
            "Development of gaming consoles and cartridges",
            "In charge of hardware development and integration",
            "Engineered working PCBs for cartridges and bridging cartridge to consoles"
        ]
    },{
        title:'Microsoft',
        caption:'Beijing, China',
        descriptor:'Intern Software Engineer / Graphics Designer',
        date:'2019.6 - 2019.8',
        list: [
            "Designed the prototype and icons for user-interface (website)",
            "Developed Web-based Software using Angular Framework",
            "Researched on product development and correlated technologies and lectured on the topic"
        ]
    },{
        title:'Z-Case',
        caption:'Champaign, IL, US',
        descriptor:'Supply Chain Manager',
        date:'2019.1-2019.8',
        list: [
            "In charge of financial account and payment",
            "Developed and manufactured Mini-ITX computer case ",
            "Responsible for supplying components and contact manufacture plants, component provider",
            "Deal with shipping and custom declaration"
        ]
    },
]

export let classProjects: tableValue[] = [
    {
        title:'MEMS Thin-membrane Pressure Sensor',
        list: [
            'Pressure sensor based on resistivity change',
            'Utilized metal liftoff and wet etching using photolithography'
        ]
    },{
        title:'Microfluidic Mixer',
        list: [
            'Two input one output T Type fluid mixer using MEMS Process',
            'Utilized photolithography and molding for manufacturing a flexible mixer'
        ]
    },{
        title:'MEMS Acceleration Sensor',
        list: [
            'Spring-dumper based differential capacitance sensing',
            'Utilized dry etching with photolithography'
        ]
    },{
        title:'Universal Robot Pick-and-Place Control',
        list: [
            'Controlling the Universal Robot using Python and ROS',
            'Detecting object from picture captured by the camera using OpenCV and placing it in correct position'
        ]
    },{
        title:'Drone Control using PID Controller',
        list: [
            'Position and angle data of drone is obtained from the camera',
            'Utilized fine-tuned PID controller by placing poles to control the dynamic performance of drone',
            'In addition to PID controller, also used IMC controller to control the drone'
        ]
    },{
        title:'Video and Audio Output using FPGA',
        list: [
            'Use Altera FPGA Board and System Verilog in Quartus',
            'Generate Audio and Video output from Programming FPGA using hardware accelerator and software programming in NIOS'
        ]
    },
]

export let allSkillsData: skills[] = [
    {
        title:'swift',
        mastery:0.7,
    }
]