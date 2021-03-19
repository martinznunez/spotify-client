import React from "react";
import User from "./User";
import SearchMusic from "./SearchMusic";
import Listen from "./Listen";
import PlayMusic from "./PlayMusic";
import FavouriteMusic from "./FavouriteMusic";
import styled from "styled-components";

import {
  faSearch,
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80%;
`;
const Sidebar = () => {
  return (
    <>
      <Container>
        <User />
        <Listen faHeadphonesAlt={faHeadphonesAlt} />
        <SearchMusic faSearch={faSearch} />
        <FavouriteMusic faHeart={faHeart} />
        <PlayMusic faPlayCircle={faPlayCircle} />
      </Container>
    </>
  );
};

export default Sidebar;
