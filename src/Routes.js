import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./Components/Header"
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import AddCourse from './Components/AddCourse';
import SideBar from './Components/SideBar';

export default function Routes() {
    return (
        <Router>
            <Header/>
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/forgotpassword" component = {ForgotPassword} />
            <Route exact path = "/Sidebar" component = {SideBar} />
            <Route exact path = "/Addcourse" component = {AddCourse} />
        </Router>
    )
}
