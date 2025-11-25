export interface AnimeLink {
  title: string;
  url: string;
  isDubbed?: boolean;
  isSubbed?: boolean;
}

export type AnimeCategory = Record<string, AnimeLink[]>;