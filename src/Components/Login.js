import React from 'react'

export default function Login(props) {
    return (
        <div>
            <h1>I am from login</h1>
            <button onClick = {() =>props.history.push("/register")}>Go to register</button>
        </div>
    )
}
