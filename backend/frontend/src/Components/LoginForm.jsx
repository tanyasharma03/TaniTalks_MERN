import React from 'react';
import { useState} from 'react';
import { useHistory } from 'react-router';

const LoginForm = () => {

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
        }else{
            window.alert("Logged In successfully");
            history.push(" https://tanitalks.herokuapp.com/");

        }
    }

    return (
        <div>
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
    )
}

export default LoginForm
