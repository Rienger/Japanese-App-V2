import React from "react";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const FlashcardArrows = ({ previousCard, counter, arrayRange, nextCard }) => {
  return (
    <div className="mx-auto flex justify-center gap-4 items-center text-gray-800">
      <span className="arrow cursor-pointer" onClick={previousCard}>
        <FontAwesomeIcon
          className="text-3xl hover:text-gray-900"
          icon={faCircleChevronLeft}
        />
      </span>
      <span className="flashcard-count text-xl">
        {" "}
        {counter + 1}/{arrayRange}{" "}
      </span>
      <span className="arrow cursor-pointer" onClick={nextCard}>
        <FontAwesomeIcon
          className="text-3xl hover:text-gray-900"
          icon={faCircleChevronRight}
        />
      </span>
    </div>
  );
};

export default FlashcardArrows;
