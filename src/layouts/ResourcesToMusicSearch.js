import React from "react";
import styled from "styled-components";

import FavouriteMusicIcon from "./FavouriteMusicIcon";
import FeatureToAddMusic from "./FeatureToAddMusic";

const Card = styled.div`
  width: 100%;
  height: 210px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30%;

  p {
    margin-top: 7px;
    font-size: 1rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    color: #000;
    font-weight: 900;
  }

  img {
    width: 240px;
    height: 260px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10%;
  }
  @media screen and (min-width: 900px) {
    img {
      width: 270px;
      height: 270px;
      padding: 0px;
    }
    margin-bottom: 50%;
  }
  @media screen and (min-width: 1040px) {
    p {
      margin-bottom: 10px;
    }
    img {
      width: 300px;
      height: 300px;
      padding: 0px;
    }
  }
  @media screen and (min-width: 900px) {
    img {
      width: 280px;
      height: 300px;
    }
    p {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 1170px) {
    img {
      width: 300px;
      padding-bottom: 30px;
    }
  }
`;

const ContainerIconFavourite = styled.div`
  position: absolute;
  margin-left: 40%;
  margin-top: 40%;

  @media screen and (min-width: 450px) {
    margin-left: 35%;
    margin-top: 33%;
  }
  @media screen and (min-width: 530px) {
    margin-left: 30%;
    margin-top: 28%;
  }
  @media screen and (min-width: 615px) {
    margin-left: 27%;
    margin-top: 24%;
  }
  @media screen and (min-width: 700px) {
    margin-left: 23%;
    margin-top: 20%;
  }
  @media screen and (min-width: 840px) {
    margin-left: 20%;
    margin-top: 17%;
  }
  @media screen and (min-width: 900px) {
    margin-left: 20%;
    margin-top: 20%;
  }
  @media screen and (min-width: 1170px) {
    margin-left: 18%;
    margin-top: 17%;
  }
  @media screen and (min-width: 1170px) {
    margin-left: 16%;
    margin-top: 14%;
  }
  @media screen and (min-width: 1670px) {
    margin-left: 14%;
    margin-top: 12%;
  }
  @media screen and (min-width: 1900px) {
    margin-left: 12%;
    margin-top: 11%;
  }
`;

const ContainerIconPlay = styled.div`
  position: absolute;
  margin-top: 23%;
  @media screen and (min-width: 700px) {
    margin-top: 18%;
  }
  @media screen and (min-width: 840px) {
    margin-top: 10%;
  }
`;

const ResourcesToMusicSearch = ({ musicSearch }) => {
  return (
    <>
      {musicSearch
        ? musicSearch.map((music) => (
            <Card key={music.album.id}>
              <p> {music.album.name} </p>
              <ContainerIconPlay>
                <FeatureToAddMusic data={music} />
              </ContainerIconPlay>
              <img src={music.album.images[0].url} alt="" />

              <ContainerIconFavourite>
                <FavouriteMusicIcon data={music} />
              </ContainerIconFavourite>
            </Card>
          ))
        : null}
    </>
  );
};

export default ResourcesToMusicSearch;
