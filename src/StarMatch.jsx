import "./styles.css";
import utils from "./utils";

import { useState } from "react";
import {StarsDisplay} from './components/StarsDisplay'
import { NumbersDisplay } from './components/NumbersDisplay'

export default function StarMatch() {
  const [stars, setStars] = useState(utils.random(1, 9));

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay  stars={stars}/>
        </div>
        <div className="right">
            <NumbersDisplay />
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
}
