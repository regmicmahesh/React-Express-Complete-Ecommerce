import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/nav/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { UserContext, UserContextProvider } from "./context/UserContext";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
const App: React.FC = () => {
 

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage}/>
      </Switch>
    </div>
  );
};

export default App;
