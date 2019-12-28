module.exports = {
  siteTitle: 'Karthickeyan Narasimhan | Senior Software Engineer',
  siteDescription:
    'Karthickeyan Narasimhan is a software engineer based in Chennai, India who specializes in buildingscalable, efficient, and robust B2B SaaS products.',
  siteKeywords:
    'Karthickeyan Narasimhan, Karthickeyan, Narasimhan, hellokarthic, software engineer, back-end engineer, web developer, javascript, devops, AWS, annauniversity, freshworks, zarget',
  siteUrl: 'https://hellokarthic.com',
  siteLanguage: 'en_US',
  name: 'Karthickeyan Narasimhan',
  location: 'Chennai, India',
  email: 'nkarthic95@gmail.com',
  github: 'https://github.com/hellokarthic',
  twitterHandle: '@hellokarthic',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hellokarthic',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hellokarthic',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hellokarthic',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/hellokarthic',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
