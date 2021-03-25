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

  h2 {
    font-size: 1.7rem;
    font-weight: 900;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
  }
`;
const Title = () => {
  return (
    <>
      <ContainerHeaderTitle>
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
