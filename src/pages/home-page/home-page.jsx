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
        <div className="grid__column"></div>
        <div className="grid__column">
          <Navigation date={date} />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
