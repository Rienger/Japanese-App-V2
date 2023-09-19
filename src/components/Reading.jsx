import React, { useState } from "react";
import readingContent from "../reading-content";
import ReadingButtons from "./READING_PAGE_COMPONENTS/ReadingButtons";

function Reading() {
  const [number, setNumber] = useState(2);
  const [level, setLevel] = useState("hiragana");
  const [random, setRandom] = useState(Math.floor(Math.random() * 3));
  const [translation, setTranslation] = useState();

  const randomPicker = () => {
    // setLevel(choice)
    setRandom(Math.floor(Math.random() * 3));
  };

  return (
    <div className="custom-bg-color">
      <div className="container mx-auto md:flex py-12 gap-10">
        <ReadingButtons
          number={number}
          setLevel={setLevel}
          setNumber={setNumber}
          setTranslation={setTranslation}
          randomPicker={randomPicker}
        />

        <div className="reading-conten text-zinc-900">
          {readingContent.map((value) => (
            <div>
              <h1 className="text-xl leading-10 mb-5 font-bold">
                {value[level][0]}
              </h1>
              <div className="text-lg">
                <p>{value[level][1]}</p>
                <p>{value[level][2]}</p>
                <p>{value[level][3]}</p>
                <p>{value[level][4]}</p>
                <p>{value[level][5]}</p>
              </div>
            </div>
          ))}
          {/* <p>{readingContent[0][translation]}</p>
            <button style={{}}>romaji and translation</button> */}
        </div>
      </div>
    </div>
  );
}

export default Reading;
