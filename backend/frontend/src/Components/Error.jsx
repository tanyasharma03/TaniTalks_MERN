import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
           <div id="not-found">
               <div className="not-found">
                   <div className="not-found-404">
                     <h1>404</h1>
                   </div>
                   <h2>Error 404, page not found</h2>
                   <p className="mb-5">We are sorry. The page you are looking for might have been removed
                   , changed it's name or is temporarily unavailable.</p>
                   <NavLink className="error-back-btn" to="/">Back To Home</NavLink>
               </div>
            </div> 
        </>
    )
}

export default Error
