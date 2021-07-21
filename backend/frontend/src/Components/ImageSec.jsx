import React from 'react';
import { NavLink } from 'react-router-dom';


const ImageSec = (props) => {
    return (
        <div>
            <div className="signup-image">
                                  <figure>
                                     <img src={props.img} alt="Register" />
                                  </figure>   
                                  <NavLink to={props.to} className="signup-image-link">{props.message}</NavLink>                           
                              </div>
        </div>
    )
}

export default ImageSec
