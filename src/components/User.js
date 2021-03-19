import React from "react";
import styled from "styled-components";

const ContainerImgUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15%;

  img {
    width: 50px;
  }
`;

const User = () => {
  return (
    <>
      <ContainerImgUser>
        <img src="/assets/avatar.svg" alt="" />
      </ContainerImgUser>
    </>
  );
};

export default User;
