import React, { Fragment } from "react";
import Dice from "../UI/Dice";

import d20img from "../UI/DiceSVG/d20.svg";
import d12img from "../UI/DiceSVG/d12.svg";
import d10img from "../UI/DiceSVG/d10.svg";
import d8img from "../UI/DiceSVG/d8.svg";
import d6img from "../UI/DiceSVG/d6.svg";
import d4img from "../UI/DiceSVG/d4.svg";

const Board = () => {
  return (
    <Fragment>
      <Dice diceValue={20} diceImg={d20img} />
      <Dice diceValue={12} diceImg={d12img} />
      <Dice diceValue={10} diceImg={d10img} />
      <Dice diceValue={8} diceImg={d8img} />
      <Dice diceValue={6} diceImg={d6img} />
      <Dice diceValue={4} diceImg={d4img} />
    </Fragment>
  );
};

export default Board;
