import React from "react";

import Login from "./Login";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import FavouriteToStock from "../layouts/FavouriteToStock";

import PlayToMusic from "../layouts/PlayToMusic";

import SearchMusic from "../layouts/SearchMusic";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ContainerSidebar = styled.div`
  width: 30%;
  height: auto;
  background-color: #1155cc;
`;

const ContainerHeader = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
`;

const ContainerPrimary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ContainerPrimary>
            <ContainerSidebar>
              <Sidebar />
            </ContainerSidebar>

            <ContainerHeader>
              <Route exact path="/home" component={Header} />
              <Route exact path="/search" component={SearchMusic} />
              <Route exact path="/favourite" component={FavouriteToStock} />
              <Route exact path="/playmusic" component={PlayToMusic} />
            </ContainerHeader>
          </ContainerPrimary>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
