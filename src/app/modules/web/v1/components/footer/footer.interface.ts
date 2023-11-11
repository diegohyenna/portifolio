export interface IFooter {
  logo: {
    src: string;
    alt: string;
  };
  title: string;
  copyright: string;
  description: string;
  links: ILink[];
  sections: ISection[];
}

interface ILink {
  class: string;
  href: string;
  target: string;
  icon: string;
  title: string;
}

interface ISection {
  class: string;
  href: string;
  title: string;
}
