export interface SitemapLink {
  title: string;
  url: string;
  isDubbed?: boolean;
  isSubbed?: boolean;
}

export type SitemapCategory = Record<string, SitemapLink[]>;