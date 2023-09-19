import React from "react";
import hiragana from "../images/hiragana_chart.jpg";
import katakana from "../images/katakana_chart.jpg";
import { useNavigate } from "react-router-dom";

function Kana() {
  const navigate = useNavigate();

  return (
    <div className="inner-background">
      <div className="text-center w-5/6 mx-auto">
        <div className="pb-64">
          <h1 className="text-5xl text-gray-600 font-bold py-3">
            LEARN YOUR HIRAGANA
          </h1>

          <iframe
            className="border-4 border-teal-600 mb-7 rounded-md mx-auto w-2/3  max-w-full"
            // width="896"
            height="508"
            src="https://www.youtube.com/embed/6p9Il_j0zjc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>

          <img
            className="rounded-lg mb-10 opacity-90 mx-auto
            w-2/3 h-auto max-w-full"
            src={hiragana}
            width="900"
            alt="hiragana"
          ></img>

          <button
            className="bg-slate-600 w-80 h-12 font-semibold text-amber-100 rounded-full duration-75 hover:duration-75 hover:tracking-wider"
            onClick={() => {
              navigate("/kana/test");
            }}
          >
            HIRAGANA TEST
          </button>
        </div>

        <div className="pb-64">
          <h1 className="text-5xl text-gray-600 font-bold py-3">
            {" "}
            LEARN YOUR KATAKANA
          </h1>

          <iframe
            className="border-4 border-sky-600 mb-7 rounded-md mx-auto w-2/3 max-w-full"
            // width="896"
            height="508"
            src="https://www.youtube.com/embed/s6DKRgtVLGA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>

          <img
            className="rounded-lg mb-10 opacity-90 mx-auto w-2/3 h-auto max-w-full"
            src={katakana}
            width="900"
            alt="katakana"
          ></img>

          <button
            className="bg-slate-600 w-80 h-12 font-semibold text-amber-100 rounded-full duration-75
            hover:duration-75 hover:tracking-wider"
            onClick={() => {
              navigate("/kana/test");
            }}
          >
            KATAKANA TEST
          </button>
        </div>
      </div>
    </div>
  );
}

export default Kana;
