import initializeAxios from "apis/axios";
import { Navbar } from "components/common";
import FavoritePage from "components/Favorite/FavoritePage";
import Home from "components/Home";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import PageNotFound from "./components/common/PageNotFound";
import { route } from "./route";

initializeAxios();
const App = () => (
  <div className="h-screen w-screen overflow-hidden">
    <Navbar />
    <Switch>
      <Route exact component={Home} path={route.movies.index} />
      <Route exact component={FavoritePage} path={route.movies.favorite} />
      <Redirect exact from={route.root} to={route.movies.index} />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </div>
);

export default App;
