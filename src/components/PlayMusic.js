import React from "react";

import styled from "styled-components";

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

const PlayMusic = () => {
  return (
    <>
      <ContainerIconPlay>
        <img src="/assets/play1.png" alt="" />
      </ContainerIconPlay>
    </>
  );
};

export default PlayMusic;
