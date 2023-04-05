const mongoose = require('mongoose');

const {
  DB_URL= 'mongodb://127.0.0.1:27017/test'
} = process.env;

console.log('DB_URL', DB_URL);

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect(DB_URL);
  console.log('DB Connected');
  } catch (err) {
    console.log(err)
  }
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}