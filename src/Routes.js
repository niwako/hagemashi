import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Encouragements from "./Encouragements";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Encouragements />
        </Route>
      </Switch>
    </Router>
  );
}
