import React from "react";
import { Header } from "../components/header";

const AboutUs: React.FC = () => {
  return (
    <div className="root">
      <Header />

      <div className="about-us-container">
        <div className={`mb-[60px]`}>
          <h1>About Us</h1>
          <p className={`para-text mt-2`}>
            We are a company that specializes in providing quality products and
            services.
          </p>
        </div>

        <div className={`mb-[60px]`}>
          <h1>Our Mission</h1>
          <p className={`para-text mt-2`}>
            Our mission is to make life better for our customers through
            quality, innovation, and sustainability.
          </p>
        </div>

        <div className={`mb-[60px]`}>
          <h1>Our Team</h1>
          <p className={`para-text mt-2`}>
            We have a dedicated team of professionals who work around the clock
            to deliver the best experiences for our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
