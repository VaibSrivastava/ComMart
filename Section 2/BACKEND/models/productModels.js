//title
//description
//price
//category
//image
const {model, Schema} = require('../conection');
const myschema = new Schema({
    title: String,
    description: String,
    price: Number,
    category: String,
    image: String
  });
  
  module.exports= model('products', myschema);