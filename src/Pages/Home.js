import React from "react";
import { Link } from "react-router-dom";
import titlePic from "../Data/imgs/titlePic.jpg";
import { Button, Header, HomeBody } from "../Style/styles";
import GoldPic from "../Data/imgs/Gold.png";
import SilverPic from "../Data/imgs/Silver.jpg";
import RingPic from "../Data/imgs/Rings.jpg";

const Home = () => {
  return (
    <div>
      <Header>
        <div className="imgTitleContainer">
          <img src={titlePic} alt=""/>
          <div className="titleText">
            <h1> Beatiful Julery</h1>
            <h2>for Him & Her</h2>
            <Link to="/Shop">
              <Button to="/Shop" renderAs={Link}>
                Shop
              </Button>
            </Link>
          </div>
        </div>
      </Header>
      <HomeBody>
        <div className="goldSilver">
          <div>
            <img src={GoldPic} alt="Gold" />
            <div className="imgText">Gold</div>
          </div>
          <div>
            <img src={SilverPic} alt="Silver" />
            <div className="imgText">Silver</div>
          </div>
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
