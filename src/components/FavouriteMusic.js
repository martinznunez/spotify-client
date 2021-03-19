import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const FavouriteMusic = ({ faHeart }) => {
  return (
    <>
      <ContainerIconFavourite>
        <FontAwesomeIcon icon={faHeart} size="2x" style={{ color: "#fff" }} />
      </ContainerIconFavourite>
    </>
  );
};

export default FavouriteMusic;
