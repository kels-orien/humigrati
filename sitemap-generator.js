const sitemap = require('nextjs-sitemap-generator');  

sitemap({  
  alternateUrls: {  
      en: 'https://humigrati.en',  
      es: 'https://humigrati.es',  
      ja: 'https://humigrati.jp',  
      fr: 'https://humigrati.fr',  
  },  
  baseUrl: process.env.SITE_URL || "https://humigrati.com",  
  ignoredPaths: ['admin'],
  extraPaths: ['/extraPath'],
  pagesDirectory: __dirname + "\\pages",  
  targetDirectory : 'pages/',
  nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: [
        'png',
        'jpg'
  ],
  pagesConfig: {
    '/login': {
      priority: '0.5',
      changefreq: 'daily'
    }
  },
  sitemapStylesheet: [
    {
      type: "text/css",
      styleFile: "/test/styles.css"
    },
    {
      type: "text/xsl",
      styleFile: "test/test/styles.xls"
    }
  ]
});

console.log(`✅ sitemap.xml generated!`);