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
import TasksPage from "../TasksPage";

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
              <Route path={PAGE_PATH.generate}>
                <TasksPage location={PAGE_PATH.generate} />
              </Route>
              <Route path={PAGE_PATH.compare}>
                <TasksPage location={PAGE_PATH.compare} />
              </Route>
              <Route path={PAGE_PATH.find}>
                <TasksPage location={PAGE_PATH.find} />
              </Route>
              <Route path={PAGE_PATH.sort}>
                <TasksPage location={PAGE_PATH.sort} />
              </Route>
              <Redirect to={PAGE_PATH.home} />
            </Switch>
          </TaskDataContext.Provider>
        </LanguageContext.Provider>
      </Router>
    </>
  );
}

export default App;
