export interface IProject {
  publish: boolean;
  createdAt: string;
  updatedAt: string;
  category: string;
  image: {
    src: string;
    alt: string;
    bg: string;
  };
  status: {
    title: string;
    class: string;
  };
  body: {
    title: string;
    description: string;
    technologies: any;
  };
  links: ILink[];
  order: number;
}

interface ILink {
  href: string;
  title: string;
}
