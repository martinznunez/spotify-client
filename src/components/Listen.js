import React from "react";
import styled from "styled-components";

const ContainerIconListe = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25%;

  img {
    width: 50px;
  }
`;
const Listen = () => {
  return (
    <>
      <ContainerIconListe>
        <img src="/assets/listen.png" alt="" />
      </ContainerIconListe>
    </>
  );
};

export default Listen;
