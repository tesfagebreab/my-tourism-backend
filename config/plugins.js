module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('CF_ACCESS_KEY_ID'),
          secretAccessKey: env('CF_ACCESS_SECRET'),
        },
        region: 'auto',
        // R2 endpoints should not have the bucket name in them for the SDK
        endpoint: env('CF_ENDPOINT'), 
        params: {
          Bucket: env('CF_BUCKET'),
        },
        s3ForcePathStyle: true,
        // This is the key that tells Strapi "Don't use localhost, use my domain"
        baseUrl: env('CF_PUBLIC_ACCESS_URL', 'https://media.gheraltatours.com'),
      },
    },
  },
});