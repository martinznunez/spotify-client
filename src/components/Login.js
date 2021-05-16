import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getValueUrl } from "../utils/RouteGetToken";

const Card = styled.div`
  background-color: #222831;
  height: 37rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
  img {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    border: 5px solid #272133;
    margin-top: 2rem;
    box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
  }

  @media screen and (min-width: 800px) {
    height: 430px;
    width: 440px;
    margin-top: 10%;

    p {
      font-size: 1.7rem;
    }
  }
`;

const Button = styled.button`
  box-shadow: inset 0 0 0 1px #fff;
  color: #f1f1f1;
  background: none;
  border: none;
  cursor: pointer;
  font: 700 1.2rem "Roboto Slab", sans-serif;
  padding: 1rem 2rem;
  letter-spacing: 0.2rem;
  margin: 5rem;
  width: 13rem;

  :hover {
    color: #ffe593;
  }
`;

const ContainerLogin = styled.div`
  display: grid;

  grid-gap: 50px;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: #f5f5f5;
`;

function Login() {
  const history = useHistory();

  const [tokenUser, setTokenUser] = useState();

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const url = history.location.hash;

  const fetchToken = useCallback(async () => {
    try {
      const respuesta = await getValueUrl(url);
      setTokenUser(respuesta);

      if (respuesta.access_token) {
        history.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }, [history, url]);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  useEffect(() => {
    if (tokenUser) {
      localStorage.setItem("data", JSON.stringify(tokenUser));
    } else {
      localStorage.setItem("data", JSON.stringify([]));
    }
  }, [tokenUser]);

  return (
    <>
      <ContainerLogin>
        <Card>
          <img src="./assets/login.jpeg" alt="Person" className="card__image" />

          <Button onClick={handleLogin}>Login</Button>
        </Card>
      </ContainerLogin>
    </>
  );
}

export default Login;
