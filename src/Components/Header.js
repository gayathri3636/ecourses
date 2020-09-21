import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='login'>
        <Link className='catalog' to='/login'>
          Login
        </Link>
        <Link to='/register'>Register</Link>
        <Link className='contact' to='/contact'>
          Contact
        </Link>
      </div>

      <div className='course'>
        <Link className='addcourse' to='/Addcourse'>
          AddCourse
        </Link>
        <Link to='/catalog'>Catalog</Link>
        <Link className='addcoursecontent' to='/addcoursecontent'>
          AddCourseContent
        </Link>
      </div>
    </div>
  );
}
