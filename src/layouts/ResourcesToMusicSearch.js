import React from "react";
import styled from "styled-components";

import FavouriteMusicIcon from "./FavouriteMusicIcon";

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
  margin-left: 35%;
  margin-top: 34%;
`;
const ResourcesToMusicSearch = (musicSearch) => {
  return (
    <>
      {musicSearch.musicSearch
        ? musicSearch.musicSearch.map((music) => (
            <Card key={music.album.id}>
              <p> {music.album.name} </p>
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
