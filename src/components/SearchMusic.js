import React from "react";
import styled from "styled-components";

const ContainerIconSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25%;

  img {
    width: 45px;
  }
`;
const SearchMusic = () => {
  return (
    <>
      <ContainerIconSearch>
        <img src="/assets/search.png" alt="" />
      </ContainerIconSearch>
    </>
  );
};

export default SearchMusic;
