import React from "react";
import "./Testimonies.css";
import { list_Testymonies } from "./list_Testymonies";

const Testimonies = () => {
  return (
    <div className="Testimonies">
      <h1>Avis de Nos Patients</h1>
      <div className="testimonies_list">
        {list_Testymonies.map((testimony, index) => (
          <div key={index}>
            <p>{testimony.testymony_txt}</p>
            <h2>{testimony.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
