const mongoose = require('mongoose');
const config = require('config');
//const db = config.get('mongoURI');
const db = 'mongodb+srv://NatalyPren:pren2022@cluster0.sv28uvd.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
    console.log(db);
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });
    console.log('MongoDB connected ...');
  } catch (error) {
    console.log('Something wrong with the connect to DB');
  }
};

module.exports = connectDB;
