import React, { useContext } from 'react';
import signpic from "../Images/login.png";
import "bootstrap/dist/css/bootstrap.css";
import ImageSec from './ImageSec';
import { useState} from 'react';
import { useHistory } from 'react-router';
import "../App.css";

import { UserContext } from './App';

const Login = () => {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (event) =>{
        event.preventDefault();

        const res = await fetch('/signin',{
            method: "POST",
            headers:{
                "Content-Type" :"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        });

        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid credentials, fill the fields or please make sure your registered");
            setEmail("");
            setPassword("");
        } else {
            dispatch({type:"USER", payload:true})
            window.alert("Logged In successfully");
            history.push("/");

        }
    }



    return (
        <div>
           <section>
               <div className="container-fluid mt-5 mb-5">
                   <div className="signin-content">
                     <div className="row">
                         <div className="col-lg-6 col-md-6 col-12 mx-auto">
                              <ImageSec img={signpic} message="Create new account" to="/Signup"/>
                         </div>

                         <div className="col-lg-6 col-md-6 col-12 mx-auto">
                             <div className="signup-form">
                             <h2 className="form-title" style={{fontWeight:700,fontSize:"25px"}}> Login</h2>
                             <form method="POST" className="login-form" id="login-form">

              <div className="form-group">
                  <label htmlFor="name"><i class="zmdi zmdi-account"></i></label>
                   <input type="text" name="name" id="name" autoComplete="off"
                   placeholder="Your Email" onChange={(eve) => setEmail(eve.target.value) } value={email} ></input>
              </div>
              <div className="form-group">
                   <label htmlFor="password"><i class="zmdi zmdi-lock"></i></label>
                   <input type="password" name="password" id="password" autoComplete="off"
                   placeholder="Password" onChange={(eve) => setPassword(eve.target.value) } value={password}></input>
              </div>
              <div className="form-group form-button" style={{border:"none"}}>
                   <input type="submit" name="signin" id="signin" className="form-submit" value="Log In" onClick={loginUser}></input>
             </div>

            </form>
                             </div>
                         </div>
                     </div>
                   </div>
               </div>
           </section>
        </div>
    )
}

export default Login
