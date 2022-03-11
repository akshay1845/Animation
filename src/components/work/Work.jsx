import React from "react";
import "./work.scss";
import { Container, Col, Row } from "react-bootstrap";

export default function Work() {
  return (
    <>
      <div className="work">
        <div className="leftwork">
          <div className="worktitle">
            <h1>Ultimate features That we built</h1>
            <p>
              the rise of mobile device transform the way consume information
              entirely.
            </p>
          </div>
          <div className="cards">
            <Container>
              <Row>
                <Col>
                  <div className="card">
                    <div className="top">
                      <img src="image/smartphone.png" alt="" />
                    </div>
                    <div className="center">App development</div>
                    <div className="bottom">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint odit maiores placeat velit at natus.
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="top">
                      <img src="image/pc.png" alt="" />
                    </div>
                    <div className="center">Web development</div>
                    <div className="bottom">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint odit maiores placeat velit at natus.
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="card">
                    <div className="top">
                      <img src="image/cloud-data.png" alt="" />
                    </div>
                    <div className="center">Cloud Storage</div>
                    <div className="bottom">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint odit maiores placeat velit at natus.
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="top">
                      <img src="image/handshake.png" alt="" />
                    </div>
                    <div className="center">Customer Support</div>
                    <div className="bottom">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint odit maiores placeat velit at natus.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="rightwork">
          <img className="rightImg" src="image/work.svg" alt="work img" />
        </div>
      </div>
    </>
  );
}
