const express = require("express")
const mongoose = require("mongoose")

const CoachesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true,
        unique:false
    },
    age:{
        type:Number,
        required:true,
    },
})
const Coaches = new mongoose.model("Coaches",CoachesSchema)
module.exports = Coaches