import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "../context/UserContext";

const ContainerFavourite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30%;

  p {
    margin-top: 5px;
    font-size: 1rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    color: #000;
    font-weight: 900;
  }

  img {
    width: 240px;
    height: 260px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10%;
  }
  span {
    position: absolute;
    margin-left: 50%;
    z-index: 1;
  }
`;

const FavouriteToStock = () => {
  const { listFavourite, setListFavourite } = useContext(UserContext);

  const handClickDelate = (list) => {
    const delate = listFavourite.filter((elem) => elem.id !== list.id);

    setListFavourite(delate);
  };

  return (
    <>
      <ContainerFavourite>
        {listFavourite
          ? listFavourite.map((list, index) => (
              <>
                <Card title={list.name} key={list.index}>
                  <p> {list.name} </p>
                  <span>
                    <FontAwesomeIcon
                      onClick={() => handClickDelate(list)}
                      icon={faTrash}
                      size="1x"
                      title="Delate"
                      transform="down-4 grow-2.5"
                      style={{
                        height: "80px",
                        color: "red",
                        cursor: "pointer",
                        opacity: "80%",
                      }}
                    />
                  </span>

                  {list.images ? (
                    <img src={list.images[0].url} alt="" />
                  ) : (
                    <img src={list.album.images[0].url} alt="" />
                  )}
                </Card>
              </>
            ))
          : null}
      </ContainerFavourite>
    </>
  );
};

export default FavouriteToStock;
