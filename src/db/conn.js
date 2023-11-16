const mongoose = require('mongoose');
const dotenv = require("dotenv")
//config read
dotenv.config({path:"./config.env"})

mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true 
}).then(() => {
    console.log("Connection successful");
}).catch((error) => {
    console.error("Connection failed: " + error);
});
