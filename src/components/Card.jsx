import React from "react";
import ReactCardFlip from "react-card-flip";

function Card(props) {
  return (
    <ReactCardFlip
      isFlipped={props.activating}
      flipDirection={"vertical"}
      flipSpeedFrontToBack="0.45"
      flipSpeedBackToFront="0.45"
    >
      <div
        onClick={props.flip}
        className="h-96 md:w-3/4 xl:w-1/2 bg-gray-100 flex items-center justify-center rounded shadow-xl border mx-auto"
      >
        <h1 className="text-4xl text-black">{props.front}</h1>
      </div>

      <div
        onClick={props.flip}
        className="h-96 md:w-3/4 xl:w-1/2 bg-gray-100 flex items-center justify-center rounded shadow-xl border mx-auto"
      >
        <h1 className="text-4xl text-black">{props.back}</h1>
      </div>
    </ReactCardFlip>
  );
}

export default Card;
