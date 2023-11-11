import { IFooter } from './footer.interface';

export const Footer: IFooter = {
  logo: {
    src: './../../assets/img/logo-02.svg',
    alt: '',
  },
  title: 'DG Site',
  copyright: '2023 | DG Site - Todos os direitos reservados.',
  description:
    ' Esse é o meu portifólio onde atualizo sempre com as tecnologias que vou aprendendo ao longo dos meus estudos. Fique a vontade para navegar por aqui.',
  links: [
    {
      class: 'btn btn-outline-light btn-sm',
      href: 'https://webcurriculo.firebaseapp.com',
      target: '_blank',
      icon: 'fas fa-globe-americas',
      title: 'Currículo',
    },
    {
      class: 'btn btn-outline-light btn-sm',
      href: 'https://github.com/diegohyenna',
      target: '_blank',
      icon: 'fab fa-github',
      title: 'GitHub',
    },
    {
      class: 'btn btn-outline-light btn-sm',
      href: 'https://www.linkedin.com/in/diego-guimaraes-362136123/',
      target: '_blank',
      icon: 'fab fa-linkedin',
      title: 'Linkedin',
    },
  ],
  sections: [
    {
      class: 'btn btn-outline-light btn-sm',
      href: 'home#header',
      title: 'Início',
    },
    {
      class: 'btn btn-outline-light btn-sm',
      href: 'home#about',
      title: 'Sobre',
    },
    {
      class: 'btn btn-outline-light btn-sm',
      href: 'home#projects',
      title: 'Projetos',
    },
  ],
};
