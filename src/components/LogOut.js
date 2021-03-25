import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const LogOutButton = styled.button`
  margin-left: 60%;
  font-size: 1rem;
  border-radius: 9px;
  padding: 5px;
  border-color: red;
  color: #1155cc;
  opacity: 70%;
  width: 90px;
  text-transform: uppercase;
  margin-top: 10px;

  cursor: pointer;

  :hover {
    opacity: 100%;
  }
`;

const LogOut = () => {
  const history = useHistory();

  const handlClickLogOut = () => {
    localStorage.removeItem("data");
    history.push("/");
  };
  return (
    <>
      <LogOutButton onClick={handlClickLogOut}>log out</LogOutButton>
    </>
  );
};

export default LogOut;
