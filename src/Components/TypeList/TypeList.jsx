import React from "react";
// import "./TypeList.css";
import classes from "./TypeList.module.css";

const TypeList = (props) => {
  return (
    <div className={classes.Jumbotron}>
      {props.types.map((type) => (
        <div className={classes.Label} key={type.id}>
          {type.name}
        </div>
      ))}
    </div>
  );
};

export default TypeList;
