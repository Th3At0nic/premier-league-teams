import React, { useEffect, useState } from "react";
import "./TeamDetail.css";
import { useParams } from "react-router";
import maleImage from "../../images/male.png";
import femaleImage from "../../images/female.png";
import facebookLogo from "../../images/Facebook.png";
import twitterImage from "../../images/Twitter.png";
import youTubeImage from "../../images/youTube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVenusMars,
  faMapMarkerAlt,
  faFlag,
  faFutbol,
  faMars,
  faVenus,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-solid-svg-icons";

const TeamDetail = () => {
  const [teamDetail, setTeamDetail] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamDetail(data.teams[0]));
  }, [id]);
  //   console.log(teamDetail.strTeam);
  const {
    strTeam,
    idLeague,
    idTeam,
    intFormedYear,
    intStadiumCapacity,
    strCountry,
    strDescriptionEN,
    strFacebook,
    strGender,
    strInstagram,
    strStadium,
    strStadiumThumb,
    strTeamBadge,
    strTeamBanner,
    strTeamLogo,
    strTwitter,
    strSport,
    strTeamFanart3,
    strTeamFanart4,
    strTeamFanart2,
    strTeamFanart1,
  } = teamDetail;

  const [gender, setGender] = useState(true);
  const isGender = gender ? <span> Male</span> : <span> Female</span>;
  const isGender2 = gender ? (
    <FontAwesomeIcon icon={faMars} />
  ) : (
    <FontAwesomeIcon icon={faVenus} />
  );
  return (
    <div className="bg bg-white container mt-5">
      <header>
        <img className="team-banner" src={strTeamBanner} alt="" />
      </header>
      <div className="team-history col-md-12">
        <div className="row col-md-6 col-sm-12 order-first">
          <div className="col p-5">
            <div className="mb-4">
              <h1>{strTeam}</h1>
            </div>
            <div className="team-intro">
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
              <br />
              <button
                className="btn btn-primary mt-1 mb-1 ms-5 me-5 p-2"
                onClick={() => setGender(!gender)}
              >
                <FontAwesomeIcon icon={faVenusMars} /> Change Gender
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 row col-sm-12 order-last mt-5">
          {gender ? (
            <img src={maleImage} alt="" />
          ) : (
            <img src={femaleImage} alt="" />
          )}
        </div>
      </div>
      <br />
      <br />
      <div>
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
              voluptatibus impedit alias suscipit! Laudantium facilis provident
              quam quis dicta, perferendis tenetur animi? Cum impedit voluptatum
              enim recusandae explicabo quasi consequatur ea possimus vero error
              facilis magnam, id, dolorem ratione eveniet iusto perferendis?
              Illo, quam possimus labore alias pariatur tempore excepturi
              suscipit atque est. Dolore amet nobis numquam ab voluptatibus?
            </i>
          </b>
        </p>
      </div>
      <br />
      <br />
      <div className="">
        <img src={femaleImage} alt="" />{" "}
      </div>
    </div>
  );
};

export default TeamDetail;
