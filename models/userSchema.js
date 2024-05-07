const mongoose = require("mongoose");
const Joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const JoiPassword = Joi.extend(joiPasswordExtendCore);

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    personalImage:{
      type:String
    },
    bio:{
      type:String
    },
    conutry:{
      type:String
    },
    jobTitle:{
      type:String
    },
    location:{
      type:String
    },
    relationahip:{
      type:String
    },
    education:{
      type:String
    },

  },
  { timestamps: true }
);



module.exports = mongoose.model("user", userSchema);
