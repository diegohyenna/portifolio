import { IProject } from './projects.interface';

export const Projects: IProject[] = [
  {
    publish: true,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',
    category: 'frontend',
    image: {
      src: 'assets/img/projects/matchgular.jpg',
      alt: 'matchgular',
      bg: 'assets/img/projects/bgs/technology01b.jpg',
    },
    status: {
      title: 'Em andamento',
      class: 'warning',
    },
    body: {
      title: 'Matchgular',
      description:
        'UUm projeto feito em angular para treinar algumas técnicas que é um simulacro de app de relacionamento.',
      technologies: [
        'Material Angular',
        'Sass',
        'Angular',
        'Firebase',
        'Typescript',
      ],
    },
    links: [
      {
        href: 'https://matchgular.web.app',
        title: 'Visitar o site aqui',
      },
    ],
    order: 1,
  },
  {
    publish: true,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'frontend',
    image: {
      src: 'assets/img/projects/agenda-sms.png',
      alt: 'agenda de sms',
      bg: 'assets/img/projects/bgs/technology02b.jpg',
    },
    status: {
      title: 'Concluído',
      class: 'success',
    },
    body: {
      title: 'Agendamento de SMS',
      description: 'Um projeto feito em angular para treinar tecnicas',
      technologies: [
        'Material Angular',
        'Sass',
        'Angular',
        'Indexed DB',
        'Firebase',
        'Typescript',
      ],
    },
    links: [
      {
        href: 'https://github.com/diegohyenna/agenda-sms',
        title: 'Visitar o repositório aqui',
      },
    ],
    order: 2,
  },
  {
    publish: true,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'frontend',
    image: {
      src: 'assets/img/projects/financas.jpg',
      alt: 'financas',
      bg: 'assets/img/projects/bgs/technology01b.jpg',
    },
    status: {
      title: 'Concluído',
      class: 'success',
    },
    body: {
      title: 'Financas',
      description:
        'Um projeto feito em react para fins de estudo usando hooks e styled components, que consiste em gerenciador de gastos financeiro',
      technologies: ['React', 'Typescript', 'Styled Components'],
    },
    links: [
      {
        href: 'https://github.com/diegohyenna/financas',
        title: 'Visitar o repositório aqui',
      },
      {
        href: 'https://financasxyz.netlify.app',
        title: 'Visitar o site aqui',
      },
    ],
    order: 3,
  },
  {
    publish: true,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'frontend',
    image: {
      src: 'assets/img/projects/playerlizzer.png',
      alt: 'Playerlizze',
      bg: 'assets/img/projects/bgs/technology03b.jpg',
    },
    status: {
      title: 'Concluído',
      class: 'success',
    },
    body: {
      title: 'Playerlizzer',
      description:
        'Um player de músicas que fiz para treinar conhecimentos com audio e angular',
      technologies: [
        'HTML5',
        'CSS3',
        'Javascript',
        'Angular',
        'Feather Icons',
        'Typescript',
        'Firebase',
      ],
    },
    links: [
      {
        href: 'https://github.com/diegohyenna/playerlizzer',
        title: 'Visitar o repositório aqui',
      },
      {
        href: 'https://playerlizzer.web.app',
        title: 'Visitar a demonstração',
      },
    ],
    order: 4,
  },
  {
    publish: true,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'frontend',
    image: {
      src: 'assets/img/projects/portifolio.png',
      alt: 'api do meu cms do portifolio',
      bg: 'assets/img/projects/bgs/technology04b.jpg',
    },
    status: {
      title: 'Em andamento',
      class: 'warning',
    },
    body: {
      title: 'Esse portifólio que vós fala',
      description:
        'Meu portifólio que fica em constante evolução, vou acrescentando features ao decorrer do tempo. Alguns detalhes são: components criados dinamicamente em tempo de execução através de um arquivo json, consumo de api, uso de guards, interceptores, gerenciamento de estado com redux, modules e outros.',
      technologies: [
        'HTML5',
        'CSS3',
        'Javascript',
        'Angular',
        'SASS',
        'Font Awesome',
        'Bootstrap',
        'Media Queries',
        'Vanilla JavaScript',
        'Firebase Hosting',
        'Typescript',
        'Svg',
        'Json Editor',
        'API',
        'Redux',
      ],
    },
    links: [
      {
        href: 'https://dgsite.web.app',
        title: 'Visitar o site aqui',
      },
    ],
    order: 0,
  },
  {
    publish: true,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'backend',
    image: {
      src: 'assets/img/projects/nodejs.png',
      alt: 'api do meu cms do portifolio',
      bg: 'assets/img/projects/bgs/technology06b.jpg',
    },
    status: {
      title: 'Concluído',
      class: 'success',
    },
    body: {
      title: 'Uma API em Nodejs',
      description: 'A API do meu antigo portifolio. Documentada com Swagger',
      technologies: [
        'Nodejs',
        'Express',
        'Firebase',
        'Swagger',
        'Hapi/Joi',
        'Heroku',
      ],
    },
    links: [
      {
        href: 'https://cms-portifolio.onrender.com/api-docs/',
        title: 'Visitar a API aqui',
      },
    ],
    order: 6,
  },
  {
    publish: true,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'frontend',
    image: {
      src: 'assets/img/projects/reactjs.png',
      alt: 'social app',
      bg: 'assets/img/projects/bgs/technology07b.jpg',
    },
    status: {
      title: 'Concluído',
      class: 'success',
    },
    body: {
      title: 'Social APP',
      description:
        'Um estudo mais minuncioso de algumas tecnologias aplicadas com React.',
      technologies: [
        'HTML5',
        'CSS3',
        'Javascript',
        'React',
        'Redux',
        'Axios',
        'Material UI',
        'Firebase',
      ],
    },
    links: [
      {
        href: 'https://github.com/diegohyenna/social-app-client',
        title: 'Visitar o repositório aqui',
      },
    ],
    order: 7,
  },
  {
    publish: false,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'frontend',
    image: {
      src: 'assets/img/projects/gatsby.png',
      alt: 'estudos em gatsby',
      bg: 'assets/img/projects/bgs/technology01b.jpg',
    },
    status: {
      title: 'Concluído',
      class: 'success',
    },
    body: {
      title: 'Estudos com Gatsby',
      description: 'Um estudo com Gatsby JS.',
      technologies: [
        'Gatsby',
        'Styled Components',
        'Node SASS',
        'Bootstrap',
        'Heroku',
      ],
    },
    links: [
      {
        href: 'https://github.com/diegohyenna/estudos-gatsby',
        title: 'Visitar o repositório aqui',
      },
    ],
    order: 8,
  },
  {
    publish: false,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'backend',
    image: {
      src: 'assets/img/projects/mongodb.png',
      alt: 'estudos em mongodb',
      bg: 'assets/img/projects/bgs/technology02b.jpg',
    },
    status: {
      title: 'Concluído',
      class: 'success',
    },
    body: {
      title: 'Estudos com MongoDB + Mongoose',
      description: 'Um estudo com MongoDB + Mongoose.',
      technologies: ['MongoDB', 'Express', 'PassportJs', 'Express Handlebars'],
    },
    links: [
      {
        href: 'https://github.com/diegohyenna/estudos-com-mongodb',
        title: 'Visitar o repositório aqui',
      },
      {
        href: 'https://blog-nodejs-mongoose-estudos.herokuapp.com',
        title: 'Visitar a demonstração',
      },
    ],
    order: 9,
  },
  {
    publish: false,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'backend',
    image: {
      src: 'assets/img/projects/laravel.png',
      alt: 'estudos em laravel',
      bg: 'assets/img/projects/bgs/technology03b.jpg',
    },
    status: {
      title: 'Concluído',
      class: 'success',
    },
    body: {
      title: 'Estudos MVC - CRUD - Laravel',
      description: 'Um estudo com Laravel.',
      technologies: ['HTML5', 'CSS3', 'Laravel', 'Mysql', 'Bootstrap', 'PHP'],
    },
    links: [
      {
        href: 'https://github.com/diegohyenna/estudo-laravel',
        title: 'Visitar o repositório aqui',
      },
    ],
    order: 10,
  },
  {
    publish: false,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'frontend',
    image: {
      src: 'assets/img/projects/parallax.png',
      alt: 'um parallax',
      bg: 'assets/img/projects/bgs/technology04b.jpg',
    },
    status: {
      title: 'Concluído',
      class: 'success',
    },
    body: {
      title: 'Fixed Parallax',
      description: 'Desenvolvimento de um parallax diferenciado.',
      technologies: ['Bootstrap 4', 'CSS 3', 'HTML 5', 'JQuery'],
    },
    links: [
      {
        href: 'https://github.com/diegohyenna/parallax-fixed',
        title: 'Visitar o repositório aqui',
      },
    ],
    order: 11,
  },
  {
    publish: false,
    createdAt: '2022-12-16T11:23:12.061Z',
    updatedAt: '2022-12-16T11:23:12.061Z',

    category: 'design',
    image: {
      src: 'assets/img/projects/style-guide.png',
      alt: 'um parallax',
      bg: 'assets/img/projects/bgs/technology02.jpg',
    },
    status: {
      title: 'A ser refatorado',
      class: 'danger',
    },
    body: {
      title: 'Toopfy Style Guide',
      description: 'Um style guide desenvolvido em cima do materialize.',
      technologies: ['Materialize Css', 'JQuery', 'SASS', 'Gulp'],
    },
    links: [
      {
        href: 'https://github.com/diegohyenna/toopfy-style-guide',
        title: 'Visitar o repositório aqui',
      },
    ],
    order: 12,
  },
];
