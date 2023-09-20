import React from "react";

const KanjiHeader = ({
  btnRef,
  setOpen,
  open,
  dropdownBtnActive,
  setKanjiLevel,
  setDropdownBtnActive,
  n4Kanji,
  n5Kanji,
}) => {
  return (
    <div className="text-black py-10">
      <h1 className="text-4xl font-semibold">JLPT Kanji List</h1>
      <p className="mt-2 w-2/4">
        In the lists below which are organized kanji by JLPT level, you’ll see
        the kanji and the English meaning, followed by the onyomi and kunyomi
        readings.
      </p>

      <div className="flex">
        <h3>JLPT Level: </h3>

        <div className="">
          <div
            ref={btnRef}
            className="kanji-dropdown-button"
            onClick={() => setOpen(!open)}
          >
            <div>{dropdownBtnActive}</div>
            <div className="kanji-dropdown-icon">
              <ion-icon name="caret-down-outline"></ion-icon>
            </div>
          </div>

          <div
            className={open ? "kanji-show" : "kanji-hide"}
            onClick={(e) => {
              let id = e.target.id;
              if (id === "n5") {
                console.log("go to n5 component");
                setKanjiLevel(n5Kanji);
                setDropdownBtnActive("N5 (beginner)");
              } else if (id === "n4") {
                console.log("go to  n4 component");
                setKanjiLevel(n4Kanji);
                setDropdownBtnActive("N4");
              } else {
                alert("coming soon");
              }
            }}
          >
            <div>
              <h2 id="n5">N5</h2>
            </div>
            <div>
              <h2 id="n4">N4</h2>
            </div>
            <div>
              <h2 id="n3">N3</h2>
            </div>
            <div>
              <h2 id="n2">N2</h2>
            </div>
            <div>
              <h2 id="n1">N1</h2>
            </div>
          </div>
        </div>

        {/* create a filter search */}
        <div className="kanji-input-filter">
          <input placeholder="search..."></input>
        </div>
      </div>
    </div>
  );
};

export default KanjiHeader;
