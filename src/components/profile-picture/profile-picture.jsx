import "../components.css";
// import { useState, useEffect } from "react";
function ProfilePicture() {
  return (
    <div className="profile">
      <div className="profile__container">
        <img
          src="https://user-images.githubusercontent.com/64982040/197863192-0d31fc26-affd-4bf5-b17e-f0264afaa883.JPG"
          alt="profile"
          className="profile__picture"
        ></img>
        <div className="profile__text">front-end-developer.</div>
      </div>
    </div>
  );
}
export default ProfilePicture;
