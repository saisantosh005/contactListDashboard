import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </Router>
);
export default App;
