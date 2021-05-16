import React, { useState } from "react";

import styled from "styled-components";
import { fetchMusic } from "../config/getMusic";

import ResourcesToMusicSearch from "./ResourcesToMusicSearch";

const ContainerPrimary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  width: 90%;
  min-height: 1200px;
  margin-bottom: 20px;
  text-align: center;
  margin: auto;
`;
const Card = styled.div`
  width: 100%;
  background: #34363e;
  height: 300px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.9);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.3rem;
    color: #1155cc;
    opacity: 90%;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1000px) {
    h2 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1760px) {
    h2 {
      font-size: 2.3rem;
    }
  }
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 500px;
  align-items: center;

  input {
    padding: 12px;
    width: 90%;

    border-radius: 6px;
  }
  button {
    padding: 8px;
    color: #1155cc;
    width: 110px;
    font-size: 1.1rem;
    border-radius: 6px;
    cursor: pointer;
    :hover {
      transition: 1s;
      background: rgba(255, 255, 255, 0.3);
      color: #fff;
    }
  }
`;

const ContainerResourcesMusic = styled.div`
  margin-top: 30px;
`;

const SearchMusic = () => {
  const [musicSearchValue, setMusicSearchValue] = useState(null);
  const [musicSearch, setMusicSearch] = useState();

  const searchMusic = async (musicSearch) => {
    try {
      const respose = await fetchMusic(musicSearchValue);
      setMusicSearch(respose.data.tracks.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handlSubmitSearchMusic = () => {
    if (musicSearchValue.trim() !== "") {
      searchMusic(musicSearch);
    }
  };

  return (
    <>
      <ContainerPrimary>
        <Card>
          <ContainerInput>
            <h2>look for a clue music</h2>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setMusicSearchValue(e.target.value)}
            />
            <button onClick={handlSubmitSearchMusic}> Search </button>
          </ContainerInput>
        </Card>
        <ContainerResourcesMusic>
          <ResourcesToMusicSearch musicSearch={musicSearch} />
        </ContainerResourcesMusic>
      </ContainerPrimary>
    </>
  );
};

export default SearchMusic;
