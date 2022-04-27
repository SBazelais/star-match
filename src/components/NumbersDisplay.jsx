import utils from "../utils";

import { PlayNumber } from './PlayNumber'

export const NumbersDisplay = ()=> (
  utils.range(1, 9).map((number) => (
            <PlayNumber key={number}  number={number}/>
          ))
)