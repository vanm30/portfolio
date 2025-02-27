export interface IProject {
  name: string;
  image?: string;
  path?: string;
  description1: string;
  description2?: string;
  techStack?: string[];
  links?: { name: string, url: string }[];
}

export interface IButton {
  children: string;
  onClick: () => void;
  disabled: boolean;
  type: "primary" | "secondary";
}
