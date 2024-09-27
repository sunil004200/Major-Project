import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            “KOHINOOR: Where every meal is a royal experience.
            Indulge in a legacy of taste that shines as bright
            as its namesake diamond.” 🍛
                     At KOHINOOR, we don’t just serve food; we 
                     serve memories that linger long after the 
                     last bite. Join us for a meal where every 
                     dish is a celebration of taste and every 
                     moment is steeped in hospitality that’s fit for royalty. 
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;