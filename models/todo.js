var mongoose = require("mongoose");
//Schema Setup
var todoSchema = new mongoose.Schema({
   name : String
});
var Todo = mongoose.model("Todo", todoSchema);
// below line use to return value
module.exports = Todo;