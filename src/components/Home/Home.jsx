import React, { useEffect, useRef } from "react";
import "./home.scss";
import { init } from "ityped";

export default function Home() {
  const txtref = useRef();

  useEffect(() => {
    init(txtref.current, {
      showCursor: false,
      strings: ["Best app for your modern lifestyle ."],
      typeSpeed: 100,
      backDelay: 1000,
    });
  });
  return (
    <div className="intro">
      <div className="left">
        <div className="leftContainer ">
          <p className="titleBar d-flex justify-content-center align-items-center">
            <span>✔</span>&nbsp; #Editors Choice App of 2020
          </p>
          <div ref={txtref} className="itype"></div>
          <p className="yellowBtn">TRY FOR FREE</p>
        </div>

        <div className="row introCard">
          <div className=" col-lg-6 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              numquam provident dicta!
            </p>
            <p style={{color:"orange"}}> $12.00</p>
            <p>Ios app</p>
          </div>
          <div className=" col-lg-6 ">
            <img variant="top" src="assets/left.svg" className="cardImg" alt="" />
          </div>
        </div>

      </div>

      <div className="rightc d-flex justify-content-center align-items-center ">
        <img className="introImg" src="assets/right.png" alt="mobi" />
      </div>
    </div>
  );
}
