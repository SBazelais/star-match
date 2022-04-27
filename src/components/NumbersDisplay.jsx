import utils from "../utils";

import { PlayNumber } from './PlayNumber'

export const NumbersDisplay = ({status, 
                                stars, 
                                onClick, 
                                availableNumbers, 
                                candidateNums} )=> (

  utils.range(1, 9).map((number) => (
            <PlayNumber key={number}  
            number={number} 
            status={status} 
            stars={stars}
            onClick={onClick}
            candidateNums={candidateNums}
            availableNumbers={availableNumbers}
            />
          ))



)