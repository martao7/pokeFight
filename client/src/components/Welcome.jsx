import React from "react";
import GameRules from "./GameRules";

export default function Welcome() {
  return (
    <>
      <div className="welcome">
        <div className="picture1">
          {/* <img src="https://pixabay.com/get/g45df5d9d733b7802cd448d27cd627dd3e35a3991106a5b25ab0657c6fb127ac0281c8dc6bd901242eea13e42f271f73fc93b186e2d1050c095118cf64e1a3565_1920.jpg" /> */}
          <div className=""></div>
        </div>

        <div className="usersName">
          <form onSubmit={""}>
            <input id="name" type="text" placeholder="name" value="" />
          </form>
        </div>
        <div>
          <GameRules />
        </div>
      </div>
    </>
  );
}
