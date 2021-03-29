import React, { useState } from "react";
import styled from "styled-components";
import LogOut from "./LogOut";

const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContainerImgUser = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    cursor: pointer;
  }
`;

const ModalLogOut = styled.div`
  height: 10px;
`;

const Section = styled.section`
  position: relative;
  top: 0;
  z-index: 1;
  transform-origin: top center;
  animation: iconosani 1.7s forwards;
`;

const User = () => {
  const [showModal, setShowModal] = useState(false);

  const handClickLogOut = () => {
    if (showModal) {
      return setShowModal(false);
    } else {
      return setShowModal(true);
    }
  };
  return (
    <>
      <ContainerUser>
        <Section>
          <ContainerImgUser>
            <img src="/assets/avatar.svg" alt="" onClick={handClickLogOut} />
          </ContainerImgUser>
        </Section>
      </ContainerUser>
      {showModal ? (
        <Section>
          <ModalLogOut>
            <LogOut />
          </ModalLogOut>
        </Section>
      ) : null}
    </>
  );
};

export default User;
