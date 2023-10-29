const express = require("express")
const router = new express.Router()
const AtheletsRankings = require("../../src/models/athletes")
//  post request route
router.post("/mens", async (req,res)=>{
    try {
        console.log(req.body)
        const addingMensRanking = new AtheletsRankings(req.body)
       const insertMens  = await  addingMensRanking.save()
       res.status(201).send(insertMens)
    } catch (error) {
        res.status(400).send(error)
    }
})
//get request route
router.get("/mens", async (req,res)=>{
    try {
       const getMens  = await  AtheletsRankings.find({}).sort({"ranking":1})
       res.status(201).send(getMens)
    } catch (error) {
        res.status(400).send(error)
    }
})
//id get route
router.get("/mens/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const getMens  = await  AtheletsRankings.findById(_id)
       res.status(201).send(getMens)
    } catch (error) {
        res.status(400).send(error)
    }
})
//update request route
router.patch("/mens/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const getMens  = await  AtheletsRankings.findByIdAndUpdate(_id,req.body,{
        new : true  
       })
       res.send(getMens)
    } catch (error) {
        res.status(500).send(error)
    }
})
//delete request route
router.delete("/mens/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const getMens  = await  AtheletsRankings.findByIdAndDelete(_id)
       res.send(getMens)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router