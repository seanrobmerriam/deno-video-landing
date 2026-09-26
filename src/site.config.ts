
export const site = {

  name: 'VideoStreamGo Platform',
  
  title: 'The fastest video sharing and streaming platform available.',
  
  titleTemplate: '%s — VideoStreamGo',

  description: 'Guaranteed faster and more reliable than any other video platform on the market.',

  url: 'https://videostreamgo.com',

  locale: 'en',

  author: 'VideoStreamGo Team',

  defaultOgImage: undefined as string | undefined,
 
  social: {
    twitter: '@videostreamgo',
    github: 'https://github.com/videostreamgo/',
  },
 
  postsPerPage: 9,
};

export type SiteConfig = typeof site;
