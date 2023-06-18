export interface NavLinkType {
  id: number;
  href: string;
  title: string;
}

export interface FooterLinkType {
  id: number;
  title: string;
  links?: {
    id: number;
    href: string;
    title: string;
  }[];
  href?: string;
}
