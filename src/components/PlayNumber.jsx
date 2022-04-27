import { useState } from 'react'
import colors from '../colorTheme'
import utils from "../utils";

export const PlayNumber = ({number, 
                            onClick, 
                            stars, 
                            candidateNums, 
                            availableNumbers}) => {

    const candidatesAreWrong = utils.sum(candidateNums) > stars

    const numberStatus = number => {
        if(!availableNumbers.includes(number)) return 'used'
        if(candidateNums.includes(number)) 
        return candidatesAreWrong ? 'wrong' : 'candidate'
        return 'available'
    }

    return(
            <button className="number"
                style={{backgroundColor: colors[numberStatus(number)]}}
                onClick={()=> onClick(number, numberStatus(number))}> 
                {number}
            </button>
        )
}

