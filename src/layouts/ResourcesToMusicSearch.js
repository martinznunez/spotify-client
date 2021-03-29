import React from "react";
import styled from "styled-components";

import FavouriteMusicIcon from "./FavouriteMusicIcon";
import FeatureToAddMusic from "./FeatureToAddMusic";

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

  img {
    width: 240px;
    height: 260px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10%;
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
`;

const ContainerIconPlay = styled.div`
  position: absolute;
  margin-top: 20%;
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
