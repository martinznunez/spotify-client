import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerIconSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25%;
`;
const SearchMusic = ({ faSearch }) => {
  return (
    <>
      <ContainerIconSearch>
        <FontAwesomeIcon icon={faSearch} size="2x" style={{ color: "#fff" }} />
      </ContainerIconSearch>
    </>
  );
};

export default SearchMusic;
