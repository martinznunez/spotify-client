import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import FavouriteMusicIcon from "./FavouriteMusicIcon";

const ContainerTitleSlider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 4rem;
    font-weight: 100;
    opacity: 20%;
    margin-left: 10px;
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
    font-size: 1.1rem;
    opacity: 30%;
    padding-top: 5px;
    width: 230px;
    margin-left: 10px;
    text-transform: uppercase;
    color: #000;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
`;

const ContainerIconFavourite = styled.div`
  position: absolute;
  margin-left: 35%;
  margin-top: 34%;
`;

const ResourcesRow = ({ data, title, activeItem, setActiveItem, maximum }) => {
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

  return (
    <>
      <ContainerTitleSlider>
        <ContainerTitle>
          <h2>{title}</h2>
          <span>-</span>
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
          <img src={data.icons[0].url} alt="" />
        ) : (
          <img src={data.images[0].url} alt="" />
        )}
        <p> {data.name} </p>
      </Card>
    </>
  );
};

export default ResourcesRow;
