import { createContext, useState, useEffect } from "react";
import AppHeader from "../AppHeader";
import GeneratorsPage from "../GeneratorsPage";
import SortingsPage from "../SortingsPage";
import { getData } from "../../services/getData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
      console.log(data);
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
                <GeneratorsPage />
              </Route>
              <Route path="/compare">
                <SortingsPage />
              </Route>
            </Switch>
          </LanguageContext.Provider>
        </TaskContext.Provider>
      </Router>
    </>
  );
}

export default App;
