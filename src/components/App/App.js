import { createContext, useState, useEffect } from "react";
import Header from "../AppHeader";
import GeneratorsPage from "../GeneratorsPage";
import SortingsPage from "../SortingsPage";
import { getData } from "../../services/getData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChangeLanguage from "../ChangeLanguage";

import { Trans, useTranslation } from "react-i18next";

export const TaskContext = createContext();

function App() {
  const { t, i18n } = useTranslation();
  const [dataTasks, setDataTask] = useState([]);

  const changeLaguage = (languale) => {
    i18n.changeLanguage(languale);
  };

  useEffect(() => {
    getData(`http://localhost:3000/tasks`).then((data) => {
      setDataTask(data);
    });
  }, []);

  return (
    <>
      <Router>
        <ChangeLanguage />
        <TaskContext.Provider value={dataTasks}>
          <Header />

          <Switch>
            <Route path="/generators">
              <GeneratorsPage />
            </Route>
            <Route path="/compare">
              <SortingsPage />
            </Route>
          </Switch>
        </TaskContext.Provider>
      </Router>
    </>
  );
}

export default App;
