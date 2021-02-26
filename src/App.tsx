import React, { useState } from "react";
import Navbar from "./components/nav/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
