import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";

const FavouriteMusicIcon = ({ data }) => {
  const { setListFavourite, listFavourite } = useContext(UserContext);

  const handClickFavourite = () => {
    if (data) {
      setListFavourite([...listFavourite, data]);
    }
  };

  return (
    <>
      <FontAwesomeIcon
        onClick={handClickFavourite}
        icon={faHeart}
        size="2x"
        transform="down-4 grow-2.5"
        style={{
          height: "90px",
          color: "red",
          cursor: "pointer",
          opacity: "80%",
        }}
      />
    </>
  );
};

export default FavouriteMusicIcon;
