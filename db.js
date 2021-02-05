var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blogspot",function(){
  console.log("MongoDB connected");
});

module.exports = mongoose;
