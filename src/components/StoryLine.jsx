import React from "react";

function Storyline(props) {
  return (
    <div>
      <div className="story-line-set">
        <p className="story-japanese">{props.japaneseStory}</p>
        <p
          id={props.id}
          onClick={props.showTranslation}
          className="translation-button"
        >
          Show/Hide Translation
        </p>
        <p
          className={`story-content story-english ${
            props.translate === props.id &&
            props.counter === true &&
            "show-translation"
          }`}
        >
          {props.englishStory}
        </p>
      </div>
    </div>
  );
}

export default Storyline;
