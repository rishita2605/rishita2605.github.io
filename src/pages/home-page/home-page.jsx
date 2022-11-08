import "../../assets/styles/home-page.css";
import Social from "../../components/social/social";
// import { useState, useEffect } from "react";

function HomePage() {
  return (
    <div className="main homepage" id="homepage">
      <div className="grid">
        <div className="grid__column">
          <Social />
        </div>
        <div className="grid__column"></div>
        <div className="grid__column"></div>
      </div>
    </div>
  );
}
export default HomePage;
