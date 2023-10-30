const express = require("express")
require("../src/db/conn")
// const AtheletsRankings = require("../src/models/athletes")
const Atheletesrouter = require("./routers/mens")
const Coachesrouter = require("./routers/coaches")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(Atheletesrouter)
app.use(Coachesrouter)

app.listen(port ,()=>{
    console.log(` app listening at  ${port}`)
})