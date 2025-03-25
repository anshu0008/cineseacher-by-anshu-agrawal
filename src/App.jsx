import initializeAxios from "apis/axios";
import Home from "components/Home";

import "./App.css";
// eslint-disable-next-line import/extensions
initializeAxios();
const App = () => (
  <div className="App">
    <Home />
  </div>
);

export default App;
