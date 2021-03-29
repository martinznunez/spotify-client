import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const LogOutButton = styled.button`
  font-size: 1rem;
  border-radius: 9px;
  padding: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 90px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.25s;
  background: none;
  border: 2px solid;
  font: inherit;
  color: #e4cb58;

  :hover {
    opacity: 70%;
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
