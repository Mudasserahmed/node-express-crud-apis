const express = require("express")
require("../src/db/conn")
const AtheletsRankings = require("../src/models/athletes")
const router = require("./routers/mens")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.listen(port ,()=>{
    console.log(` app listening at  ${port}`)
})