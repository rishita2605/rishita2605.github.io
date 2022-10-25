import "./HomePage.css";
import { useState, useEffect } from "react";
import ProfilePicture from "../profile-picture/profile-picture";
function HomePage() {
  return (
    <div className="homepage">
      <ProfilePicture />
    </div>
  );
}
export default HomePage;
