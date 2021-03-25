import React, { createContext, useState } from "react";
// import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = (props) => {
  //   const history = useHistory();
  const [listFavourite, setListFavourite] = useState([]);

  return (
    <UserContext.Provider value={{ setListFavourite, listFavourite }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
