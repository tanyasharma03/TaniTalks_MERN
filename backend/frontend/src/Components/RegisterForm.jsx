import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const RegisterForm = () => {

     const history = useHistory();
      
     const[user,setUser]= useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""});

     let name, value;
     const handleInputs= (data) =>{
           name= data.target.name;
           value=data.target.value;

           setUser({...user, [name]:value});
     }

     const postData = async (event) =>{
          event.preventDefault();
          const {name, email, phone, work, password, cpassword} = user;

          const res = await fetch('/register', {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body:JSON.stringify({
                   name:name,
                   email:email,
                   phone:phone,
                   work:work,
                   password:password,
                   cpassword:cpassword
               })
          });

          const data = await res.json();

          if(res.status === 422 || !data){
               window.alert("OOps, registration failed. Try again");
               console.log("Invalid registration");
          } else{
               window.alert("User Registered successfully");
               console.log("User Registered successfully");

               history.push("/signin")
          }
     }

    return (
        <div>
            <form method="POST" className="register-form" id="register-form">

                <div className="form-group">
                   <label htmlFor="name"><i class="zmdi zmdi-account"></i></label>
                    <input type="text" name="name" id="name" autoComplete="off" value={user.name}
                         onChange={handleInputs}   placeholder="Your name"></input>
              </div>
              <div className="form-group">
                   <label htmlFor="email"><i class="zmdi zmdi-email"></i></label>
                   <input type="text" name="email" id="email" autoComplete="off" value={user.email}
                        onChange={handleInputs}  placeholder="Your Email"></input>
              </div>
              <div className="form-group">
                   <label htmlFor="phone"><i class="zmdi zmdi-phone-in-talk"></i></label>
                   <input type="text" name="phone" id="phone" autoComplete="off" value={user.phone}
                   onChange={handleInputs} maxLength="10"  placeholder="Phone Number"></input>
              </div>
              <div className="form-group">
                   <label htmlFor="work"><i class="zmdi zmdi-calendar-alt"></i></label>
                   <input type="text" name="work" id="work" autoComplete="off" value={user.work}
                        onChange={handleInputs}  placeholder="Your Profession"></input>
              </div>
              <div className="form-group">
                   <label htmlFor="password"><i class="zmdi zmdi-lock"></i></label>
                   <input type="password" name="password" id="password" autoComplete="off" value={user.password}
                        onChange={handleInputs}  placeholder="Password"></input>
              </div>
              <div className="form-group">
                   <label htmlFor="cpassword"><i class="zmdi zmdi-lock-outline"></i></label>
                   <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword}
                        onChange={handleInputs}  placeholder="Confirm Password"></input>
              </div>
             <div className="form-group form-button" style={{border:"none"}}>
                   <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={postData}></input>
             </div>
         </form>
  </div>
    )
}

export default RegisterForm
