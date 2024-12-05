import {
    algo3,
    angular,
    atomix,
    backend,
    cloudtek,
    creator,
    docker,
    gemini,
    git,
    keefe,
    mobile,
    mongodb,
    nestjs,
    nextjs,
    nodejs,
    portfolio,
    postgresql,
    reactjs,
    redux,
    tailwind,
    tb,
    typescript,
    web,
    weinform,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Full-Stack Developer',
        icon: web,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'Front-end Developer',
        icon: creator,
    },
    {
        title: 'Mobile App Developer',
        icon: mobile,
    },
];

const technologies = [
    {
        name: 'Angular',
        icon: angular,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'NextJs',
        icon: nextjs,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Nest JS',
        icon: nestjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'PostgreSQL',
        icon: postgresql,
    },
    {
        name: 'docker',
        icon: docker,
    },
    {
        name: 'git',
        icon: git,
    },
];

const experiences = [
    {
        title: 'Full Stack Developer',
        company_name: 'Algo3',
        icon: algo3,
        iconBg: '#fff',
        date: 'Feb 2024 - Present',
        points: [
            'Developed dynamic single-page applications (SPAs) using Angular, leveraging RxJS for reactive programming.',
            'Designed and implemented robust REST architecture-based web services utilizing Node.js, Nest.js, MySQL, and Sequelize.',
            'Worked with Angular core concepts: component-based architecture, forms (reactive/template-driven), observables, signals, dependency injection, and modular architecture.',
            'Migrated legacy Angular.js and Express.js applications to Angular and Nest.js, reducing maintenance costs and improving speed and scalability.',
            'Implemented modern headless CMS solutions such as Strapi and WP Rest.',
            'Implemented state management with NgRx and Ngxs for efficient application state handling.',
            'Worked with AWS services: EC2, ECS, S3, and serverless Lambda.',
            'Implemented automated unit, integration, and e2e UI tests.',
            'Documented codebase comprehensively for technical and operational clarity.',
            'Utilized SCSS, Tailwind CSS, CSS modules, PrimeFlex, and PrimeNg for modular and maintainable stylesheets.',
            'Applied Atomic Design principles and styled-components for encapsulated styling and reusability.',
            'Participated in Agile development: sprint planning, daily stand-ups, and retrospectives.',
        ],
    },
    {
        title: 'MEAN Stack Developer',
        company_name: 'Cloudtek',
        icon: cloudtek,
        iconBg: '#fff',
        date: 'Apr 2022 - Jan 2024',
        points: [
            'Designed and developed user interfaces using Angular, HTML5, CSS3, and Material UI for interactive and responsive web applications.',
            'Engineered robust backend APIs using Node.js and Express.',
            'Contributed to migration of Angular.js projects to Angular 6.',
            'Delivered test-driven and reliable solutions using Jest and Jasmine/Karma for Node.js and Angular.',
            'Developed a single isomorphic responsive website for desktop, tablet, and mobile users using Angular.',
            'Optimized animation logic for improved rendering performance.',
            'Used Git for version control and regularly pushed code to GitHub.',
            'Practiced Agile and Scrum methodologies, using Jira, Asana, and Gitlab.',
            'Played a pivotal role in the core development team, supporting internal projects and systems.',
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Working with Ammad has been incredible. His deep knowledge of Angular and Node.js helped us launch our project ahead of schedule. He's not just technically skilled, but also great at explaining complex concepts to the team.",
        name: 'Usman Ali',
        designation: 'Project Manager',
        company: 'Algo3',
        image: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
    {
        testimonial:
            "I've seen Ammad tackle challenging problems with remarkable patience and creativity. His MEAN stack expertise turned our complex requirements into a seamless product that our clients love.",
        name: 'Shahzaib Khan',
        designation: 'Lead Developer',
        company: 'Cloudtek',
        image: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
        testimonial:
            "What stands out about Ammad is his willingness to help others grow. He's mentored junior developers while maintaining high code quality. His positive attitude makes him a joy to work with.",
        name: 'Fatima Noor',
        designation: 'Frontend Engineer',
        company: 'Cloudtek',
        image: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
    {
        testimonial:
            "Ammad brought fresh ideas to our team that dramatically improved our app's performance. His commitment to best practices and user experience really sets him apart.",
        name: 'Ahsan Hafeez',
        designation: 'CTO',
        company: 'Algo3',
        image: 'https://randomuser.me/api/portraits/men/14.jpg',
    },
    {
        testimonial:
            "In our collaboration, Ammad showed exceptional problem-solving skills. He's resourceful, dedicated, and always puts the team's success first. A true professional you can count on.",
        name: 'Zain Zahid',
        designation: 'Technical Lead',
        company: 'Cloudtek',
        image: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
        testimonial:
            "I was impressed by Ammad's ability to write clean, maintainable code while meeting tight deadlines. His positive energy and collaborative spirit made our projects successful.",
        name: 'Sahil Nawaz',
        designation: 'Senior Developer',
        company: 'Algo3',
        image: 'https://randomuser.me/api/portraits/men/20.jpg',
    },
];

const projects = [
    {
        name: 'Atomix Logistics Management System',
        description:
            'Atomix is a comprehensive logistics management system designed to streamline and optimize the entire logistics process. It offers features for tracking shipments, managing inventory, and coordinating transportation, ensuring efficient and transparent logistics operations.',
        tags: [
            {
                name: 'angular',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },

            {
                name: 'node',
                color: 'green-text-gradient',
            },
            {
                name: 'postgresql',
                color: 'pink-text-gradient',
            },
            {
                name: 'nestjs',
                color: 'red-text-gradient',
            },
            {
                name: 'microservices',
                color: 'blue-text-gradient',
            },
        ],

        image: atomix,
        source_code_link: 'https://www.atomixlogistics.com',
    },
    {
        name: 'People Search Platform - WeInform',
        description:
            'WeInform is a people search platform that allows users to find and connect with individuals based on various criteria. It provides a user-friendly interface for searching and discovering people, making it easier to network and build connections.',
        tags: [
            {
                name: 'angular',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },

            {
                name: 'node',
                color: 'green-text-gradient',
            },
            {
                name: 'postgresql',
                color: 'pink-text-gradient',
            },
            {
                name: 'nestjs',
                color: 'red-text-gradient',
            },
            {
                name: 'microservices',
                color: 'blue-text-gradient',
            },
        ],

        image: weinform,
        source_code_link: 'https://www.weinform.org',
    },

    {
        name: 'Gemini Energy Solutions',
        description:
            'Gemini Energy Solutions is a website that provides comprehensive energy solutions for businesses and individuals. It offers services such as energy audits, renewable energy installations, and energy efficiency consulting to help clients reduce costs and environmental impact.',
        tags: [
            {
                name: 'angular',
                color: 'blue-text-gradient',
            },
            {
                name: 'python',
                color: 'green-text-gradient',
            },
            {
                name: 'postgresql',
                color: 'pink-text-gradient',
            },
            {
                name: 'microservices',
                color: 'blue-text-gradient',
            },
        ],
        image: gemini,
        source_code_link: 'https://www.geminiesolutions.com',
    },
    {
        name: 'TB12 Sports',
        description:
            'TB12 Fitness App is a mobile application designed to help users achieve their fitness goals through personalized workout plans, nutrition tracking, and progress monitoring. It offers a user-friendly interface and a variety of features to support users on their fitness journey.',
        tags: [
            {
                name: 'node',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'postgresql',
                color: 'pink-text-gradient',
            },

            {
                name: 'microservices',
                color: 'blue-text-gradient',
            },
        ],

        image: tb,
        source_code_link: 'https://vars.mysimplerx.com',
    },
    {
        name: 'Keefe Group',
        description:
            'Keefe Group is a leading provider of commissary services for correctional facilities. Their website offers a platform for inmates and their families to order products and manage accounts, ensuring secure and efficient transactions.',
        tags: [
            {
                name: '.Net',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },

            {
                name: 'angular',
                color: 'blue-text-gradient',
            },

            {
                name: 'MS Server',
                color: 'pink-text-gradient',
            },
        ],

        image: keefe,
        source_code_link: 'https://www.keefegroup.com',
    },
    {
        name: 'Portfolio',
        description:
            'devammadali.github.io is a personal website showcasing my portfolio and projects. It offers a glimpse into my skills, experience, and creative work, providing an opportunity to explore  talents and accomplishments.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'threejs',
                color: 'red-text-gradient',
            },
            {
                name: 'vitejs',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwindcss',
                color: 'pink-text-gradient',
            },
        ],

        image: portfolio,
        source_code_link: 'https://devammadali.github.io',
    },
];

export { experiences, projects, services, technologies, testimonials };
