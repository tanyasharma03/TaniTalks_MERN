import React, { createContext, useReducer } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Error from './Error';
import Logout from "./Logout";
import "../App.css";
import { initialState, reducer } from '../Reducer/useReducer';


export const UserContext = createContext();

    const Routing = () =>{
        return (
            <Switch>
                  <Route path="/" exact > <Home /> </Route>
                  <Route path="/signin"> <Login /> </Route>
                  <Route path="/about"> <About /> </Route>
                  <Route path="/contact"> <Contact /> </Route>
                  <Route path="/signup"> <Register /> </Route>
                  <Route path="/logout" ><Logout /></Route>
                  <Route> <Error /></Route>
             </Switch>
        )
    }


const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        
        <>
        <UserContext.Provider value={{state,dispatch}}>
            <Navbar />
            <Routing />
        </UserContext.Provider>
            
        </>
    )
}

export default App
