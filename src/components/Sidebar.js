import React from "react";
import User from "./User";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import {
  faSearch,
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

const ContainerIcon = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 25px;
  text-align: center;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-left: 10%;
  width: 80%;
`;

const Sidebar = () => {
  return (
    <>
      <Container>
        <User />

        <NavLink
          to="/home"
          activeStyle={{
            fontWeight: "bold",
            width: "125%",

            background: "linear-gradient(to right,#7974DD, transparent 95%)",
          }}
        >
          <ContainerIcon>
            <FontAwesomeIcon
              icon={faHeadphonesAlt}
              size="2x"
              style={{ height: "90px", color: "#fff" }}
            />
          </ContainerIcon>
        </NavLink>
        <NavLink
          to="/search"
          activeStyle={{
            fontWeight: "bold",
            width: "125%",

            background: "linear-gradient(to right,#7974DD, transparent 95%)",
          }}
        >
          <ContainerIcon>
            <FontAwesomeIcon
              icon={faSearch}
              size="2x"
              style={{ height: "100px", color: "#fff" }}
            />
          </ContainerIcon>
        </NavLink>
        <NavLink
          to="/favourite"
          activeStyle={{
            fontWeight: "bold",
            width: "125%",

            background: "linear-gradient(to right,#7974DD, transparent 95%)",
          }}
        >
          <ContainerIcon>
            <FontAwesomeIcon
              name="Favourite"
              icon={faHeart}
              size="2x"
              style={{ height: "100px", color: "#fff" }}
            />
          </ContainerIcon>
        </NavLink>
        <NavLink
          to="/playmusic"
          activeStyle={{
            fontWeight: "bold",
            width: "125%",

            background: "linear-gradient(to right,#7974DD, transparent 95%)",
          }}
        >
          <ContainerIcon>
            <FontAwesomeIcon
              icon={faPlayCircle}
              size="2x"
              name="history"
              style={{ height: "100px", color: "#fff" }}
            />
          </ContainerIcon>
        </NavLink>
      </Container>
    </>
  );
};

export default Sidebar;
