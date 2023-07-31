import React from "react";
import serviceData from "./serviceData";
import "./services.css";

export default function Services() {
  return (
    <div id="services">
      <h1 className="serviceH1">Services</h1>
      <div className="setbox">
      

      {serviceData.map((newData) => {
        return (
          <main className="main">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h4>{newData.title}</h4>
              <hr />
            </div>
            <div>
              <p>{newData.detail}</p>
            </div>
          </main>
        );
      })}
      </div>
    </div>
  );
}
