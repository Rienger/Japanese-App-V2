import card from "../challenge-card";
import Navbar from "./NAVBAR/Navbar";

import React, { useState, useEffect } from "react";
// import Monitor from './Monitor';
import ChallengeModal from "./ChallengeModal";
import ChallengeCardDisplay from "./ChallengeCardDisplay";
import rightArrow from "../images/right-arrow.png";
import leftArrow from "../images/left-arrow.png";
import completionImage from "../images/areyousure.jpeg";
import restartImage from "../images/demon.png";
import congratsAudio from "../audio/congrats.mp3";
import restartAudio from "../audio/restart.mp3";
import video from "../video/yowai.mkv";
import { VscDebugRestart } from "react-icons/vsc";
import { FaTrophy } from "react-icons/fa";

function App() {
  const audio = new Audio(congratsAudio);
  const audioRestart = new Audio(restartAudio);

  const data = JSON.parse(localStorage.getItem("card"));

  useEffect(() => {
    if (!data) {
      setDayCounter(1);
    } else {
      setDayCounter(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(dayCounter));
  });

  //   const [input, setInput] = useState(0)
  const [dayCounter, setDayCounter] = useState(1);
  const [cardNumber, setCardNumber] = useState(() => {
    if (!data) {
      return 1;
    } else {
      return data;
    }
  });
  const [modal, setModal] = useState(false);
  const [complete, setComplete] = useState();
  const [restart, setRestart] = useState();
  const [playVideo, setPlayVideo] = useState();
  const [warning, setWarning] = useState();
  const [restartIcon, setRestartIcon] = useState();
  const [completeIcon, setCompleteIcon] = useState();

  let confirmModal = () => {
    if (complete) {
      // setComplete(false)
      setDayCounter(dayCounter + 1);
      setModal(false);
      setCardNumber(card[dayCounter].day);
      audio.play();
      audio.volume = 0.27;
    }

    if (restart) {
      setDayCounter(1);
      setCardNumber(1);
      setRestart(false);
      setModal(false);
      audioRestart.play();
      audioRestart.volume = 0.4;
      setPlayVideo(true);
      setTimeout(() => {
        setPlayVideo(false);
      }, 18000);
    }
  };

  let completeModal = () => {
    setComplete(true);
    setRestart(false);
    setModal(true);
  };

  let restartModal = () => {
    setRestart(true);
    setComplete(false);
    setModal(true);
  };

  let previous = () => {
    if (cardNumber < 2) {
      setCardNumber(dayCounter);
    } else {
      setCardNumber(cardNumber - 1);
    }
  };

  let next = () => {
    if (cardNumber > dayCounter - 1) {
      setCardNumber(1);
    } else {
      setCardNumber(cardNumber + 1);
    }
  };

  //   let filter = (e) => {
  //     setInput(e.target.value)
  //     console.log(e.target.value)
  //   }

  const filteredCards = card.filter((item) => {
    return item.day === cardNumber;
    // if(input){
    //   return item.number == input
    // }
  });

  //   const filteredSearch = card.filter((item)=> {
  //   return item.number.toLowerCase().includes(input.toLowerCase())
  // })

  // function showIndex(index){
  //   setCardNumber(index+1)
  //   console.log('mabuhay')
  // }

  ///////////// KEYBOARD PRESS //////////////////////////////////

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.keyCode === 39) {
      next();
    }
    if (event.keyCode === 37) {
      previous();
    }
  };

  return (
    <div className="challenge-parent">
      <div className="challenge-intro">
        <h1>V Challenge</h1>
      </div>

      <div>
        {playVideo && (
          <div className="video-overlay">
            <video
              style={{ borderRadius: "100%", paddig: "0", marginTop: "50px" }}
              autoPlay
              src={video}
              muted
              height="auto"
              width="900px"
            ></video>
          </div>
        )}
      </div>

      <div className="monitor-parent">
        <div className="monitor-display">
          {card.map((item, index) => {
            return (
              <div
                className="monitor-item"
                onClick={() => {
                  if (index + 1 <= dayCounter) {
                    setCardNumber(index + 1);
                  } else {
                    // alert('you have to finish DAY ' + dayCounter)
                    setWarning(true);
                    setTimeout(() => {
                      setWarning(false);
                    }, 1000);
                    setCardNumber(dayCounter);
                  }
                }}
                style={{
                  backgroundColor: index < dayCounter - 1 && " #237c50",
                  color: index < dayCounter - 1 && "black",
                  borderRadius: index === dayCounter - 1 && "50%",
                  border: index === dayCounter - 1 && "0.5px solid green",
                  fontSize: index === dayCounter - 1 && "13px",
                  transform: index === dayCounter - 1 && "rotate(360deg)",
                }}
              >
                {item.day}
              </div>
            );
          })}
        </div>
      </div>

      <div className="monitor-button">
        <div className="complete-box">
          <button
            className="complete-button"
            onClick={completeModal}
            onMouseOver={() => {
              setCompleteIcon(true);
            }}
            onMouseLeave={() => setCompleteIcon(false)}
          >
            {completeIcon ? <FaTrophy /> : `DAY ${dayCounter} COMPLETE`}
          </button>
        </div>

        <button
          className="restart-button"
          onClick={restartModal}
          onMouseOver={() => {
            setRestartIcon(true);
          }}
          onMouseLeave={() => setRestartIcon(false)}
        >
          {restartIcon ? <VscDebugRestart /> : `RESTART`}
        </button>
      </div>

      {/* FOR COMPLETING A DAY */}
      <div className="modal-parent">
        {modal && (
          <ChallengeModal
            close={setModal}
            confirm={confirmModal}
            background={complete ? completionImage : restartImage}
            japaneseText={
              restart && "進み続けてさえいれば、遅くとも関係ない。　ーイタチ"
            }
            englishText={
              restart &&
              `It does not matter how slowly you go as long as you do not stop.`
            }
            questionText={restart && "Sure ka na ba dyan?"}
            restartPosition={!restart}
          />
        )}
      </div>

      {/* <input placeholder='search Day...' type='number' onChange={filter} value={input}></input> */}

      <div className="card-container">
        <img src={leftArrow} onClick={previous} alt="left"></img>

        <div>
          {filteredCards.map((item) => {
            return (
              <ChallengeCardDisplay
                day={warning ? dayCounter : item.day}
                warning={warning}
                nihongo1={item.nihongo1}
                nihongo2={item.nihongo2}
                nihongo3={item.nihongo3}
                nihongo4={item.nihongo4}
                nihongo5={item.nihongo5}
                nihongo6={item.nihongo6}
                nihongo7={item.nihongo7}
                nihongo8={item.nihongo8}
                nihongo9={item.nihongo9}
                nihongo10={item.nihongo10}
                english1={item.english1}
                english2={item.english2}
                english3={item.english3}
                english4={item.english4}
                english5={item.english5}
                english6={item.english6}
                english7={item.english7}
                english8={item.english8}
                english9={item.english9}
                english10={item.english10}
              />
            );
          })}
        </div>

        <img src={rightArrow} onClick={next} alt="right"></img>
      </div>
    </div>
  );
}

export default App;
