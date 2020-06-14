import React from "react";
import IcStar from "../assets/images/ic-star.svg";

export default function Star(props) {
  return (
    <div className={props.className}>
      <img src={IcStar} alt="" />
      <img src={IcStar} alt="" />
      <img src={IcStar} alt="" />
      <img src={IcStar} alt="" />
      <img src={IcStar} alt="" />
    </div>
  );
}
