import React from 'react';
import './ForgotPassword.scss'

export default function ForgotPassword(props) {
    return (
        <div className = "divform">
            <h1 className = "headingform">Please reset your password</h1>
            <button className = "buttonform" onClick = {() => props.history.push("/login")}>Go to login page</button>
        </div>
    )
}
