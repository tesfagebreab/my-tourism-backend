export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // CHANGE 1: Added explicit https for your R2 bucket
          'connect-src': ["'self'", 'https:', 'https://pub-9ff861aa5ec14578b94dca9cd38e3f70.r2.dev'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            '*.r2.cloudflarestorage.com',
            'pub-9ff861aa5ec14578b94dca9cd38e3f70.r2.dev',
            'https://pub-9ff861aa5ec14578b94dca9cd38e3f70.r2.dev',
            'https://media.gheraltatours.com',
            'https://media.gheraltaadventures.com',
            'https://media.abuneyemata.com',
            '*.gheraltatours.com',
            '*.gheraltaadventures.com',
            '*.abuneyemata.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            '*.r2.cloudflarestorage.com',
            'pub-9ff861aa5ec14578b94dca9cd38e3f70.r2.dev',
            'https://pub-9ff861aa5ec14578b94dca9cd38e3f70.r2.dev',
            'https://media.gheraltatours.com',
            'https://media.gheraltaadventures.com',
            'https://media.abuneyemata.com',
            '*.gheraltatours.com',
            '*.gheraltaadventures.com',
            '*.abuneyemata.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      // CHANGE 2: Added 8080 and ALL www versions of your domains
      origin: [
        'http://localhost:3000',
        'http://localhost:8080', 
        'https://gheraltatours.com',
        'https://www.gheraltatours.com',
        'https://gheraltaadventures.com',
        'https://www.gheraltaadventures.com',
        'https://abuneyemata.com',
        'https://www.abuneyemata.com',
        /\.railway\.app$/ 
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];