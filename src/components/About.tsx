import React from "react";
import styled from "styled-components";
import aboutImg from "../images/about.png";

export function About() {
  const AboutContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 5% 0px 5%;
    position: relative;
    box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.336);
  `;

  const AboutContainerText = styled.div`
    width: 45%;
    color: #fff;
    text-align: left;

    h1 {
      font-size: 3.5rem;
      color: #3d2514;
      font-weight: 500;
      margin: 0px;
      padding: 0px;
      font-family: "Alfa Slab One";
    }

    p {
      font-family: "Bebas Neue";
      letter-spacing: 1px;
      color: #252525;
      font-size: 1.2rem;
    }

    button {
      margin-top: 20px;
      width: 140px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-family: "Lato";
      background-color: #bf2222;
      box-shadow: 5px 10px 30px rgba(255, 103, 2, 0.336);
      border-radius: 5px;
      color: #ffffff;

      &:hover {
        background-color: transparent;
        transition: all ease 0.5s;
        color: #3d2514;
        border: 2px solid #3d2514;
      }
    }
  `;

  const AboutContainerImg = styled.div`
    width: 50%;

    img {
      width: 600px;
    }
  `;

  return (
    <AboutContainer id="about">
      <AboutContainerText>
        <h1>Upcoming Event</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum
          lectus, vehicula vitae posuere sit amet, lobortis in eros. Maecenas
          non erat ante. Ut maximus, ipsum non maximus cursus, mi quam cursus
          odio, non rhoncus quam purus in turpis. In vel enim venenatis, tempus
          ex nec, porttitor est. Quisque scelerisque neque non purus vehicula
          pretium. Integer eleifend nunc in nunc feugiat, sit amet tempor purus
          congue
        </p>
      </AboutContainerText>
      <AboutContainerImg>
        <img src={aboutImg} alt="" />
      </AboutContainerImg>
    </AboutContainer>
  );
}
