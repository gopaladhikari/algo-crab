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

export interface loginFormtype {
  email: string;
  password: string;
  remember: boolean;
}
export interface signUpFormtype {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  terms: boolean;
}
