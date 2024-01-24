import React from "react";
import { Accordion } from "react-bootstrap";
import "../css/main.css";

const MainPage = () => {
  return (
    <div style={{ marginLeft: "50px", marginRight: "50px" }}>
      <br></br>

      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-header">
            <div style={{ fontWeight: "bold" }}>
              {" "}
              Welcome to the Smart I.O.T Lab
            </div>
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            Kyonggi University Smart Internet of Things Laboratory<br></br>
            <br></br>경기대학교 스마트 사물인터넷 연구실
          </Accordion.Body>
        </Accordion.Item>
        <br></br> <br></br> <br></br>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accordion-header">
            연구실 소개 Laboratory introduction
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            현대 사회는 사람 뿐만 아니라 사물까지도 인터넷으로 연결되어 정보를
            공유하며 소통하고 있습니다.<br></br>
            <br></br>
            이러한 사회에 발맞추어 경기대학교 컴퓨터공학부 Smart IoT Lab 에서는
            보다 자유롭고 활발한 정보 교류를 통해 인간 감성과 IT 기술이 결합한
            최신 인터넷 기술에 대한 연구를 수행하고 있습니다.<br></br>
            <br></br>
            이를 위해 본 연구실에서는 김남기 교수님의 지도로 석박사 과정
            대학원생 및 학부 연구생들이 최신 IT 기술 (IoT, Network, Internet
            기술 등)을 함께 배우며 연구하고 있습니다.<br></br>
            <br></br>
            그리고 대학원 연구를 위한 다양한 기초 학습 스터디와 공모전도 함께
            실시하고 있습니다.<br></br>
            <br></br>
            Smart IoT Lab 은 인터넷 최신 기술을 함께 배우고 연구할 수 있는
            의욕적인 학부생들을 언제나 기다리고 있습니다.<br></br>
            <br></br>
            연구실에 대해 좀 더 알고 싶은 사람은 언제나 교수님이나 연구실 소속
            학생들에게 문의 바랍니다.<br></br>
            <br></br>
            <div style={{ fontWeight: "bold" }}>
              문은 두드리는 사람에게만 열릴 것입니다. :)
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default MainPage;
