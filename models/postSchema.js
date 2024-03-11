const { types, required, ref } = require("joi");
const mongoose = require("mongoose");



const postSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    payload:{
        type:String,
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})


module.exports = mongoose.model("post", postSchema);
