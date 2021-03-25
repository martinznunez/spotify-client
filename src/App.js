import React from "react";
import Routes from "./components/Routes";

import UserProvider from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
