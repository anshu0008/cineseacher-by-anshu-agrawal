import initializeAxios from "apis/axios";
import Home from "components/Home";

import "./App.css";

initializeAxios();
const App = () => (
  <div className="App">
    <Home />
  </div>
);

export default App;
