import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
           <Link to = "/login">Login</Link>
           <Link to = "/register">Register</Link>  
           <Link to="/Addcourse">AddCourse</Link>
           <Link to = "/catalog">Catalog</Link>
        </div>
    )
}
