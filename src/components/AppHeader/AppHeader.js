import { useState, useEffect } from "react";
import { PageHeader } from "antd";
import { useLocation, useHistory } from "react-router-dom";
import ChangeLanguage from "../ChangeLanguage";
import AppMenu from "../AppMenu";

function AppHeader({ t }) {
  // Get current location and set it to the useState like parameter on initialization
  let location = useLocation();
  let history = useHistory();
  const [currentMenuItem, setCurrentMenuItem] = useState();
  const [pageType, setPageType] = useState();

  function checkPath(path) {
    if (path === "/") {
      return "home";
    }
    const reg = new RegExp(/(?<=\/)([\s\S]+?)(?=\/|$)/gi);
    return path.match(reg)[0];
  }

  useEffect(() => {
    let path = checkPath(location.pathname);
    setPageType(path);
    setCurrentMenuItem(path);
  }, [location]);

  const setCurrentMenuItemHandler = (e) => {
    setCurrentMenuItem(e.key);
  };

  const handleHistoryGoBack = () => {
    history.goBack();
    setCurrentMenuItem();
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={handleHistoryGoBack}
        title={t(`${pageType}Page.title`)}
        subTitle={t(`${pageType}Page.subTitle`)}
        extra={<ChangeLanguage />}
      >
        <AppMenu
          onClickItemHandler={setCurrentMenuItemHandler}
          currentMenuItem={currentMenuItem}
          setPageTypeHandler={(typeName) => {
            setPageType(typeName);
          }}
        />
      </PageHeader>
    </>
  );
}

export default AppHeader;
