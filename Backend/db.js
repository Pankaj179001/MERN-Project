const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1/gofoodmern";
mongoose.set('strictQuery', false);
const mongoDb = mongoose.connect(url, (err, result) => {
  err?console.log( "database err----",err): console.log("database connected");
}); 

module.exports = mongoDb;
