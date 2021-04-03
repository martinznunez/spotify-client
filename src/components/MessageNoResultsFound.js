import React from "react";
import styled from "styled-components";

const ContainerMessageClueMusic = styled.div`
  width: 300px;
  text-align: center;

  p {
    font-size: 1.1rem;
    color: #fff;
    padding-top: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

const MessageNoResultsFound = ({ errorSoundtrack }) => {
  return errorSoundtrack ? (
    <ContainerMessageClueMusic>
      <p> No results found for soundtrack</p>
    </ContainerMessageClueMusic>
  ) : null;
};

export default MessageNoResultsFound;
