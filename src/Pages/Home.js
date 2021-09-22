import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import titlePic from "../Data/imgs/titlePic.jpg";
import { Button, Header, HomeBody } from "../Style/styles";
import GoldPic from "../Data/imgs/Gold.png";
import SilverPic from "../Data/imgs/Silver.jpg";
import RingPic from "../Data/imgs/Rings.jpg";
import titleVideo from "../Data/video/titleVideo.mp4";

const Home = () => {
  const [video, setVideo] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setVideo(true);
      } else {
        setVideo(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      <Header>
        <div className="imgTitleContainer">
          {!video ? (
            <img src={titlePic} alt="" />
          ) : (
            <video width="100%" height="800px" autoPlay loop muted>
              <source src={titleVideo} alt="" type="video/mp4" />
            </video>
          )}
          <div className="titleText">
            <h1> Beautiful Jewelry</h1>
            <h2>for Him & Her</h2>
            <Link to="/shopping-cart/shop">
              <Button to="/Shop" renderAs={Link}>
                Shop
              </Button>
            </Link>
          </div>
        </div>
      </Header>
      <HomeBody>
        <div className="goldSilver">
          <Link to={{ pathname: "/shopping-cart/shop", state: { filter: "Gold" } }}>
            <img src={GoldPic} alt="Gold" />
            <div className="imgText">Gold</div>
          </Link>
          <Link
            to="/Shop"
            to={{ pathname: "/shopping-cart/shop", state: { filter: "Silver" } }}
          >
            <img src={SilverPic} alt="Silver" />
            <div className="imgText">Silver</div>
          </Link>
        </div>
        <div className="comingSoon">
          <img src={RingPic} alt="Rings" />
          <div className="imgText">Coming Soon</div>
        </div>
      </HomeBody>
    </div>
  );
};

export default Home;
