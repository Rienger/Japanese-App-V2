import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Partsofspeech() {
  let navigate = useNavigate();
  const [posType, setPosType] = useState();

  return (
    <div className="inner-background">
      <div className="text-center h-screen">
        <div className="pt-10 tan flex justify-center gap-12">
          <div
            id="noun"
            className="l-green w-52 h-96 rounded-lg duration-700 shadow-md shadow-slate-900 hover:duration-700 hover:bg-stone-800 pt-6 group"
            onClick={() => navigate("/pos/noun/intro")}
            onMouseEnter={() => {
              setPosType("noun");
            }}
            onMouseLeave={() => {
              setPosType("hide");
            }}
          >
            <div className="group-hover:text-amber-500">
              <h2 className="my-5 font-semibold">NOUNS</h2>
              <div className="text-4xl">
                <ion-icon name="body-outline"></ion-icon>{" "}
              </div>
            </div>
            <h3
              className={
                posType === "noun"
                  ? "visible p-4 text-stone-400 opacity-75"
                  : "invisible"
              }
            >
              This page contains a course in Japanese Nouns and Words as well as
              a list of other lessons in grammar topics{" "}
            </h3>
          </div>

          <div
            id="verb"
            className="l-purple w-52 h-96 rounded-lg duration-700 shadow-md shadow-slate-900 hover:duration-700 hover:bg-stone-800 pt-6 group"
            onClick={() => navigate("/pos/verb")}
            onMouseEnter={() => {
              setPosType("verb");
            }}
            onMouseLeave={() => {
              setPosType("hide");
            }}
          >
            <div className="group-hover:text-amber-500">
              <h2 className="my-5 font-semibold">VERBS</h2>
              <div className="text-4xl">
                {" "}
                <ion-icon name="bicycle-outline"></ion-icon>
              </div>
            </div>
            <h3
              className={
                posType === "verb"
                  ? "visible p-4 text-stone-400 opacity-75"
                  : "invisible"
              }
            >
              This page contains how to conjugate verb. To “conjugate” a verb is
              to put it into the tense that you need to convey what you're
              trying to say.
            </h3>
          </div>

          <div
            id="adj"
            className="l-brown w-52 h-96 rounded-lg duration-700 shadow-md shadow-slate-900 hover:duration-700 hover:bg-stone-800  pt-6 group"
            onClick={() => navigate("/pos/adjective")}
            onMouseEnter={() => {
              setPosType("adj");
            }}
            onMouseLeave={() => {
              setPosType("hide");
            }}
          >
            <div className="group-hover:text-amber-500">
              <h2 className="my-5 font-semibold">ADJECTIVES</h2>
              <div className="text-4xl">
                <ion-icon name="color-palette-outline"></ion-icon>
              </div>
            </div>
            <h3
              className={
                posType === "adj"
                  ? "visible p-4 text-stone-400 opacity-75"
                  : "invisible"
              }
            >
              This page contains types of Japanese Adjectives and its
              conjugation.
            </h3>
          </div>

          <div
            id="adv"
            className="l-blue w-52 h-96 rounded-lg duration-700 shadow-md shadow-slate-900 hover:duration-700 hover:bg-stone-800 pt-6 group"
            onClick={() => navigate("/pos/adverb")}
            onMouseEnter={() => {
              setPosType("adv");
            }}
            onMouseLeave={() => {
              setPosType("hide");
            }}
          >
            <div className="group-hover:text-amber-500">
              <h2 className="my-5 font-semibold">ADVERBS</h2>
              <div className="text-4xl">
                <ion-icon name="library-outline"></ion-icon>
              </div>
            </div>
            <h3
              className={
                posType === "adv"
                  ? "visible p-4 text-stone-400 opacity-75"
                  : "invisible"
              }
            >
              This page explains how Japanese adverbs work with relevant
              vocabulary{" "}
            </h3>
          </div>
        </div>

        <div
          className="sentence-structure tan l-cyan mx-auto mt-10 w-1/2 h-52 rounded-lg duration-700 shadow-md shadow-slate-900 hover:duration-700 hover:bg-stone-800  pt-6 group"
          onMouseEnter={() => {
            setPosType("sentence-structure");
          }}
          onMouseLeave={() => {
            setPosType("hide");
          }}
        >
          <div className="group-hover:text-amber-500">
            <h2 className="my-3 font-semibold">SENTENCE STRUCTURE</h2>

            <div className="text-4xl">
              <ion-icon name="analytics-outline"></ion-icon>
            </div>
          </div>
          <h3
            className={
              posType === "sentence-structure"
                ? "visible text-stone-400 opacity-75"
                : "invisible"
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
