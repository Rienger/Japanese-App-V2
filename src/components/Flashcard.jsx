import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom'
import Card from "./Card";
import {
  arrayEnglish,
  arrayHiraganaN4,
  arrayHiraganaN5,
  arrayKanjiN4,
  arrayKanjiN5,
  arrayNihongo,
} from "../card-content";

import FlashcardArrows from "./FlashcardArrows";
import CategoryButton from "./CategoryButton";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Flashcard() {
  const [arrayRange, setArrayRange] = useState(arrayEnglish.length);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const [random, setRandom] = useState(Math.floor(Math.random() * arrayRange));
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const [selectedFront, setSelectedFront] = useState(arrayNihongo);
  const [selectedBack, setSelectedBack] = useState(arrayEnglish);

  const [back, setBack] = useState(selectedBack[counter]);
  const [front, setFront] = useState(selectedFront[counter]);
  const [title, setTitle] = useState("title");

  const [arrayChecker, setArrayChecker] = useState([]);
  //ensures not to repeat randomized value until all data are shown

  function transform() {
    setActive(!active);
  }

  function previousCard() {
    if (active === true) {
      if (counter > 0) {
        setCounter(counter - 1);
        setBack(selectedFront[counter - 1]);
        setFront(selectedBack[counter - 1]);
      } else if (counter <= 0) {
        setCounter(arrayRange - 1);
        setBack(selectedFront[arrayRange - 1]);
        setFront(selectedBack[arrayRange - 1]);
      }
    } else {
      if (counter > 0) {
        setCounter(counter - 1);
        setBack(selectedBack[counter - 1]);
        setFront(selectedFront[counter - 1]);
      } else if (counter <= 0) {
        setCounter(arrayRange - 1);
        setBack(selectedBack[arrayRange - 1]);
        setFront(selectedFront[arrayRange - 1]);
      }
    }
  }

  function nextCard() {
    if (active === true) {
      if (counter < arrayRange - 1) {
        setCounter(counter + 1);
        setBack(selectedFront[counter + 1]);
        setFront(selectedBack[counter + 1]);
      } else if (counter >= arrayRange - 1) {
        setCounter(0);
        setBack(selectedFront[0]);
        setFront(selectedBack[0]);
      }
    } else if (active === false) {
      if (counter < arrayRange - 1) {
        setCounter(counter + 1);
        setBack(selectedBack[counter + 1]);
        setFront(selectedFront[counter + 1]);
      } else if (counter >= arrayRange - 1) {
        setCounter(0);
        setBack(selectedBack[0]);
        setFront(selectedFront[0]);
      }
    }
  }

  function generateRandomNumber() {
    setRandom(Math.floor(Math.random() * arrayRange));
    setCounter(random);
    setFront(selectedFront[random]);
    setBack(selectedBack[random]);

    if (active === true) {
      setBack(selectedFront[random]);
      setFront(selectedBack[random]);
    } else if (active === false) {
      setBack(selectedBack[random]);
      setFront(selectedFront[random]);
    }

    // need to create an array checker to show all randomize data
    // to avoid callback function must learn how to use promise
    console.log(random + 1);
    arrayChecker.push(random + 1);
    console.log(arrayChecker);
  }

  const handleKeyDown = (event) => {
    // right arrow
    if (event.keyCode === 39) {
      console.log("A key was pressed", event.keyCode);
      nextCard();
    }
    // left arrow
    if (event.keyCode === 37) {
      previousCard();
    }
    // enter key
    if (event.keyCode === 13) {
      transform();
      event.preventDefault();
    }
    // R key
    if (event.keyCode === 82) {
      generateRandomNumber();
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const setCategory = (showFront, showBack, e) => {
    if (active === true) {
      setFront(showBack[0]);
      setBack(showFront[0]);
    } else {
      setFront(showFront[0]);
      setBack(showBack[0]);
    }
    setCounter(0);
    setArrayRange(showFront.length);
    setSelectedFront(showFront);
    setSelectedBack(showBack);
    setRandom(Math.floor(Math.random() * showFront.length));
    console.log(arrayRange);
  };

  const category = (e) => {
    let cat = e.target.id;

    if (cat === "vocab") {
      setCategory(arrayNihongo, arrayEnglish);
    } else if (cat === "kanji-n5") {
      setCategory(arrayKanjiN5, arrayHiraganaN5);
    } else if (cat === "kanji-n4") {
      setCategory(arrayKanjiN4, arrayHiraganaN4);
    } else if (cat === "kanji-n3") {
      alert("soon");
    } else if (cat === "kanji-n2") {
      alert("soon");
    } else if (cat === "kanji-n1") {
      alert("soon");
    }
    console.log(cat);
  };

  return (
    <div className="custom-bg-color">
      <div className="flex gap-3 justify-center py-5">
        <button
          className="bg-gray-800 px-6 py-2 inline-block text-sm"
          onClick={generateRandomNumber}
        >
          Start Random
        </button>

        <CategoryButton
          setIsDropdownActive={setIsDropdownActive}
          isDropdownActive={isDropdownActive}
          category={category}
        />
      </div>

      <Card
        back={back}
        front={front}
        // title={title}
        flip={transform}
        activating={active}
      />

      <div className="my-5">
        <FlashcardArrows
          previousCard={previousCard}
          counter={counter}
          arrayRange={arrayRange}
          nextCard={nextCard}
        />
      </div>

      <div className="flex justify-center gap-3 py-4">
        <span className="bg-gray-700 text-white border border-gray-900 px-3 rounded">
          R
        </span>
        <span className="bg-gray-700 text-white border border-gray-900 px-3 rounded">
          Enter
        </span>
        <span className="bg-gray-700 text-white border border-gray-900 px-3 rounded">
          Left Arrow
        </span>
        <span className="bg-gray-700 text-white border border-gray-900 px-3 rounded">
          Right Arrow
        </span>
      </div>
    </div>
  );
}

export default Flashcard;
