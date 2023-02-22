const mongoose = require("mongoose");
const FoodSchema = new mongoose.Schema({
  CategoryName: { type: String, required: true },
  name: { type: String, required: true },
  img: { data: Buffer,contentType: String },
  options: { type: Array},
  description: { type:String },
});
module.exports = mongoose.model("food_items", FoodSchema)
