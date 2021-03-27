import React from "react";
import styled from "styled-components";

const ContainerImgUser = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;

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
