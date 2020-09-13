import React, { useState } from "react";

export default function AddCourse(props) {
    const handleSubmit = () => {
        props.history.push("/Sidebar")
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
            //   onChange={(e) =>
            //     setdetails({ ...details, courseName: e.target.value })
            //   }
            />
          </label>

          <label className="displayLable">
            <span className="spanWidth"> desc</span>
            <input
              className="displayInput"
              type="text"
              id="description"
              name="description"
            //   onChange={(e) =>
            //     setdetails({ ...details, description: e.target.value })
            //   }
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