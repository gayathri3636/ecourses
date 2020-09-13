import React from 'react'

export default function Register(props) {
    return (
        <div>
            <h1>I am from Register</h1>
            <button onClick = {() =>props.history.push("/login")}>Go to login</button>
        </div>
    )
}
