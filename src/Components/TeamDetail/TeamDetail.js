import React, { useEffect, useState } from "react";
import "./TeamDetail.css";
import { useParams } from "react-router";
import maleImage from "../../images/boys.png";
import femaleImage from "../../images/girls.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVenusMars,
  faMapMarkerAlt,
  faFlag,
  faFutbol,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../Header/Header";

const TeamDetail = () => {
  const [teamDetail, setTeamDetail] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamDetail(data.teams[0]));
  }, [id]);
  const {
    strTeam,
    intFormedYear,
    strDescriptionEN,
    strFacebook,
    strInstagram,
    strCountry,
    strTeamBadge,
    strTwitter,
    strYoutube,
    strSport,
  } = teamDetail;

  const [gender, setGender] = useState(true);
  const isGender = gender ? <span> Male</span> : <span> Female</span>;
  const isGender2 = gender ? (
    <FontAwesomeIcon icon={faMars} />
  ) : (
    <FontAwesomeIcon icon={faVenus} />
  );
  return (
    <div>
      <Header logo={strTeamBadge}></Header>
      <div className=" container">
        <div className="team-history row">
          <div className="team-intro">
            <h1 className="mb-4">
              <b>{strTeam}</b>
            </h1>
            <b>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded:{" "}
                {intFormedYear}
              </p>
              <p>
                <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
              </p>
              <p>
                <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
              </p>
              <p>
                {isGender2} Gender: {isGender}
              </p>
            </b>
            <button
              className="btn btn-primary mt-1 mb-1 ms-5 me-5 p-2"
              onClick={() => setGender(!gender)}
            >
              <b>
                <FontAwesomeIcon icon={faVenusMars} /> Change Gender
              </b>
            </button>
          </div>

          <div className="col m-2 row justify-content-end">
            {gender ? (
              <img src={maleImage} alt="" />
            ) : (
              <img src={femaleImage} alt="" />
            )}
          </div>
        </div>
        <br />
        <br />
        <div className="text-white p-3 mt-2 text-justify">
          <p>
            <b>{strDescriptionEN}</b>{" "}
          </p>
          <br />
          <br />
          <p>
            <b>
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae possimus aliquid modi deleniti reprehenderit enim
                iusto sint adipisci ullam quo voluptatum doloremque commodi
                provident eius, optio voluptatibus nihil eveniet labore. Aut,
                natus ratione ex illum magni nihil est repellendus neque sint
                similique amet ab temporibus in facere dolore! Aliquid ducimus
                voluptatibus impedit alias suscipit! Laudantium facilis
                provident quam quis dicta, perferendis tenetur animi? Cum
                impedit voluptatum enim recusandae explicabo quasi consequatur
                ea possimus vero error facilis magnam, id, dolorem ratione
                eveniet iusto perferendis? Illo, quam possimus labore alias
                pariatur tempore excepturi suscipit atque est. Dolore amet nobis
                numquam ab voluptatibus?
              </i>
            </b>
          </p>
        </div>
        <br />
        <br />
        <footer className="text-center pb-5">
          <h1>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://${strFacebook}`}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </span>{" "}
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://${strTwitter}`}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </span>{" "}
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://${strInstagram}`}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </span>{" "}
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://${strYoutube}`}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </span>
          </h1>
        </footer>
      </div>
    </div>
  );
};

export default TeamDetail;
