import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import EntryEdit from "./EntryEdit";
import Encouragements from "./Encouragements";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/editor/:entryId">
          <EntryEdit />
        </Route>
        <Route path="/">
          <Encouragements />
        </Route>
      </Switch>
    </Router>
  );
}
