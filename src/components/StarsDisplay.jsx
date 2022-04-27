import utils from "../utils";

export const StarsDisplay = props => (
  utils.range(1, props.stars)
    .map((starId) => (
            <div key={starId} className="star" />
          ))
)