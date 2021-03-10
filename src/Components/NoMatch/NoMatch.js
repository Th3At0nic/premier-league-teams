import React from "react";
import "./NoMatch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faBinoculars } from "@fortawesome/free-solid-svg-icons";

const NoMatch = () => {
  return (
    <div className="bg bg-white text-center mt-5">
      <>
        <span className="text-secondary">
          <FontAwesomeIcon icon={faFrown} />
        </span>{" "}
        <span className="text-info">
          <FontAwesomeIcon icon={faBinoculars} />
        </span>
      </>
      <div>
        <h3 className="text-primary">We looked high and low, but…</h3>
        <p className="text-danger">what you are looking for isn't here!</p>
      </div>
    </div>
  );
};

export default NoMatch;
