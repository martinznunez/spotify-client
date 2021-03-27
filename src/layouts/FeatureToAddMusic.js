import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "../context/UserContext";

const FeatureToAddMusic = ({ data }) => {
  const history = useHistory();
  const { setSearchClue, searchClue } = useContext(UserContext);

  const handClickPlay = () => {
    setSearchClue([
      ...searchClue,
      { name: data.name, audio: data.preview_url },
    ]);
    history.push("/playmusic");
  };

  return (
    <FontAwesomeIcon
      onClick={handClickPlay}
      icon={faPlayCircle}
      size="2x"
      transform="down-4 grow-2.5"
      style={{
        height: "90px",
        color: "#fff",
        cursor: "pointer",
        opacity: "80%",
      }}
    />
  );
};

export default FeatureToAddMusic;
