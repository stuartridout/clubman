import React from "react";
import "./Player.css";

function Player({ id, forename, surname, noOfTeams }) {
  return (
    <div className="player__container">
      <p className="player__mkcfcid">{id}</p>
      <p className="player__name">
        {forename} {surname}
      </p>
      <p className="player__noOfTeams">{noOfTeams} registration(s)</p>
    </div>
  );
}

export default Player;
