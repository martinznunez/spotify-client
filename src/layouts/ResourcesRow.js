import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "../components/Slider";

import FavouriteMusicIcon from "./FavouriteMusicIcon";

const ContainerTitleSlider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  span {
    width: 20px;
    margin-top: 7px;
    border-bottom: solid 2px;
    opacity: 20%;
    margin-left: -10px;
  }
  @media screen and (min-width: 450px) {
    width: 100%;
  }
  @media screen and (min-width: 840px) {
    span {
      font-weight: 100;
      width: 200px;
      border-bottom: solid 2px;
      opacity: 20%;
      margin-left: -10px;
    }
  }
`;

const ContainerTitle = styled.div`
  width: 90%;
  height: 70px;
  margin-top: 5px;
  opacity: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1rem;
    opacity: 30%;
    padding-top: 5px;
    width: 200px;
    margin-left: 10px;
    text-transform: uppercase;
    color: #000;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  @media screen and (min-width: 700px) {
    h2 {
      width: 300px;
    }
    @media screen and (min-width: 840px) {
    }
  }
`;

const Card = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30%;

  p {
    margin-top: 5px;
    font-size: 1rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    color: #000;
    font-weight: 900;
  }
  a {
    text-decoration: none;
  }
  img {
    width: 240px;
    height: 270px;
    border-radius: 10%;
  }
  span {
    font-size: 0.5rem;
    text-decoration: none;
  }
  @media screen and (min-width: 840px) {
    img {
      width: 270px;
      height: 290px;
    }
  }
`;

const ContainerIconFavourite = styled.div`
  position: absolute;
  margin-left: 40%;
  margin-top: 40%;

  :hover {
    transition: 1s;
    padding-top: 10px;
  }
  @media screen and (min-width: 450px) {
    margin-left: 35%;
    margin-top: 33%;
  }
  @media screen and (min-width: 530px) {
    margin-left: 30%;
    margin-top: 28%;
  }
  @media screen and (min-width: 615px) {
    margin-top: 24%;
  }
  @media screen and (min-width: 700px) {
    margin-top: 20%;
    margin-left: 25%;
  }
  @media screen and (min-width: 840px) {
    margin-top: 20%;
    margin-left: 23%;
  }
`;

const ResourcesRow = ({ data, title, activeItem, setActiveItem, maximum }) => {
  const containerRef = useRef();

  const handleSetActiveCategory = (direction) => {
    if (activeItem === maximum.length - 1) {
      setActiveItem((activeItem) => activeItem - 1);
    }

    if (activeItem <= 0) {
      setActiveItem((activeItem) => activeItem + 1);
    }
    if (direction === "forward") {
      setActiveItem((activeItem) => activeItem + 1);
    }
    if (direction === "back") {
      setActiveItem((activeItem) => activeItem - 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      console.log(
        "%c 🍉 containerRef.current: ",
        "font-size:20px;background-color: #6EC1C2;color:#fff;",
        containerRef.current.clientWidth
      );
    }
  }, []);

  return (
    <div ref={containerRef}>
      <ContainerTitleSlider>
        <ContainerTitle>
          <h2>{title}</h2>
          <span></span>
        </ContainerTitle>
        <Slider
          stepCallback={handleSetActiveCategory}
          activeStep={activeItem}
          maximum={data.length}
        />
      </ContainerTitleSlider>

      <Card key={data.id}>
        <ContainerIconFavourite>
          <FavouriteMusicIcon data={data} />
        </ContainerIconFavourite>
        {data.icons ? (
          <img
            title={data.name}
            src={data.icons[0].url}
            alt=""
            style={{ zIndex: "2" }}
          />
        ) : (
          <img title={data.name} src={data.images[0].url} alt="" />
        )}
        <p> {data.name} </p>
      </Card>
    </div>
  );
};

export default ResourcesRow;
