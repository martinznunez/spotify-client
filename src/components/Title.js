import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const ContainerHeaderTitle = styled.div`
  width: 100%;
  background-color: #c6e4af;
  height: 130px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  .logo {
    display: none;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 900;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
  }
  @media screen and (min-width: 700px) {
    h2 {
      font-size: 1.9rem;
    }
    @media screen and (min-width: 840px) {
      h2 {
        font-size: 2.4rem;
      }
    }
    @media screen and (min-width: 1200px) {
      justify-content: space-around;
      .logo {
        display: block;
        width: 30%;
        img {
          width: 250px;
          height: auto;
        }
      }
      h2 {
        width: 60%;
      }
    }
  }
`;
const Title = () => {
  return (
    <>
      <ContainerHeaderTitle>
        <div className="logo">
          <img src="/assets/hero.svg" alt="" />
        </div>
        <h2>
          Your Favourite tunes all{" "}
          <FontAwesomeIcon
            icon={faSun}
            size="1x"
            name="search"
            style={{ color: "yellow" }}
          />{" "}
          and all{" "}
          <FontAwesomeIcon
            icon={faMoon}
            size="1x"
            name="search"
            style={{ color: "#000" }}
          />
        </h2>
      </ContainerHeaderTitle>
    </>
  );
};

export default Title;
