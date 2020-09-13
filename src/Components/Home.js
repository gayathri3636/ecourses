import React from "react";
import display from "../images/learn.jpg";
import "./Home.scss";
export default function Home() {
  return (
    <div className="Home">
      <img src={display} className="display" alt="Display" />
    </div>
  );
}