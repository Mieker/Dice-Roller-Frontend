import React, { Fragment, useState } from "react";
import Dice from "../UI/Dice";

const Board = () => {
  const [throwResult, setThrowResult] = useState(6);

  const throwHandler = (props) => {
    fetch("https://dicethrowerapp.herokuapp.com/roll/d6")
      .then((response) => response.json())
      .then((data) => setThrowResult(data.throw));
  };

  return (
    <Fragment>
      <Dice onClick={throwHandler}>{throwResult}</Dice>
    </Fragment>
  );
};

export default Board;