const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to your database
const dbPath = path.resolve(__dirname, '../.tmp/data.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  console.log('🔗 Connecting to Gheralta Database...');
  
  db.run("UPDATE files SET provider = 'aws-s3' WHERE provider != 'aws-s3'", function(err) {
    if (err) {
      return console.error('❌ Error:', err.message);
    }
    console.log(`✅ Success! Updated ${this.changes} images to use the new R2 provider.`);
  });
});

db.close();