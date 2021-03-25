import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getValueUrl } from "../utils/RouteGetToken";

const Card = styled.div`
  width: 90%;
  margin-top: 20%;
  background: #34363e;
  height: 500px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.9);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
    width: 350px;
    height: 330px;
    border-radius: 50%;
  }
  p {
    text-transform: uppercase;
    letter-spacing: 0.5em;
    font-size: 1.4rem;
    display: inline-block;
    color: #fff;
    opacity: 50%;
    border: 4px double rgba(255, 255, 255, 0.25);
    border-width: 4px 0;
    margin: auto;
    position: absolute;
    margin: 10rem 0 0 0;
  }
`;

const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
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
          <p>iniciar sesión</p>
          <img src="/assets/login.jpeg" alt="" onClick={handleLogin} />
        </Card>
      </ContainerLogin>
    </>
  );
}

export default Login;
