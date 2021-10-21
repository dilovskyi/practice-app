import { createContext, useState, useEffect } from "react";
import Header from "../AppHeader";
import GeneratorsPage from "../GeneratorsPage";
import SortingsPage from "../SortingsPage";
import RecentlyUsedPage from "../RecentlyUsedPage";
import CreateCustomPage from "../CreateCustomPage";
import { getData } from "../../services/getData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const TaskContext = createContext();

function App() {
  const [dataTasks, setDataTask] = useState([]);

  useEffect(() => {
    getData(`http://localhost:3000/tasks`).then((data) => {
      setDataTask(data);
    });
  }, []);

  return (
    <>
      <Router>
        <TaskContext.Provider value={dataTasks}>
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
        </TaskContext.Provider>
      </Router>
    </>
  );
}

export default App;
