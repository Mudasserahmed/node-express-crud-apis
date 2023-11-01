const  express = require("express")
const coachesModel = require("../../src/models/coaches")
const router = new express.Router()

router.post("api/addcoach" ,async (req,res)=>{
  try {
    console.log(req.body)
    const addingNewCoach = new coachesModel(req.body)
    const insertcoach = await addingNewCoach.save()
    res.status(201).json({status:true,message:"new Coach added",data:insertcoach})
  } catch (error) {
    res.status(500).send(error)
  }
})
router.get("api/getallcoaches" , async (req,res)=>{
    try {
      const getcoaches = await coachesModel.find({})
      res.status(201).json({status:true,data:getcoaches})
    } catch (error) {
      res.status(500).send(error)
    }
  })
  router.patch("api/updatecoach/:id", async (req,res)=>{
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

router.delete("api/deletecoach/:id",async (req,res)=>{
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