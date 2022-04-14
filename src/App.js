import React from "react";
import "./App.scss";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { HomeTemplate } from "./templates/HomeTemplate";
import DetailBook from "./pages/DetailBook";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate
          exact
          path="/detail-book/:bookid"
          Component={DetailBook}
        />
        <HomeTemplate exact path="/login" Component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
