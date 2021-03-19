import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerIconPlay = styled.div`
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

const PlayMusic = ({ faPlayCircle }) => {
  return (
    <>
      <ContainerIconPlay>
        <FontAwesomeIcon
          icon={faPlayCircle}
          size="2x"
          style={{ color: "#fff" }}
        />
      </ContainerIconPlay>
    </>
  );
};

export default PlayMusic;
