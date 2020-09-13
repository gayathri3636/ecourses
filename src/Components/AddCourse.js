import React, { useState } from "react";

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
    <div className="displayBlock">
      <div className="formLayout">
        <form>
          <h3>Add Course</h3>
          <p>Let us the know the course details</p>
          <label className="displayLable">
            <span className="spanWidth"> course</span>
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

          <label className="displayLable">
            <span className="spanWidth"> desc</span>
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

          <button onClick={handleSubmit} className="button">
            submit
          </button>
          <div className="buttonRight"></div>
        </form>
      </div>
    </div>
  );
}