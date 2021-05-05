import React, { useContext } from 'react'
import "./customsheet.css"
import Nav from './Nav/Nav'
import Home from "./Home/Home"
import { Route, Switch } from "react-router-dom"
import { UserContext } from '../App2'


export default function MainComponent() {
    const context = useContext(UserContext)
    const handleScroll =(event) =>{
        context.dispatch({type:'scroll', value: event.target.scrollTop})
    }
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/">
                    <div    style={{width:"99vw",overflowY:"scroll", height:"94vh"}}
                            onScroll={(event)=> handleScroll(event)} >
                    <Home />
                 </div>
                </Route>
            </Switch>
        </div>
    )
}
