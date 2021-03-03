import { createContext, useContext, useState } from "react";
import React from "react";


export const UserContext = createContext({
  isLoggedIn: false,
  username: "",
  login: (username: string) => {},
  logout: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC = ({ children }) => {
  const username = localStorage.getItem("username") || "";

  
  const [userStatus, setUserState] = useState({
    isLoggedIn: username !== "" ? true: false,
    username,
  });

  const login = (username: string) => {
    setUserState({ isLoggedIn: true, username });
  };

  const logout = () => {
    setUserState({ isLoggedIn: false, username: "" });
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: userStatus.isLoggedIn,
        username: userStatus.username,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
