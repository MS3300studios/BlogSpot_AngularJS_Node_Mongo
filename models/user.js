var db = require("../db");

var schema = new db.Schema({
    name: {type: String, require: true},
    surname: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, required:true, select: false}
  },
  {
    timestamps: true
  });

var User = db.model("User", schema);

module.exports = User;