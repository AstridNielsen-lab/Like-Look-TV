import { SitemapCategory } from '../../types/sitemap';
import { CATEGORY_TITLES } from './constants';
import { symbolLinks, letterALinks } from './categories';

export const sitemapData: SitemapCategory = {
  [CATEGORY_TITLES.SYMBOLS]: symbolLinks,
  [CATEGORY_TITLES.LETTER_A]: letterALinks,
};

export * from './constants';