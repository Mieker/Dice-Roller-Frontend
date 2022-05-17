import React, { Fragment, useState } from "react";

import classes from "./Dice.module.css";

const Dice = (props) => {
  const [classesSet, setClassesSet] = useState(classes.dice);
  const [throwResult, setThrowResult] = useState(props.diceValue);
  

  const clickHandler = () => {
    setClassesSet(`${classes.dice} ${classes.dice_rolling}`);
    const myTimeout = setTimeout(function () {
      setClassesSet(classes.dice);
    }, 500);

    let url = "https://dicethrowerapp.herokuapp.com/roll/d" + props.diceValue;
    // let url = "http://localhost:8080/roll/d" + props.diceValue;

    console.log(url)
    fetch(url, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setThrowResult(data.throw);
      });
  };

  return (
    <Fragment>
      <div
        className={classesSet}
        onClick={clickHandler}
        role="button"
        tabIndex="0"
        diceValue={props.diceValue}
      >
        <img src={props.diceImg} alt="dnd dice" />
        <p>{throwResult}</p>
      </div>
    </Fragment>
  );
};

export default Dice;
