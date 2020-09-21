import React, { useState } from 'react';
import { Input } from 'antd';
import './AddCourseContent.scss';

const { TextArea } = Input;

export default function AddCourseContent(props) {
  const [courseContents, SetCourseContents] = useState('');
  const [coursetitle, SetCourseTitle] = useState('');

  const handleaddContent = async (e) => {
    e.preventDefault();
    const body = {
      query: `mutation{
            addCourseContent(content:{courseContent: "${courseContents}", title:"${coursetitle}"}){
              courseContent
            }
          }`,
    };

    try {
      const data = await fetch('http://localhost:5000/api/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('data', data);
    } catch (error) {
      console.log(error);
    }
    props.history.push('/catalog');
  };
  return (
    <div>
      <input
        type='text'
        value={coursetitle}
        onChange={(e) => SetCourseTitle(e.target.value)}
      />
      <TextArea
        className='cont'
        onChange={(e) => {
          console.log('state', e.target.value);
          SetCourseContents(e.target.value);
        }}
        rows={8}
        placeholder='Enter course content'
      />
      <button onClick={handleaddContent} type='submit' className='addbuttons'>
        AddCourseContent
      </button>
    </div>
  );
}
