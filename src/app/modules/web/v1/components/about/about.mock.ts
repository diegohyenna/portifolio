import { IAbout } from './about.interface';
export const about: IAbout = {
  profile: {
    image: {
      src: '../../../../assets/img/eu.jpg',
      alt: 'Foto de perfil do desenvolvedor diego',
    },
    name: 'Diego Guimarães Martins',
    occupation: 'Desenvolvedor Front-end',
    contacts: [
      {
        icon: 'fas fa-envelope',
        content: 'dgmartins87@gmail.com',
      },
      {
        icon: 'fas fa-phone',
        content: '(71) 9 9332-9298',
      },
      {
        icon: 'fas fa-map-marker-alt',
        content: 'Salvador, Bahia - Brasil',
      },
    ],
    links: [
      {
        href: 'https://webcurriculo.firebaseapp.com',
        target: '_blank',
        'data-toggle': 'tooltip',
        'data-placement': 'top',
        title: 'Web Curriculo',
        icon: 'fas fa-globe-americas',
      },
      {
        href: 'https://www.linkedin.com/in/diego-guimaraes-362136123/',
        target: '_blank',
        'data-toggle': 'tooltip',
        'data-placement': 'top',
        title: 'Linkedin',
        icon: 'fab fa-linkedin',
      },
      {
        href: 'https://github.com/diegohyenna',
        target: '_blank',
        'data-toggle': 'tooltip',
        'data-placement': 'top',
        title: 'Github',
        icon: 'fab fa-github',
      },
    ],
  },
  content: {
    description:
      'Sou formado em Sistemas para Internet pela Unifacs e atuo na área de T.I. desde 2011. Sou um Desenvolvedor Web (Web Developer) com sólidos conhecimentos em tecnologias Fullstack, sendo o foco maior em Frontend. Gosto de tecnologia, inovação, criatividade, web designer, desenho, arte e games. Estou sempre disposto a aprender mais.',
    technologies: [
      {
        title: 'HTML5',
        percent: '100%',
      },
      {
        title: 'CSS3',
        percent: '100%',
      },
      {
        title: 'JavaScript',
        percent: '100%',
      },
      {
        title: 'Angular',
        percent: '100%',
      },
      {
        title: 'ReactJs',
        percent: '85%',
      },
      {
        title: 'Ionic',
        percent: '100%',
      },
      {
        title: 'Firebase',
        percent: '90%',
      },
      {
        title: 'NodeJs',
        percent: '100%',
      },
      {
        title: 'SQL',
        percent: '100%',
      },
      {
        title: 'GIT',
        percent: '100%',
      },
      {
        title: 'SASS',
        percent: '100%',
      },
      {
        title: 'Gulp',
        percent: '50%',
      },
      {
        title: 'MongoDB',
        percent: '50%',
      },
      {
        title: 'Mongoose',
        percent: '50%',
      },
      {
        title: 'API Restful',
        percent: '75%',
      },
    ],
    links: [
      {
        href: 'https://webcurriculo.firebaseapp.com',
        title: 'Web currículo',
        icon: '',
        target: '_blank',
      },
    ],
  },
};
