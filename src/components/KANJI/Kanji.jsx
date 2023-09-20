import React, { useEffect, useState, useRef } from "react";
import { n5Kanji, n4Kanji } from "./kanji-content";
import KanjiHeader from "./KanjiHeader";

function Kanji() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();

  const [kanjiLevel, setKanjiLevel] = useState(n5Kanji);
  const [dropdownBtnActive, setDropdownBtnActive] = useState("N5 (beginner)");
  const [displayMouseOver, setDisplayMouseOver] = useState([]);
  const [clickActive, setClickActive] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handler);

    // return () => {
    //     document.removeEventListener('click', handler)
    // }
  }, []);

  return (
    <div className="container mx-auto">
      <KanjiHeader
        btnRef={btnRef}
        setOpen={setOpen}
        open={open}
        dropdownBtnActive={dropdownBtnActive}
        setKanjiLevel={setKanjiLevel}
        setDropdownBtnActive={setDropdownBtnActive}
        n4Kanji={n4Kanji}
        n5Kanji={n5Kanji}
      />

      <div className="kanji-content">
        <div className="kanji-characters">
          {kanjiLevel.map((value) => (
            <div>
              <div className="kanji-column">
                {value.column.map((values) => (
                  <p
                    // onMouseClick={()=> {setDisplayMouseOver(values.explanation)
                    //                     console.log(clickActive)
                    // }}
                    onMouseOver={() => setDisplayMouseOver(values.explanation)}
                    onMouseLeave={() => setDisplayMouseOver([])}
                  >
                    {values.kanji}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="kanji-explanation">
          <div className="kanji-explanation-card">
            <div className="kanji-upper-row">
              <div className="kanji-explanation-leftColumn">
                <div>meaning:</div>
                <div>onyomi:</div>
                <div>kunyomi:</div>
              </div>
              <div className="kanji-explanation-rightColumn">
                {displayMouseOver.map((value) => (
                  <div>
                    <div className="kanji-explanation-meaning">
                      {value.meaning}
                    </div>
                    <div>{value.onyomi}</div>
                    <div>{value.kunyomi}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="kanji-lower-row">
              <div>Examples:</div>

              <div>
                {displayMouseOver.map((value) => (
                  <div>
                    {value.examples.map((values) => (
                      <div>{values}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kanji;
