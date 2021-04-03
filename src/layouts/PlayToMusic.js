import React, { useContext, useState } from "react";
import styled from "styled-components";

import MessageNoResultsFound from "../components/MessageNoResultsFound";
import { UserContext } from "../context/UserContext";

const ContainerPlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.7);

  h4 {
    font-size: 2.4rem;
    margin-top: 30px;
    margin-bottom: 50px;
    color: #fff;
    text-transform: uppercase;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
`;

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  width: 90%;
  margin-top: 10%;
  height: 300px;
  background-color: #00ffff;
  border-radius: 20px;

  h5 {
    font-size: 1.2rem;
    text-align: center;
    padding-top: 10px;
    font-weight: 900;
    text-transform: uppercase;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }

  li {
    margin-top: 10px;
    list-style: none;
    font-size: 1.1rem;
    font-weight: 700;

    cursor: pointer;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-family: "Times New Roman", Times, serif;
  }
  @media screen and (min-width: 1399px) {
    li {
      font-size: 1.4rem;
      padding-bottom: 5px;
    }
    h5 {
      font-size: 2rem;
    }
  }
`;

const PlayToMusic = () => {
  const { searchClue } = useContext(UserContext);

  const [errorSoundtrack, setErrorSoundtrack] = useState(false);

  const [musicTrack, setMusicTrack] = useState();

  const onclickAddMusicTrack = (music) => {
    if (!music.audio) {
      setErrorSoundtrack(true);
    } else {
      setErrorSoundtrack(false);
      setMusicTrack(music.audio);
    }

    return musicTrack;
  };

  return (
    <>
      <ContainerPlay>
        <h4>music</h4>

        <audio
          style={{
            padding: "10px",
            width: "90%",
            height: "72px",
          }}
          src={musicTrack}
          preload="true"
          type="audio/ogg"
          controls="controls"
          autoPlay={true}
        ></audio>
        <MessageNoResultsFound errorSoundtrack={errorSoundtrack} />

        <ContainerList>
          <h5>your soundtrack</h5>
          <ul>
            {searchClue.map((music, index) =>
              music ? (
                <li key={index} onClick={() => onclickAddMusicTrack(music)}>
                  {music.name}
                </li>
              ) : null
            )}
          </ul>
        </ContainerList>
      </ContainerPlay>
    </>
  );
};

export default PlayToMusic;
