import React from "react";
import styled from "styled-components";

const ContainerIconFavourite = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25%;

  img {
    width: 40px;
    border-radius: 50%;
  }
`;
const FavouriteMusic = () => {
  return (
    <>
      <ContainerIconFavourite>
        <img src="/assets/corazon2.png" alt="" />
      </ContainerIconFavourite>
    </>
  );
};

export default FavouriteMusic;
