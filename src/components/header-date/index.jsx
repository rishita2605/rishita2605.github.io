import "../../assets/styles/style.css";
// import { Icon } from "@iconify/react";
// import { useState, useEffect } from "react";
function HeaderDate() {
  const date = new Date();
  console.log(date.getMonth(), date.getFullYear());
  return (
    <div className="date">
      <div className="date__month">{date.getMonth() + 1}</div>
      <div className="date__dor">•</div>
      <div className="date__year">{date.getFullYear()}</div>
    </div>
  );
}
export default HeaderDate;
