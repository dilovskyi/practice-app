import { createContext, useState, useEffect } from "react";
import AppHeader from "../AppHeader";
import GeneratorsPage from "../GeneratorsPage";
import SortingsPage from "../SortingsPage";
import { getData } from "../../services/getData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const TaskContext = createContext();

function App() {
  const [dataTasks, setDataTask] = useState([]);
  const { i18n } = useTranslation();

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
        <TaskContext.Provider value={dataTasks}>
          <AppHeader changeLangHandler={changeLaguage} />
          <Switch>
            <Route path="/generate">
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
