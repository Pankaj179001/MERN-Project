const express=require("express")
const { default: mongoose } = require("mongoose")
const foodItems=express.Router()
const foodModel=require("../Models/food_item")
const foodcategory=require("../Models/foodCategory")

foodItems.get("/foodItems",async (req,res)=>{
 const foodItems=await foodModel.find({}).catch((err)=>console.log(err))
 const foodcategories=await foodcategory.find({}).catch((err)=>console.log(err))
  res.send([foodItems,foodcategories])
})


 

module.exports=foodItems 