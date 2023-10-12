import React from "react";
import GameRules from "./GameRules";
import { useState } from "react";
import CreateSpieler from "./CreateSpieler";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="welcome">
        <div className="picture1">
          {/* <img src="./img/globe1.png" width="50%" /> */}
          <img
            src="https://media.istockphoto.com/id/186019678/de/foto/planet-erde-mit-einigen-wolken-americas-view.jpg?s=612x612&w=0&k=20&c=5ElJXzIoB4FKIBDi0D8EVcVVfOivqU-A1SllAFvNVis="
            width="50%"
          />
          <div className=""></div>
        </div>

        <div className="usersName">
          <p>Put your name here:</p>
          <CreateSpieler />
          {/* <form onSubmit={""}>
            <input id="name" type="text" placeholder="name" value="" />
            </form> */}
          <div className="playButton">
            <p>...and press:</p>
            <button onClick id="playButton">
              PLAY
            </button>
          </div>
        </div>

        <div classname="gameRulesExpl">
          <button onClick={openPopup} id="gameRulesButton">
            Game rules explanation
          </button>
          <GameRules
            isOpen={isPopupOpen}
            onClose={closePopup}
            text=" In this game you should guess the names of the cities they are
          presented on the next pages on the photos. Click into input window and
          put there your guess of the name of presented city. When you are
          ready, click on the right arrow to go to the next page. At the end,
          you will see your total score and the comparison your score with the
          best results of other players. Good luck and have fun!"
          />
        </div>
      </div>
    </>
  );
}
