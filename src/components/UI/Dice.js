import React, { Fragment } from "react";

import classes from "./Dice.module.css";

const Dice = (props) => {
  return (
    <Fragment>
      <button className={classes.dice} onClick={props.onClick}>
        {props.children}
      </button>
    </Fragment>
  );
};

export default Dice;
