import React, { Fragment, useState } from "react";
import Dice from "../UI/Dice";

const Board = () => {
  const [throwResult, setThrowResult] = useState(6);

  const throwHandler = (props) => {
    let url = "https://dicethrowerapp.herokuapp.com/roll/d6";
    // let url = "http://localhost:8080/roll/d6";

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
      <Dice onClick={throwHandler}>{throwResult}</Dice>
    </Fragment>
  );
};

export default Board;
