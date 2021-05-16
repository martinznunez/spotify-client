import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "../components/Slider";

import FavouriteMusicIcon from "./FavouriteMusicIcon";

const ContainerPrimary = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;

  margin: auto;
`;

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
  width: 200px;

  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;

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
    width: 220px;
    height: 220px;
    border-radius: 10%;
  }
  span {
    font-size: 0.5rem;
    text-decoration: none;
  }

  @media screen and (min-width: 500px) {
    width: 330px;
    height: 300px;
  }
  img {
    width: 230px;
    height: 260px;
  }
  @media screen and (min-width: 610px) {
    img {
      width: 290px;
      height: 270px;
    }
  }
  @media screen and (min-width: 650px) {
    img {
      width: 310px;
      height: 300px;
    }
  }
  @media screen and (min-width: 720px) {
    img {
      width: 150px;
      height: 170px;
    }
  }
  @media screen and (min-width: 790px) {
    img {
      width: 190px;
    }
  }
  @media screen and (min-width: 920px) {
    img {
      width: 220px;
      height: 200px;
    }
  }
  @media screen and (min-width: 1020px) {
    img {
      width: 250px;
      height: 230px;
    }
  }
  @media screen and (min-width: 1100px) {
    img {
      width: 160px;
      height: 150px;
    }
  }
  @media screen and (min-width: 1200px) {
    img {
      width: 220px;
      height: 210px;
    }
  }
  @media screen and (min-width: 1300px) {
    img {
      width: 240px;
      height: 220px;
    }
  }
  @media screen and (min-width: 1400px) {
    img {
      width: 270px;
      height: 230px;
    }
  }
  @media screen and (min-width: 1520px) {
    img {
      width: 290px;
      height: 250px;
    }
  }
  @media screen and (min-width: 1610px) {
    img {
      width: 320px;
      height: 290px;
    }
  }
  @media screen and (min-width: 1730px) {
    img {
      width: 330px;
      height: 280px;
    }
  }
  @media screen and (min-width: 1820px) {
    img {
      width: 250px;
      height: 220px;
    }
  }
  @media screen and (min-width: 1900px) {
    img {
      width: 270px;
      height: 230px;
    }
  }
`;

const ContainerIconFavourite = styled.div`
  position: absolute;
  margin-left: 55%;
  margin-top: 60%;

  :hover {
    transition: 1s;
    padding-top: 10px;
  }
  @media screen and (min-width: 500px) {
    margin-top: 50%;
  }
  @media screen and (min-width: 560px) {
    margin-top: 45%;
    margin-left: 40%;
  }
  @media screen and (min-width: 720px) {
    margin-top: 18%;
    margin-left: 21%;
  }
  @media screen and (min-width: 920px) {
    margin-top: 18%;
    margin-left: 27%;
  }
  @media screen and (min-width: 1020px) {
    margin-top: 22%;
  }
  @media screen and (min-width: 1100px) {
    margin-top: 9%;
    margin-left: 15%;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 13%;
    margin-left: 19%;
  }
  @media screen and (min-width: 1520px) {
    margin-top: 14%;
    margin-left: 20%;
  }
  @media screen and (min-width: 1610px) {
    margin-top: 16%;
    margin-left: 21%;
  }
  @media screen and (min-width: 1820px) {
    margin-top: 10%;
    margin-left: 14%;
  }
`;

const ContainerCards = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  position: relative;

  .boxes {
    display: flex;
    overflow-x: hidden;
    max-width: 100%;
    position: relative;
  }
`;

const ResourcesRow = ({ data, title, maximum }) => {
  const [newData, setNewData] = useState();

  useEffect(() => {
    setNewData(data);
  }, [data]);

  const handleSetActiveCategory = (direction) => {
    const copiedData = [...newData];
    if (direction === "forward") {
      const elementToExtract = copiedData.splice(0, 1);
      const finalData = [...copiedData, ...elementToExtract];
      setNewData(finalData);
    }
    if (direction === "back") {
      const copiedData = [...newData];

      maximum = maximum - 1;

      const elementToExtract = copiedData.splice(maximum, 1);
      const finalData = [...elementToExtract, ...copiedData];
      setNewData(finalData);
    }
  };

  return (
    <ContainerPrimary>
      <ContainerTitleSlider>
        <ContainerTitle>
          <h2>{title}</h2>
          <span></span>
        </ContainerTitle>
        <Slider stepCallback={handleSetActiveCategory} />
      </ContainerTitleSlider>
      <ContainerCards>
        <div className="boxes">
          {newData
            ? newData.map((album, i) => (
                <Card key={album.id}>
                  <ContainerIconFavourite>
                    <FavouriteMusicIcon data={album} />
                  </ContainerIconFavourite>
                  {album.icons ? (
                    <img
                      title={album.name}
                      src={album.icons[0].url}
                      alt=""
                      style={{ zIndex: "2" }}
                    />
                  ) : (
                    <img title={album.name} src={album.images[0].url} alt="" />
                  )}
                  <p> {album.name} </p>
                </Card>
              ))
            : null}
        </div>
      </ContainerCards>
    </ContainerPrimary>
  );
};

export default ResourcesRow;
