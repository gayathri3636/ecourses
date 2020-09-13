import React, { useState } from "react";
import './AddCourse.scss';

export default function AddCourse(props) {
  const [details, setdetails] = useState({
    courseName:"",
    description:""
  })
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log("details", details)
      const body = {
        query: `mutation{
          addCourse(course:{courseName:"${details.courseName}" , description:"${details.description}"}){
            courseName
            description
          }
        }`,
      };
  
      console.log("det", body.toString());
  
      try {
        const data = await fetch("http://localhost:5000/api/", {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
        console.log("data", data);
      } catch (error) {
        console.log(error);
      }
        props.history.push("/catalog")
    }



  return (
    <div className="display">
      <div className="form">
        <form>
          <h3 className = "heading">Add Course</h3>
          <label className="displayLable">
            <span className="spanWidth"> courseName:</span>
            <input
              className="displayInput"
              type="text"
              id="courseName"
              name="courseName"
              onChange={(e) =>
                setdetails({ ...details, courseName: e.target.value })
              }
            />
          </label>
<br />
          <label className="displayLable">
            <span className="spanWidth"> Description:</span>
            <input
              className="displayInput"
              type="text"
              id="description"
              name="description"
              onChange={(e) =>
                setdetails({ ...details, description: e.target.value })
              }
            />
          </label>
<br />
          <button onClick={handleSubmit}  className="button">
            Add Course
          </button>
          <div className="buttonRight"></div>
        </form>
      </div>
    </div>
  );
}