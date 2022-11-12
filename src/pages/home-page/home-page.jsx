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
        <div className="grid__column">
          <div className="hero">
            <div className="hero__oval">
              <div className="oval__inner"></div>
            </div>
            <picture>
              <source srcSet="" media="min-width(600px)" />
              <img
                className="hero__image"
                src=""
                height={200}
                width={500}
              ></img>
            </picture>
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
