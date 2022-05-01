import React from "react";
import { useNavigate } from "react-router-dom";
import "./FindPlayer.css";

function FindPlayer() {
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    navigate("/results");
  };

  return (
    <div className="findPlayer__container">
      <h2>Link Existing Player</h2>
      <form>
        <div className="findPlayer_search">
          <p>Forename</p>
          <input type="text"></input>
          <p>Surname</p>
          <input type="text"></input>
          <p>Date of Birth</p>
          <input type="date"></input>
        </div>
        <button
          type="submit"
          onClick={search}
          className="findPlayer__searchButton"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default FindPlayer;
