import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Player from "./Player";

function Home() {
  const navigate = useNavigate();
  const link = (e) => {
    e.preventDefault();
    navigate("/find");
  };

  return (
    <div className="Home">
      <div className="home__myPlayers">
        <h1>My Players</h1>
        <Player
          id={123456}
          forename={"Freya"}
          surname={"Ridout"}
          noOfTeams={0}
        />
        <Player id={77845} forename={"Leo"} surname={"Ridout"} noOfTeams={0} />
        <button onClick={link} className="home__linkPlayer">
          Link Existing Player
        </button>
        <button className="home__registerPlayer">Register New Player</button>
      </div>
    </div>
  );
}

export default Home;
