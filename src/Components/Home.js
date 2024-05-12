import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
// import BannerImage from "../Assets/Logo.svg"
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt=""  width={1200}/>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           TASK CENTER
          </h1>
          <p className="primary-text">
            Simplify processes, enhance organization, and optimize resource utilization with Task Center today!
          </p>
          {/* <FiArrowRight /> */}
          <button className="secondary-button">
            Proceed Now{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
