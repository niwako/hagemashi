import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Editor from "./Editor";
import Encouragements from "./Encouragements";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/editor/:entryId">
          <Editor />
        </Route>
        <Route path="/">
          <Encouragements />
        </Route>
      </Switch>
    </Router>
  );
}
