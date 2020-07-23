import React from "react";
import "./TypeList.css";

const TypeList = (props) => {
  return (
    <div className="jumbotron">
      {props.types.map((type) => (
        <div className="label" key={type.id}>
          {type.name}
        </div>
      ))}
    </div>
  );
};

export default TypeList;
