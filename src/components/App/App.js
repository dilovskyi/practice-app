import Header from "../AppHeader";
import GeneratorsPage from "../GeneratorsPage";
import SortingsPage from "../SortingsPage";
import RecentlyUsedPage from "../RecentlyUsedPage";
import CreateCustomPage from "../CreateCustomPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/generators">
            <GeneratorsPage />
          </Route>
          <Route path="/sortings">
            <SortingsPage />
          </Route>
          <Route path="/recentlyUsed">
            <RecentlyUsedPage />
          </Route>
          <Route path="/createCustom">
            <CreateCustomPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
