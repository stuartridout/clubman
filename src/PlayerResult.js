import React from "react";
import { useNavigate } from "react-router-dom";
import "./Player.css";
import "./PlayerResult.css";

function PlayerResult({ id, forename, surname }) {
  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="player__container">
      <p className="player__mkcfcid">{id}</p>
      <p className="player__name">
        {forename} {surname}
      </p>
      <button type="submit" onClick={add}>
        Add
      </button>
    </div>
  );
}

export default PlayerResult;
