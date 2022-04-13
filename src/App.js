import { React } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage.jsx";
import FavoritePage from "../src/pages/FavoritePage";
import NavBar from "../src/components/NavBar/NavBar";
import "./App.scss";
function App() {
  const { state } = useSelector((state) => state);
  const { darkMode } = state;
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/favorite">
            <FavoritePage />
          </Route>
          <Route path="/">
            <HomePage className={darkMode ? "dark" : "light"} />
          </Route>
        </Switch>
      </Router>{" "}
    </div>
  );
}

export default App;
