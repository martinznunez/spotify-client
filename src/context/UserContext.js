import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [searchClue, setSearchClue] = useState([
    {
      name: null,
      audio: null,
    },
  ]);

  const [listFavourite, setListFavourite] = useState([]);

  return (
    <UserContext.Provider
      value={{ setListFavourite, listFavourite, searchClue, setSearchClue }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
