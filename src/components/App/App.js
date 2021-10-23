import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getData } from "../../services/getData";
import AppHeader from "../AppHeader";
import HomePage from "../HomePage";
import GeneratePage from "../GeneratePage";
import ComparePage from "../ComparePage";
import FindPage from "../FindPage";
import SortPage from "../SortPage";

export const TaskContext = createContext();
export const LanguageContext = createContext();

function App() {
  const [dataTasks, setDataTask] = useState([]);
  // Add getting information from cookies/storage
  const [pageLang, setPageLang] = useState("en");
  const { i18n } = useTranslation();

  const changeLaguage = (language) => {
    i18n.changeLanguage(language);
    setPageLang(language);
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
          <LanguageContext.Provider value={pageLang}>
            <AppHeader changeLangHandler={changeLaguage} />
            <Switch>
              <Route path="/generate">
                <GeneratePage />
              </Route>
              <Route path="/compare">
                <ComparePage />
              </Route>
              <Route path="/find">
                <FindPage />
              </Route>
              <Route path="/sort">
                <SortPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </LanguageContext.Provider>
        </TaskContext.Provider>
      </Router>
    </>
  );
}

export default App;
