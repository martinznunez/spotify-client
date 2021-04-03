import React, { useContext, useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { uniqBy } from "lodash";
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
    font-size: 0.8rem;
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
    margin-left: 60%;
    z-index: 1;
  }
  @media screen and (min-width: 450px) {
    span {
      margin-top: 2%;
    }
  }
  @media screen and (min-width: 500px) {
    span {
      margin-top: 1%;
      margin-left: 50%;
    }
  }
  @media screen and (min-width: 615px) {
    span {
      margin-left: 40%;
      margin-top: 2%;
    }
  }
  @media screen and (min-width: 700px) {
    img {
      width: 270px;
      height: 260px;
    }
  }
  @media screen and (min-width: 840px) {
    p {
      font-size: 1rem;
    }
    span {
      margin-left: 34%;
      margin-top: 1%;
    }
    img {
      width: 280px;
      height: 270px;
    }
  }
  @media screen and (min-width: 1000px) {
    img {
      width: 300px;
      height: 290px;
    }
  }
  @media screen and (min-width: 1200px) {
    img {
      width: 340px;
      height: 300px;
    }
    margin-bottom: 20%;
  }
  @media screen and (min-width: 1360px) {
    img {
      width: 360px;
      height: 330px;
    }
    span {
      margin-left: 30%;
      margin-top: 1%;
    }
  }
  @media screen and (min-width: 1700px) {
    margin-bottom: 15%;
  }
  p {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 1830px) {
    span {
      margin-left: 20%;
      margin-top: 0%;
    }
  }
`;

const FavouriteToStock = () => {
  const { listFavourite, setListFavourite } = useContext(UserContext);

  const [listAlbum, setListAlbum] = useState();

  const sinduplicados = useCallback(() => {
    const duplicate = uniqBy(listFavourite, "id");

    setListAlbum(duplicate);
  }, [listFavourite]);

  useEffect(() => {
    sinduplicados();
  }, [listFavourite, sinduplicados]);

  const handClickDelete = (album) => {
    const remove = listFavourite.filter((elem) => elem.id !== album.id);

    setListFavourite(remove);
  };

  return (
    <>
      <ContainerFavourite>
        {listAlbum
          ? listAlbum.map((album) => (
              <Card title={album.name} key={album.id}>
                <p> {album.name} </p>
                <span>
                  <FontAwesomeIcon
                    onClick={() => handClickDelete(album)}
                    icon={faTrash}
                    size="1x"
                    title="Delete"
                    transform="down-4 grow-2.5"
                    style={{
                      height: "80px",
                      color: "red",
                      cursor: "pointer",
                      opacity: "80%",
                    }}
                  />
                </span>

                {album.images ? (
                  <img src={album.images[0].url} alt="" />
                ) : (
                  <img src={album.album.images[0].url} alt="" />
                )}
              </Card>
            ))
          : null}
      </ContainerFavourite>
    </>
  );
};

export default FavouriteToStock;
