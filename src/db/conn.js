const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
console.log(process.env.DATABASE_LOCAL)
mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true 
}).then(() => {
    console.log("Connection successful");
}).catch((error) => {
    console.error("Connection failed: " + error);
});
