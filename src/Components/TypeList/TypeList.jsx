import React from "react";

const TypeList = (props) => {
  return (
    <div>
      {props.types.map((type) => (
        <div>{type.name}</div>
      ))}
    </div>
  );
};

export default TypeList;
