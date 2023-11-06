const express = require("express")
const router = new express.Router()
const AtheletsRankings = require("../../src/models/athletes")
//  post request route
router.post("/api/addmens", async (req,res)=>{
    try {
        console.log(req.body)
        const addingMensRanking = new AtheletsRankings(req.body)
       const insertMens  = await  addingMensRanking.save()
       res.status(201).json({status:true,message:"new record added",data:insertMens})
    } catch (error) {
        res.status(400).send(error)
    }
})
//get request route
router.get("/api/mens", async (req,res)=>{
    try {
       const getMens  = await  AtheletsRankings.find({}).sort({"ranking":1})
       res.status(201).json({ success: true, data: getMens })
    } catch (error) {
        res.status(400).send(error)
    }
})
//id get route
router.get("/api/mens/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const getMens  = await  AtheletsRankings.findById(_id)
       res.status(201).send(getMens)
    } catch (error) {
        res.status(400).send(error)
    }
})
//update request route
router.patch("/api/mens/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const getMensUpdated  = await  AtheletsRankings.findByIdAndUpdate(_id,req.body,{
        new : true  
       })
       res.json({success:true,message:"record updated",data:getMensUpdated})
    } catch (error) {
        res.status(500).send(error)
    }
})
//delete request route
router.delete("api/mens/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const getMens  = await  AtheletsRankings.findByIdAndDelete(_id)
       res.json({success:true,message:"record deleted"})
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router