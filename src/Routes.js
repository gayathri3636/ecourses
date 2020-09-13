import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./Components/Header"
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword'

export default function Routes() {
    return (
        <Router>
            <Header/>
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/forgotpassword" component = {ForgotPassword} />
        </Router>
    )
}
