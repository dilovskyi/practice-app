import { createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getData } from "../../services/getData";
import { PAGE_PATH } from "../../constants";
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
  // TODO: Add getting information from cookies/storage
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
              <Route exact path={PAGE_PATH.home} component={HomePage} />
              <Route path={PAGE_PATH.generate} component={GeneratePage} />
              <Route path={PAGE_PATH.compare} component={ComparePage} />
              <Route path={PAGE_PATH.find} component={FindPage} />
              <Route path={PAGE_PATH.sort} component={SortPage} />
              <Redirect to={PAGE_PATH.home} />
            </Switch>
          </LanguageContext.Provider>
        </TaskContext.Provider>
      </Router>
    </>
  );
}

export default App;
