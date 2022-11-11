import "../../assets/styles/style.css";
// import { useState, useEffect } from "react";
function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__item"></div>
      <div className="navigation__item">
        <a className="nav-item" href="#">
          {/* pass this through props maybe as an array */}
          <div className="nav-item__menu">home.</div>
          <div className="nav-item__id">01</div>
        </a>
        <a className="nav-item" href="#">
          {/* pass this through props maybe as an array */}
          <div className="nav-item__menu"></div>
          <div className="nav-item__id">02</div>
        </a>
        <a className="nav-item" href="#">
          {/* pass this through props maybe as an array */}
          <div className="nav-item__menu"></div>
          <div className="nav-item__id">03</div>
        </a>
        <a className="nav-item" href="#">
          {/* pass this through props maybe as an array */}
          <div className="nav-item__menu"></div>
          <div className="nav-item__id">04</div>
        </a>
      </div>
      <div className="navigation__item"></div>
    </div>
  );
}

export default Navigation;
