import "../../assets/styles/style.css";
import { Icon } from "@iconify/react";
// import { useState, useEffect } from "react";
function Social() {
  return (
    <div className="socials">
      <a className="socials__icon">
        <Icon icon="icon-park-solid:twitter" />
      </a>
      <a className="socials__icon">
        <Icon icon="entypo-social:github" />
      </a>
      <a className="socials__icon">
        <Icon icon="bxl:gmail" />
      </a>
      <a className="socials__icon">
        <Icon icon="eva:linkedin-fill" />
      </a>
    </div>
  );
}
export default Social;
