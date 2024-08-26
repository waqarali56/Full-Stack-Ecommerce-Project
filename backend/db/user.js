const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});


module.exports=mongoose.model("users",userSchema);



// // Use a valid collection name, like 'users'
// const User = mongoose.model('User', userSchema, 'users');

// module.exports = User;