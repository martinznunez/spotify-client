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

const MessageNoResultsFound = ({ errorClueMusic }) => {
  return errorClueMusic ? (
    <ContainerMessageClueMusic>
      <p> No results found the clue music</p>
    </ContainerMessageClueMusic>
  ) : null;
};

export default MessageNoResultsFound;
