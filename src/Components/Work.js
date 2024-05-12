import React from "react";
import PickMeals from "../Assets/attendance.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/form.svg";
import Liberary from "../Assets/library.png"

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Attendance System",
      text: "Mark you attendance here",
    },
    {
      image: ChooseMeals,
      title: "Discussion Forum",
      text: "Express you thoughts and opinions here ",
    },
    {
      image: Liberary,
      title: "Library system",
      text: "Explore the world of literature here",
    },
    {
      image: DeliveryMeals,
      title: "Event management",
      text: "Explore the latest upcoming events",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Simplify processes, enhance organization, and optimize resource utilization with Task Center today!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
