import { createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import i18next from "../../i18n";
import { useTranslation } from "react-i18next";
import { getData } from "../../services/getData";
import { PAGE_PATH } from "../../constants";
import AppHeader from "../AppHeader";
import HomePage from "../HomePage";
import GeneratePage from "../GeneratePage";
import ComparePage from "../ComparePage";
import FindPage from "../FindPage";
import SortPage from "../SortPage";

export const TaskDataContext = createContext();
export const LanguageContext = createContext();
export const ChangeLaguageHandlerContext = createContext();

function App() {
  const { i18n } = useTranslation();
  const [pageLang, setPageLang] = useState(i18next.language);
  const [dataTasks, setDataTask] = useState([]);

  const changeLaguageHandler = (language) => {
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
        <LanguageContext.Provider value={pageLang}>
          <ChangeLaguageHandlerContext.Provider value={changeLaguageHandler}>
            <AppHeader />
          </ChangeLaguageHandlerContext.Provider>
          <TaskDataContext.Provider value={dataTasks}>
            <Switch>
              <Route exact path={PAGE_PATH.home} component={HomePage} />
              <Route path={PAGE_PATH.generate} component={GeneratePage} />
              <Route path={PAGE_PATH.compare} component={ComparePage} />
              <Route path={PAGE_PATH.find} component={FindPage} />
              <Route path={PAGE_PATH.sort} component={SortPage} />
              <Redirect to={PAGE_PATH.home} />
            </Switch>
          </TaskDataContext.Provider>
        </LanguageContext.Provider>
      </Router>
    </>
  );
}

export default App;
