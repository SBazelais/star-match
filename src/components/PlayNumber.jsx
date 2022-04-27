import { useState } from "react";
import colors from "../colorTheme";
import utils from "../utils";

export const PlayNumber = ({ number, availableData, stars, setStars }) => {
  const [availableNumbers, setavailableNumbers] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) return "used";
    if (candidateNums.includes(number))
      return candidatesAreWrong ? "wrong" : "candidate";
    return "available";
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === "used") return;

    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNumbers.filter(
        (n) => !newCandidateNums.includes(n)
      );
      availableData(newAvailableNums);
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setavailableNumbers(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return (
    <button
      className="number"
      style={{ backgroundColor: colors[numberStatus(number)] }}
      onClick={() => onNumberClick(number, numberStatus(number))}
    >
      {number}
    </button>
  );
};
