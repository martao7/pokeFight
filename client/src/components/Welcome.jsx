import React from "react";
import GameRules from "./GameRules";

export default function Welcome() {
  return (
    <>
      <div>
        <div className="picture1">
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
