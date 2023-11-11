interface IContact {
  icon: string;
  content: string;
}

interface ILink {
  href: string;
  target: string;
  'data-toggle': string;
  'data-placement': string;
  title: string;
  icon: string;
}

interface ITechnology {
  title: string;
  percent: string;
}

export interface IProfile {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  occupation: string;
  contacts: IContact[];
  links: ILink[];
}

export interface IContentLink {
  href: string;
  title: string;
  target: string;
  icon: string;
}

export interface IContent {
  description: string;
  technologies: ITechnology[];
  links: IContentLink[];
}

export interface IAbout {
  profile: IProfile;
  content: IContent;
}
