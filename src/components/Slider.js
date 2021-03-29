import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ContainerSlider = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  align-items: center;
  padding-top: 14px;

  justify-content: space-around;
`;

const Slider = ({ stepCallback, activeStep, maximum }) => {
  return (
    <ContainerSlider>
      <FontAwesomeIcon
        onClick={() => stepCallback("back", maximum)}
        icon={faAngleLeft}
        size="2x"
        title="back"
        style={{ color: "blue", cursor: "pointer" }}
      />

      <FontAwesomeIcon
        onClick={() => stepCallback("forward", maximum)}
        icon={faAngleRight}
        size="2x"
        title="forward"
        style={{ color: "blue", cursor: "pointer" }}
      />
    </ContainerSlider>
  );
};

export default Slider;
