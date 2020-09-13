import React from 'react'

export default function ForgotPassword(props) {
    return (
        <div>
            <h1>Please reset your password</h1>
            <button onClick = {() => props.history.push("/login")}>Go to login page</button>
        </div>
    )
}
