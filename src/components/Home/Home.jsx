import React, { useEffect, useRef } from "react";
import "./home.scss";
import { init } from "ityped";
import { gsap } from "gsap";

export default function Home() {
  const txtref = useRef();

  const leftCont = useRef();
  const leftCard = useRef();
  const rightImg = useRef();

  useEffect(() => {
    init(txtref.current, {
      showCursor: false,
      strings: ["Best app for your modern lifestyle ."],
      typeSpeed: 100,
      backDelay: 1000,
    });
    gsap.from(leftCont.current, { duration: 4, y: -500, delay: 3 });
    gsap.from(leftCard.current, { duration: 6, y: -700, delay: 4, ease:"bounce" });
    gsap.from(rightImg.current, { duration: 4, opacity:0,scale:0,rotation:720 },{duration:1,delay:3.5,opacity:1,scale:1,rotation:1 });

  });
  return (
    <div className="intro">
      <div className="left">
        <div className="leftContainer"  ref={leftCont}>
          <p className="titleBar d-flex justify-content-center align-items-center">
            <span>✔</span>&nbsp; #Editors Choice App of 2020
          </p>
          <div ref={txtref} className="itype"></div>
          <p className="yellowBtn">TRY FOR FREE</p>
        </div>

        <div className="row introCard" ref={leftCard}>
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
        <img className="introImg" src="assets/right.png" alt="mobi" ref={rightImg} />
      </div>
    </div>
  );
}
