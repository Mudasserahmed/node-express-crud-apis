const  express = require("express")
const coachesModel = require("../../src/models/coaches")
const router = new express.Router()

router.post("/api/addcoaches" ,async (req,res)=>{
  try {
    console.log(req.body)
    const addingNewCoach = new coachesModel(req.body)
    const insertcoach = await addingNewCoach.save()
    res.status(201).json({status:true,message:"new Coach added",data:insertcoach})
  } catch (error) {
    res.status(500).send(error)
  }
})
router.get("/api/coaches" , async (req,res)=>{
    try {
      const getCoaches = await coachesModel.find({})
      res.status(201).json({status:true,results:getCoaches.length,data:getCoaches})
    } catch (error) {
      res.status(500).send(error)
    }
  })
  router.patch("/api/coach/:id", async (req,res)=>{
    try {
        const _id = req.params.id;
       const updatecoach  = await  coachesModel.findByIdAndUpdate(_id,req.body,{
        new : true  
       })
       res.json({success:true,message:"record updated",data:updatecoach})
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete("/api/coach/:id",async (req,res)=>{
    try {
        const _id = req.params.id
        const deletecoach = await coachesModel.findByIdAndDelete(_id,req.body,{
            new:true
        })
        res.json({succes:true , message:"record deleted",data:deletecoach})
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router