import React, { Fragment, useState } from "react";

import classes from "./Dice.module.css";

const Dice = (props) => {
  const [classesSet, setClassesSet] = useState(classes.dice);

  const clickHandler = () => {
    setClassesSet(`${classes.dice} ${classes.dice_rolling}`);
    const myTimeout = setTimeout(function () {
      setClassesSet(classes.dice);
    }, 500);

    props.onClick();
  };

  return (
    <Fragment>
      <button className={classesSet} onClick={clickHandler}>
        {props.children}
      </button>
    </Fragment>
  );
};

export default Dice;
