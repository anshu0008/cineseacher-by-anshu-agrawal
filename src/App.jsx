import initializeAxios from "apis/axios";
import { Navbar } from "components/common";
import FavoritePage from "components/FavoritePage";
import Home from "components/Home";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import PageNotFound from "./components/common/PageNotFound";
import { routes } from "./route";

initializeAxios();
const App = () => (
  <div className="h-screen w-screen overflow-hidden">
    <Navbar />
    <Switch>
      <Route exact component={Home} path={routes.movies.index} />
      <Route exact component={FavoritePage} path={routes.movies.favorite} />
      <Redirect exact from={routes.root} to={routes.movies.index} />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </div>
);

export default App;
