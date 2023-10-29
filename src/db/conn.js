const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/testing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true 
}).then(() => {
    console.log("Connection successful");
}).catch((error) => {
    console.error("Connection failed: " + error);
});
