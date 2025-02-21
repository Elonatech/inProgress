import React from "react";
import Img5 from "../../images/slider1.png";
import styled from "styled-components";
import "./FullExecDetail.css";
import Footer from "../../components/Footer/Footer";
import { faChurch, faAddressCard, faPhone, faCalendar, faUser, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { mobile } from "../../responsive";

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: #fff;
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0 0);
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${Img5});
    background-size: cover;
    background-attachment: fixed;
    background-position: 0 -150px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({height: "40vh", backgroundSize: "100%", backgroundPosition: "0 25%",  clipPath: "unset"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
      .giveNowBtn{
          margin-top: 2rem;
      }
    }
  }
`;

const FullExecDetail = () => {
    const location = useLocation()
    console.log(location);
    // const query = new URLSearchParams(location.search)
    // console.log(location.state.name)
    // console.log(query.get('id'))
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>{location.state.header}</h1>
        </div>
      </div>
      <div className="fullExecDetailContainer">
          <div className="fullExecDetailContainerLeft">
              <img src={location.state.img} alt="" />
          </div>
          <div className="fullExecDetailContainerRight">
              <div className="fullExecDetailContainerRightName">
                  <h2>{location.state.name}</h2>
              </div>
              <div className="fullExecDetailContainerRightTitle">
                  <h5>{location.state.title}</h5>
              </div>
              <div className="fullExecDetailContainerRightProvince">
              <FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faMapMarkerAlt} />
                  <h6>{location.state.province}</h6>
              </div>
              <div className="fullExecDetailContainerLeftContent">
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faUser} /> {location.state.position}</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faChurch} /> {location.state.church}</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faAddressCard} /> {location.state.address}</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon" icon={faPhone} /> {location.state.tel}</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faCalendar} /> {location.state.dOb}</span>
                <span><FontAwesomeIcon className="fa5Icon" id="fa5Icon"  icon={faEnvelope} /> {location.state.email}</span>
              </div>
              <div className="fullExecDetailContainerRightBio">
                  <p>
                  {location.state.bio}
                  </p>
              </div>
          </div>
      </div>
      <Footer />
     </Container> 
  )
}

export default FullExecDetail