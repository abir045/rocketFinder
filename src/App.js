import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import RocketDetails from "./components/RocketDetails/RocketDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rocket/:rocketID" component={RocketDetails} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
