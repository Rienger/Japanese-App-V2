import React, { useState, useEffect } from "react";
import Card from "./Card";
import FlashcardArrows from "./FlashcardArrows";
import CategoryButton from "./CategoryButton";
import {
  arrayEnglish,
  arrayHiraganaN4,
  arrayHiraganaN5,
  arrayKanjiN4,
  arrayKanjiN5,
  arrayNihongo,
} from "../card-content";

// ... Font Awesome imports

function Flashcard() {
  const [arrayRange, setArrayRange] = useState(arrayEnglish.length);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [selectedFront, setSelectedFront] = useState(arrayNihongo);
  const [selectedBack, setSelectedBack] = useState(arrayEnglish);
  const [back, setBack] = useState(selectedBack[counter]);
  const [front, setFront] = useState(selectedFront[counter]);
  const [title, setTitle] = useState("title");
  const [arrayChecker, setArrayChecker] = useState([]);
  const [random, setRandom] = useState(Math.floor(Math.random() * arrayRange));

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 39: // right arrow
        nextCard();
        break;
      case 37: // left arrow
        previousCard();
        break;
      case 13: // enter key
        transform();
        event.preventDefault();
        break;
      case 82: // R key
        generateRandomNumber();
        break;
      default:
        break;
    }
  };

  const transform = () => {
    setActive(!active);
  };

  const previousCard = () => {
    setCounter((prevCounter) => (prevCounter - 1 + arrayRange) % arrayRange);
    updateCard();
  };

  const nextCard = () => {
    setCounter((prevCounter) => (prevCounter + 1) % arrayRange);
    updateCard();
  };

  const updateCard = () => {
    setBack(selectedFront[counter]);
    setFront(selectedBack[counter]);
  };

  const generateRandomNumber = () => {
    let newRandom;
    do {
      newRandom = Math.floor(Math.random() * arrayRange);
    } while (arrayChecker.includes(newRandom));

    setRandom(newRandom);
    setCounter(newRandom);
    updateCard();

    arrayChecker.push(newRandom);
  };

  const setCategory = (showFront, showBack) => {
    setSelectedFront(showFront);
    setSelectedBack(showBack);
    setArrayRange(showFront.length);
    setCounter(0);
    updateCard();
    generateRandomNumber();
  };

  const category = (e) => {
    const cat = e.target.id;
    switch (cat) {
      case "vocab":
        setCategory(arrayNihongo, arrayEnglish);
        break;
      case "kanji-n5":
        setCategory(arrayKanjiN5, arrayHiraganaN5);
        break;
      case "kanji-n4":
        setCategory(arrayKanjiN4, arrayHiraganaN4);
        break;
      case "kanji-n3":
        alert("soon");
        break;
      case "kanji-n2":
        alert("soon");
        break;
      case "kanji-n1":
        alert("soon");
        break;
      default:
        break;
    }
  };

  return (
    <div className="custom-bg-color">
      <div className="flex gap-3 justify-center py-5">
        <button
          className="bg-gray-800 hover:bg-gray-700 rounded transition duration-300 px-6 py-2 inline-block text-sm"
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

      <div className="flex justify-center gap-3 py-4 text-sm">
        <span className="bg-gray-700 text-white border-2 border-gray-800 px-3 py-2 rounded shadow">
          R
        </span>
        <span className="bg-gray-700 text-white border-2 border-gray-800 px-3 py-2 rounded shadow">
          Enter
        </span>
        <span className="bg-gray-700 text-white border-2 border-gray-800 px-3 py-2 rounded shadow">
          Left Arrow
        </span>
        <span className="bg-gray-700 text-white border-2 border-gray-800 px-3 py-2 rounded shadow">
          Right Arrow
        </span>
      </div>
    </div>
  );
}

export default Flashcard;
