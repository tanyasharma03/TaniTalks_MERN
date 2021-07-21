const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser =require('cookie-Parser');


const app = express();

dotenv.config({path:'./config.env'});

app.use(cookieParser()) ;

//------ DATABASE CONNECTION -------//
require('./db/conn');


const PORT = process.env.PORT || 5000;

app.use(express.json());


//-----Linking the router files---///
app.use(require('./router/auth'));



//----- ROUTES ----//
app.get("/", (req,res)=> {
  res.send("Hello World from Home Page");
});

// app.get("/about", (req,res)=> {
//     res.send("Hello World from About Page");
//   });

// app.get("/contact", (req,res)=> {
//   res.send("Hello World from Contact Page");
// });

app.get("/signin", (req,res)=> {
    res.send("Hello World from Login  Page");
  });

app.get("/signup", (req,res)=> {
    res.send("Hello World from Register Page");
  });

 if(process.env.NODE_ENV === "production"){
   app.use(express.static("frontend/build"));
 }


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});

