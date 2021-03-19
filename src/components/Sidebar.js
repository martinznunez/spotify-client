import React from "react";
import User from "./User";
import SearchMusic from "./SearchMusic";
import Listen from "./Listen";
import PlayMusic from "./PlayMusic";
import FavouriteMusic from "./FavouriteMusic";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Sidebar = () => {
  return (
    <>
      <Container>
        <User />
        <Listen />
        <SearchMusic />
        <FavouriteMusic />
        <PlayMusic />
      </Container>
    </>
  );
};

export default Sidebar;
