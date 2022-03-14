import React, { useState } from "react";
import "./service.scss";

function Service() {

  const [data, setData] = useState(0)
  const [data2, setData2] = useState(30)

  const [btn1, setBtn1] = useState("lightBlue")
  const [btn2, setBtn2] = useState("lightGrey")

  return (
    <div className=" main container d-flex justify-content-center">
      <div className="container2 ">
        <div className="top">
          <h1 className="mt-5">Get awesome features,without extra charges</h1>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ducimus
            modi deserunt repudiandae similique! Laudantium eum ipsa mollitia,
            rerum eligendi soluta facere odit provident incidunt deleniti,
            voluptates magnam non! Reprehenderit.
          </p>
        </div>

        <div className="bottom">
          <div className="btn mt-5 me-3 btn1" onClick={() => {
            setData(0);
            setData2(30);
            setBtn1("lightBlue");
            setBtn2("lightGrey");
            
          }}  style={{backgroundColor:btn1}}>Monthly</div>
          <div className="btn mt-5 btn2" onClick={() => {
            setData(20);
            setData2(100);
            setBtn1("lightGrey");
            setBtn2("lightBlue");
          }} style={{backgroundColor:btn2}}>Anually</div>
          <div className="scards row">
            <div className="scard">
              <div className="content">
                <h1>${data}<sub>/month</sub></h1>
                <h2>Business Class</h2>
                <span>for small length of office</span>
              </div>
              <p>
                Drag and drop builder
                1000,'s Templates
                Blog Support Tools
                Ecommerce store</p>
              <div className="try">start free trial</div>
            </div>
            <div className="scard ">
              <div className="content">
                <h1>${data2}<sub>/month</sub></h1>
                <h2>Business Class</h2>
                <span>for small length of office</span>
              </div>
              <p>
                Drag and drop builder
                1000,'s Templates
                Blog Support Tools
                Ecommerce store</p>

              <div className="try text-center">
                start free trial
              </div>

            </div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default Service;
