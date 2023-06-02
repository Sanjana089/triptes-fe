import Header from "./Header";
import "./About.css";

import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="about-us-container">
        <div className="content-container ">
          <h1 className="title">About Us</h1>
          <div className="info-box">
            <p className="info-details">
              As Tripti means moksha, internal shanti, content, Similarly, we
              call a satisfied-happy person triptes. As Lord Krishna narrated
              various paths to attain this tripti in Gita, our platform helps
              people to attain this happiness through karma and Bhakti yoga. We
              have been organising various teertha yatras (trips to holy places)
              since 2014 at breakeven costs along with contributing and
              organising various donation and charity camps. At triptes we will
              not only organise these teerthas for pan India but will also come
              with many other ways to preach and attain god like Homa (Havan),
              audio and video content and bhajans, books and organise various
              charity events. People can participate in all these activities and
              events and Be Tript.
            </p>
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <h1 className="title-mobile">About Us</h1>
        <p className="about-us-mobile">
          As Tripti means moksha, internal shanti, content, Similarly, we call a
          satisfied-happy person triptes. As Lord Krishna narrated various paths
          to attain this tripti in Gita, our platform helps people to attain
          this happiness through karma and Bhakti yoga. We have been organising
          various teertha yatras (trips to holy places) since 2014 at breakeven
          costs along with contributing and organising various donation and
          charity camps. At triptes we will not only organise these teerthas for
          pan India but will also come with many other ways to preach and attain
          god like Homa (Havan), audio and video content and bhajans, books and
          organise various charity events. People can participate in all these
          activities and events and Be Tript.
        </p>
      </div>
      <div className="our-mission">
        <div className="left-column">
          <h1 className="our-mission-title">Our Mission</h1>
          <p className="our-mission-text">
            Triptes focus on curating only the highest quality content. Our
            focus is on selecting and presenting the topmost information.{" "}
          </p>
          <div className="two-column-cards-container">
            {/* <div className="right-column"> */}
              <div className="card">
                <h2 className="card-title circle">1</h2>
                <p className="card-description">
                  Our users receive the most valuable and relevant content
                  available.
                </p>
              </div>
              <div className="card">
                <h2 className="card-title circle">2</h2>
                <p className="card-description">
                  We organise one teertha yatra at a time so that every detail
                  is meticulously planned and executed, allowing us to provide
                  you with an unparalleled level of customer satisfaction.
                </p>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="right-column">
          <img
            src="./kedarnath.jpg"
            alt="temple"
            className="our-mission-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
