import React, { useState, useEffect } from "react";
import {
  dictionaryJapanese,
  dictionaryEnglish,
  tense,
  simplePast,
  politeForm,
  teForm,
  simpleNegative,
} from "../verb-contents";
import Navbar from "./NAVBAR/Navbar";
import { FiHelpCircle } from "react-icons/fi";

function Random() {
  let initialRandomTense = Math.floor(Math.random() * tense.length);
  let initialRandom = Math.floor(Math.random() * dictionaryJapanese.length);

  const [japaneseWord, setJapaneseWord] = useState(
    dictionaryJapanese[initialRandom]
  );
  const [englishWord, setEnglishWord] = useState(
    dictionaryEnglish[initialRandom]
  );

  const [input, setInput] = useState("");
  const [wrong, setWrong] = useState();
  const [correct, setCorrect] = useState();
  //   const [correct, setCorrect] = useState()
  const [tenseDisplay, setTenseDisplay] = useState(tense[initialRandomTense]);

  const [polite, setPolite] = useState(politeForm[initialRandom]);
  const [simplePasts, setSimplePasts] = useState(simplePast[initialRandom]);
  const [teForms, setTeForms] = useState(teForm[initialRandom]);
  const [simpleNegatives, setSimpleNegatives] = useState(
    simpleNegative[initialRandom]
  );

  // const [transformHiragana, setTransformHiragana] = useState()

  function dictionaryForm() {
    console.log(japaneseWord);
    if (tenseDisplay === "polite") {
      checker(polite);
    }
    if (tenseDisplay === "simple Past") {
      checker(simplePasts);
    }
    if (tenseDisplay === "Te-form") {
      checker(teForms);
    }
    if (tenseDisplay === "simple Negative") {
      checker(simpleNegatives);
    }

    setInput("");
  }

  function backToDefault() {
    setWrong(false);
    setCorrect(false);
  }

  function setRandom() {
    setPolite(politeForm[initialRandom]);
    setSimplePasts(simplePast[initialRandom]);
    setTeForms(teForm[initialRandom]);
    setSimpleNegatives(simpleNegative[initialRandom]);

    setTenseDisplay(tense[initialRandomTense]);
    setJapaneseWord(dictionaryJapanese[initialRandom]);
    setEnglishWord(dictionaryEnglish[initialRandom]);
  }

  function checker(tenseParam) {
    if (input.toLowerCase() === tenseParam) {
      setCorrect(true);
      setTimeout(backToDefault, 1000);
      setRandom();
    } else {
      setWrong(true);
      setTimeout(backToDefault, 1000);
    }
  }

  function giveUp() {
    // setRandom()
    if (tenseDisplay === "polite") {
      setInput(polite);
    }
    if (tenseDisplay === "simple Past") {
      setInput(simplePasts);
    }
    if (tenseDisplay === "Te-form") {
      setInput(teForms);
    }
    if (tenseDisplay === "simple Negative") {
      setInput(simpleNegatives);
    }
  }

  function onChange(e) {
    setInput(e.target.value);
    // setTransformHiragana(toHiragana(e.target.value))
  }

  const handleKeyDown = (event) => {
    // enter key
    if (event.keyCode === 13) {
      dictionaryForm();
      event.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="custom-bg-color py-10">
      <div>
        <h1
          className="text-3xl text-center text-black mb-4"
          style={{ color: wrong ? "#B10046" : correct && "green" }}
        >
          Verb Conjugation Practice
        </h1>
        <div
          className="bg-white text-gray-900 w-full md:w-3/4 xl:w-1/2 mx-auto rounded p-10"
          style={{
            border: wrong ? "5px #B10046 solid" : correct && "5px green solid",
          }}
        >
          {/* <div className="random-icon-parent">
            <div className="random-icon" onClick={giveUp}>
              <FiHelpCircle size={"1.9em"} />
            </div>
          </div> */}

          <h1 className="text-5xl text-center my-3 font-semibold">
            {japaneseWord}
          </h1>
          <h3 className="text-3xl text-center">{englishWord}</h3>
          <h2 className="text-xl italic text-center">{tenseDisplay}</h2>

          <div className="text-center">
            <input
              className="focus:border-emerald-600 outline-0 border border-gray-400 py-3 w-3/4 mx-auto my-4"
              placeholder="Enter your answer"
              onChange={onChange}
              autoFocus="autofocus"
              value={input}
            ></input>{" "}
            <button
              className="bg-emerald-900 text-white px-7 py-2 rounded-full"
              onClick={dictionaryForm}
            >
              Submit
            </button>
            <button
              className="bg-gray-500 ms-2 text-white px-7 py-2 rounded-full"
              onClick={giveUp}
            >
              Give up
            </button>
          </div>
        </div>
        {/* <button onClick={giveUp}>I give up</button> */}
      </div>
    </div>
  );
}

export default Random;
