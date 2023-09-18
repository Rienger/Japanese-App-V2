import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Partsofspeech() {
  let navigate = useNavigate();
  const [posType, setPosType] = useState();

  return (
    <div className="inner-background">
      <div className="pos-parent">
        <div className="pos-category pt-10 tan">
          <div
            id="noun"
            className="pos-div pos-noun w-52 h-96 rounded-lg duration-700 shadow-md shadow-slate-900 hover:duration-700"
            onClick={() => navigate("/pos/noun/intro")}
            onMouseEnter={() => {
              setPosType("noun");
            }}
            onMouseLeave={() => {
              setPosType("hide");
            }}
          >
            <h2>NOUNS</h2>
            <div className="pos-div-icon">
              <ion-icon name="body-outline"></ion-icon>{" "}
            </div>
            <h3
              className={
                posType === "noun"
                  ? "show-pos-div-content"
                  : "hide-pos-div-content"
              }
            >
              This page contains a course in Japanese Nouns and Words as well as
              a list of other lessons in grammar topics{" "}
            </h3>
          </div>

          <div
            id="verb"
            className="pos-div pos-verb"
            onClick={() => navigate("/pos/verb")}
            onMouseEnter={() => {
              setPosType("verb");
            }}
            onMouseLeave={() => {
              setPosType("hide");
            }}
          >
            <h2>VERBS</h2>
            <div className="pos-div-icon">
              {" "}
              <ion-icon name="bicycle-outline"></ion-icon>
            </div>
            <h3
              className={
                posType === "verb"
                  ? "show-pos-div-content"
                  : "hide-pos-div-content"
              }
            >
              This page contains how to conjugate verb. To “conjugate” a verb is
              to put it into the tense that you need to convey what you're
              trying to say.
            </h3>
          </div>

          <div
            id="adj"
            className="pos-div pos-adj"
            onClick={() => navigate("/pos/adjective")}
            onMouseEnter={() => {
              setPosType("adj");
            }}
            onMouseLeave={() => {
              setPosType("hide");
            }}
          >
            <h2>ADJECTIVES</h2>
            <div className="pos-div-icon">
              <ion-icon name="color-palette-outline"></ion-icon>
            </div>
            <h3
              className={
                posType === "adj"
                  ? "show-pos-div-content"
                  : "hide-pos-div-content"
              }
            >
              This page contains types of Japanese Adjectives and its
              conjugation.
            </h3>
          </div>

          <div
            id="adv"
            className="pos-div pos-adv"
            onClick={() => navigate("/pos/adverb")}
            onMouseEnter={() => {
              setPosType("adv");
            }}
            onMouseLeave={() => {
              setPosType("hide");
            }}
          >
            <h2>ADVERBS</h2>
            <div className="pos-div-icon">
              <ion-icon name="library-outline"></ion-icon>
            </div>
            <h3
              className={
                posType === "adv"
                  ? "show-pos-div-content"
                  : "hide-pos-div-content"
              }
            >
              This page explains how Japanese adverbs work with relevant
              vocabulary{" "}
            </h3>
          </div>
        </div>

        <div
          className="sentence-structure"
          onMouseEnter={() => {
            setPosType("sentence-structure");
          }}
          onMouseLeave={() => {
            setPosType("hide");
          }}
        >
          <div>
            <h2>SENTENCE STRUCTURE</h2>
          </div>

          <div className="pos-div-icon">
            <ion-icon name="analytics-outline"></ion-icon>
          </div>
          <h3
            className={
              posType === "sentence-structure"
                ? "show-pos-div-content"
                : "hide-pos-div-content"
            }
          >
            This page explains the basic word order when constructing a
            sentence.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Partsofspeech;
