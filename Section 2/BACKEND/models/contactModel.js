const {model, Schema} = require('../conection');

const myschema = new Schema({
    subject: String,
    name: String,
    email: String,
    phone: Number,
    message: String
  });
  
  module.exports= model('contact', myschema);