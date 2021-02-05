var db = require("../db");

var schema = new db.Schema({
    title: {type: String, require: true},
    content: {type: String, require: true},
  },
  {
    timestamps: true
  });

var Blog = db.model("Blog", schema);

module.exports = Blog;