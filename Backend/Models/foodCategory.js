const { default: mongoose } = require("mongoose");
mongoose.pluralize(null);
const foodCategory=new mongoose.Schema({
    CategoryName:{type:String}
  })
  module.exports=mongoose.model( "food_category",foodCategory)