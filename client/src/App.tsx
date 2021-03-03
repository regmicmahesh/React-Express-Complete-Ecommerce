import React, { useState } from "react";
import Navbar from "./components/nav/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { UserContextProvider } from "./context/UserContext";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </UserContextProvider>
    </div>
  );
}

export default App;
