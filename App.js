import React from "react";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Routes>
      </Router>
    </>
  );
};
