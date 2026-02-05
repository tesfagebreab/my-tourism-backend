module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('CF_ACCESS_KEY_ID'),
            accessSecretKey: env('CF_ACCESS_SECRET'), // Double-check if your env matches this name
          },
          region: 'auto',
          endpoint: env('CF_ENDPOINT'),
          forcePathStyle: true,
        },
        params: {
          Bucket: env('CF_BUCKET'),
        },
      },
      // ADD THIS SECTION BELOW
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      // THIS IS THE MISSING KEY:
      // It ensures the API returns the public URL so the frontend can see the images
      settings: {
baseUrl: 'https://media.gheraltatours.com',      },
    },
  },
});