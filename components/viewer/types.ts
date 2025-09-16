import type { ReactNode } from "react";

export type Slide = ReactNode;

export type PresentationMeta = {
  title?: string;
  description?: string;
  author?: string;
  date?: string;
};

export type PresentationModule = {
  // Array of slides to render. Each slide is any ReactNode.
  slides?: Slide[];
  // Optional presentation metadata.
  meta?: PresentationMeta;
  // Optional default export (not required). If provided, it's rendered above the slides viewer.
  default?: any;
};
