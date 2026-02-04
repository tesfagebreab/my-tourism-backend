module.exports = ({ env }) => ({
  // FIX 1: Add the users-permissions block
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'aws-s3', // Use the standard name
      providerOptions: {
        // FIX 2: Wrap credentials/region/endpoint inside s3Options
        s3Options: {
          credentials: {
            accessKeyId: env('CF_ACCESS_KEY_ID'),
            secretAccessKey: env('CF_ACCESS_SECRET'),
          },
          region: 'auto',
          endpoint: env('CF_ENDPOINT'),
          forcePathStyle: true,
        },
        params: {
          Bucket: env('CF_BUCKET'),
        },
      },
      // This ensures your images use your public R2 domain
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});