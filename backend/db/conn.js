const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(() =>{
    console.log("Database connected successfully");
  }).catch((err) => console.log("Oops, failed to connect the database"));