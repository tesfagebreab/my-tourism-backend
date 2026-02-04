const Strapi = require('@strapi/strapi');

async function fixProvider() {
  // Initialize Strapi instance
  const app = await Strapi.compile();
  const strapi = await Strapi(app).load();

  console.log('🚀 Starting database update for Gheralta Media...');

  // 1. Count how many files are "lost" (not using aws-s3)
  const filesToFix = await strapi.db.query('plugin::upload.file').count({
    where: {
      provider: {
        $ne: 'aws-s3', // $ne means "not equal"
      },
    },
  });

  console.log(`🔎 Found ${filesToFix} images with the wrong provider tag.`);

  if (filesToFix === 0) {
    console.log('✅ All images are already set to aws-s3. Nothing to do!');
    process.exit(0);
  }

  // 2. Update all of them to 'aws-s3'
  const updateResult = await strapi.db.query('plugin::upload.file').updateMany({
    where: {
      provider: {
        $ne: 'aws-s3',
      },
    },
    data: {
      provider: 'aws-s3',
    },
  });

  console.log(`✅ SUCCESS! Updated ${updateResult.count} images to "aws-s3".`);
  console.log('✨ Your Media Library should now be fully restored.');

  // Stop Strapi to release the database lock
  strapi.stop();
  process.exit(0);
}

fixProvider().catch((err) => {
  console.error('❌ Error updating database:', err);
  process.exit(1);
});