const express = require("express")
const mongoose = require("mongoose")

const AthletesSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    }
})

//creating a new collection
const AtheletsRankings = new mongoose.model("Mens Ranking",AthletesSchema)
module.exports = AtheletsRankings