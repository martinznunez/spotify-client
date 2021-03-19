import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const Listen = ({ faHeadphonesAlt }) => {
  return (
    <>
      <ContainerIconListe>
        <FontAwesomeIcon
          icon={faHeadphonesAlt}
          size="2x"
          style={{ color: "#fff" }}
        />
      </ContainerIconListe>
    </>
  );
};

export default Listen;
