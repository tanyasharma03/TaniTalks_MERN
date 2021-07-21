import React, { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom';
import "../App.css";

import { UserContext } from './App';


const Navbar = () => {

      const {state, dispatch} = useContext(UserContext);
 
      const MenuBar = () =>{
            if(state){
                  return (
                        <>
                             <li className="nav-item">
                                   <NavLink className="nav-link" id="nav-link" to="/">Home</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink className="nav-link"  id="nav-link" to="/about">About</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink className="nav-link"  id="nav-link" to="/contact">Contact</NavLink>
                              </li>
                              <li className="nav-item">
                              <NavLink className="nav-link"  id="nav-link" to="/logout">Logout</NavLink>
                              </li>
                       </>
                  )
            } else {
                  return (
                        <>
                            <li className="nav-item">
                                   <NavLink className="nav-link" id="nav-link" to="/">Home</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink className="nav-link"  id="nav-link" to="/about">About</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink className="nav-link"  id="nav-link" to="/contact">Contact</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink className="nav-link"  id="nav-link" to="/signin">Login</NavLink>
                              </li>
                              <li className="nav-item">
                                    <NavLink className="nav-link"  id="nav-link" to="/signup">Register</NavLink>
                              </li>
                        </>
                  )
            }
       }

       

    return (
        <>
         <div className="container-fluid navbar-style">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
               <NavLink className="navbar-brand" to="/"><p className="logo" style={{marginBottom:"0"}}>TaniTalks</p></NavLink>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav ms-auto" style={{fontSize:"15px"}}>
                              
                              <MenuBar />
                              
                              </ul>
               </div>
         </nav>
         </div>
        </>
    )
}


export default Navbar
