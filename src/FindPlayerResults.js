import React from "react";
import { useNavigate } from "react-router-dom";
import "./FindPlayerResults.css";
import PlayerResult from "./PlayerResult";

function FindPlayerResults() {
  return (
    <div className="findPlayerResults__container">
      Search Results
      <PlayerResult id={123456} forename={"Freya"} surname={"Ridout"} />
    </div>
  );
}

export default FindPlayerResults;
