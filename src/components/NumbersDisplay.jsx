import utils from "../utils";

import { PlayNumber } from "./PlayNumber";

export const NumbersDisplay = ({
  status,
  stars,
  onClick,
  setStars,
  availableData
}) =>
  utils
    .range(1, 9)
    .map((number) => (
      <PlayNumber
        key={number}
        number={number}
        status={status}
        stars={stars}
        onClick={onClick}
        setStars={setStars}
        availableData={availableData}
      />
    ));
