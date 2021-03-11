import React, { useEffect, useState } from "react";
import AllTeams from "../AllTeams/AllTeams";
import Header from "../Header/Header";
import leagueLogo from "../../images/leagueLogo.svg";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <div>
      <div >
        <Header logo={leagueLogo}></Header>
      </div>
      <div className="row">
        {teams.map((team) => (
          <AllTeams team={team}></AllTeams>
        ))}
      </div>
    </div>
  );
};

export default Home;
