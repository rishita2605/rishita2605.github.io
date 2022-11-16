import "../../assets/styles/home-page.css";
import HeaderDate from "../../components/header-date";
import Navigation from "../../components/navigation/navigation";
import Social from "../../components/social/social";
// import { useState, useEffect } from "react";

function HomePage() {
  const date = <HeaderDate />;
  return (
    <div className="main homepage" id="homepage">
      <div className="grid">
        <div className="grid__column">
          <Social />
        </div>
        <div className="grid__column hero__column">
          <div className="hero">
            <div className="hero__oval">
              <div className="oval__outer">
                <div className="oval__inner">
                  <div className="oval__text">
                    <div className="text__main">Rishita Raha</div>
                    <div className="text__sub">Based in Bangalore | India</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <picture> */}
            {/* <source srcSet="" media="min-width(600px)" /> */}
            <img
              className="hero__image"
              src="https://user-images.githubusercontent.com/64982040/201480070-fc81d2da-0b64-499d-b126-be4114edfee5.png"
            ></img>
            {/* </picture> */}
          </div>
        </div>
        <div className="grid__column">
          <Navigation date={date} />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
