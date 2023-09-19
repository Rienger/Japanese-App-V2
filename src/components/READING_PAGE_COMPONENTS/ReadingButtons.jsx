import React from "react";

const ReadingButtons = ({
  number,
  setLevel,
  setNumber,
  setTranslation,
  randomPicker,
}) => {
  return (
    <div className="flex md:flex-col md:w-4/6 lg:w-3/6 xl:w-2/6">
      <button
        className={`${
          number > 6
            ? "bg-green-900 hover:bg-green-800"
            : "bg-zinc-800 hover:bg-zinc-700"
        }  rounded-lg text-yellow-100 py-2 hover:scale-105 transition duration-300 mb-3 px-3`}
        onClick={() => {
          // setLevel('kanjiN1')
          // setNumber(7)
          // randomPicker()
          alert("バカ　じゃないの？!!");
        }}
      >
        Reading N1
      </button>

      <button
        className={`${
          number > 5
            ? "bg-green-900 hover:bg-green-800"
            : "bg-zinc-800 hover:bg-zinc-700"
        }  rounded-lg text-yellow-100 py-2 hover:scale-105 transition duration-300 mb-3 px-3`}
        onClick={() => {
          // setLevel('kanjiN2')
          // setNumber(6)
          // randomPicker()
          alert(
            "what the fuck!? you gotta study your ass out if you wanna reach on my level"
          );
        }}
      >
        Reading N2
      </button>

      <button
        className={`${
          number > 4
            ? "bg-green-900 hover:bg-green-800"
            : "bg-zinc-800 hover:bg-zinc-700"
        }  rounded-lg text-yellow-100 py-2 hover:scale-105 transition duration-300 mb-3 px-3`}
        onClick={() => {
          // setLevel('kanjiN3')
          // setNumber(5)
          // randomPicker()
          alert("too soon for you son");
        }}
      >
        Reading N3
      </button>

      <button
        className={`${
          number > 3
            ? "bg-green-900 hover:bg-green-800"
            : "bg-zinc-800 hover:bg-zinc-700"
        }  rounded-lg text-yellow-100 py-2 hover:scale-105 transition duration-300 mb-3 px-3`}
        onClick={() => {
          // setLevel('kanjiN4')
          // setNumber(4)
          // randomPicker()
          alert("get better");
        }}
      >
        Reading N4
      </button>

      <button
        // className="reading-button"
        className={`${
          number > 2
            ? "bg-green-900 hover:bg-green-800"
            : "bg-zinc-800 hover:bg-zinc-700"
        }  rounded-lg text-yellow-100 py-2 hover:scale-105 transition duration-300 mb-3 px-3`}
        onClick={() => {
          setLevel("kanjiN5");
          setNumber(3);
          randomPicker();
        }}
      >
        Reading N5
      </button>

      <button
        className={`${
          number > 1
            ? "bg-green-900 hover:bg-green-800"
            : "bg-zinc-800 hover:bg-zinc-700"
        }  rounded-lg text-yellow-100 py-2 hover:scale-105 transition duration-300`}
        onClick={() => {
          setLevel("hiragana");
          setTranslation("hiraganaTranslation");
          setNumber(2);
          randomPicker();
        }}
      >
        Hira | Kata
      </button>

      <p className="text-zinc-700 mt-3 hidden md-blolck">
        Select your Current Level
      </p>
    </div>
  );
};

export default ReadingButtons;
