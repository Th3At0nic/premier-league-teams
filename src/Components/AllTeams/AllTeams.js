import React from "react";
import "./AllTeams.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AllTeams = (props) => {
  const { strTeam, idTeam, strTeamBadge, strSport } = props.team;

  return (
    <div className="m-3 mt-4">
      <div className="team-box">
        <div className="mb-3">
          <img src={strTeamBadge} alt="404,sorry team logo not found" />
        </div>
        <div>
          <h4>{strTeam}</h4>
          <p>Sports Type: {strSport}</p>
          <Link to={`/team/${idTeam}`}>
            <button className="btn btn-primary mt-3 mb-3 ms-5 me-5">
              Explore <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;
