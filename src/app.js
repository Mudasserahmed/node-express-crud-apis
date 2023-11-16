const express = require("express")
require("../src/db/conn")
// const AtheletsRankings = require("../src/models/athletes")
const Atheletesrouter = require("./routers/mens")
const Coachesrouter = require("./routers/coaches")
const morgan = require("morgan")
const app = express()
const port = process.env.PORT || 3000


app.use(morgan("dev"))
//middelware logic
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString()
    next();
})

app.use(express.json())
app.use(Atheletesrouter)
app.use(Coachesrouter)

app.listen(port ,()=>{
    console.log(` app listening at  ${port}`)
})