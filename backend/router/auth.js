const { json } = require("express");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

// router.get('/', (req,res) =>{
//     res.send("Hello from  router");
// });

router.post(' https://tanitalks.herokuapp.com/register',async (req,res) => {
    const {name, email, phone, work, password, cpassword} = req.body;

    //checking validation (all entries are fulfilled or not)
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        res.status(422).json({error:"Please fill the details correctly"});
    }

    try {
        //If user already exist
        const userExist= await User.findOne({email: email});

        if(userExist){
            return res.status(422).json({error: "Email alreday in use"});
        }

        //if user doesn't exist, create new instance
        const user= new User({name, email, phone, work, password, cpassword});

        //save user to the collection
        await user.save();

        res.status(201).json({message: "User successfully registered"});

    } catch (err) {
        console.log(err);
    }
});

router.post(' https://tanitalks.herokuapp.com/signin', async(req,res) =>{

    try {
        const{email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please fill the blank fields"});
        }

        const userLogin= await User.findOne({email:email});

        if(userLogin){
            
            const isMatch = await bcrypt.compare(password, userLogin.password);

              const token = await userLogin.generateAuthToken();
              console.log(token)

              res.cookie("jwttoken",token,{
                  expires: new Date(Date.now() + 25892000000),
                  sameSite: true,
                  httpOnly:true
              });

            if(!isMatch){
                res.status(400).json({error:"Invalid password"});
            }else{
            res.json({message:"Logged In successfully"});
        }}
         else{
            res.status(400).json({error:"Invalid Credentials"});
        }
        



    } catch (error) {
        console.log(error)
    }
   
});
 
//----ABOUT AUTHENTICATION-----////

router.get(" https://tanitalks.herokuapp.com/about",authenticate, (req,res)=> {
    res.send(req.userPresent);
  });
  
  
//-----LOGOUT----////
router.get(" https://tanitalks.herokuapp.com/logout",(req,res)=> {
    console.log("Logged Out");
    res.clearCookie("jwttoken",{path:"/"});
    res.status(200).send(req.userPresent);
  });

//------Getting data for contact and home page------//
router.get(" https://tanitalks.herokuapp.com/getData",authenticate,(req,res) =>{
    res.send(req.userPresent);
});


router.post(" https://tanitalks.herokuapp.com/contact",authenticate, async (req,res)=> {
    try {
       const {name,phone,email,message}= req.body;

       if(!name || !phone || !email || !message){
           console.log("Empty data fields");
           return res.json({error:"Please fill the data correctly"});
       }

       const userDetail = await User.findOne({_id:req.userID});

       if(userDetail){
           const UserMessage = await userDetail.addMessage(name,email,phone,message);

           await userDetail.save();
           res.status(201).json({message:"message sent successfully"});
       }
    } catch (error) {
        console.log(error)
    }
  });
module.exports = router;
