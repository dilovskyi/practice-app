import { useState, useEffect } from "react";
import { Trans } from "react-i18next";
import { Menu, PageHeader } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { PAGES } from "../../constants";
import ChangeLanguage from "../ChangeLanguage";

function AppHeader() {
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

  const handleSetCurrentMenuItem = (e) => {
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
        title={<Trans i18nKey={`${pageType}Page.title`} />}
        subTitle={<Trans i18nKey={`${pageType}Page.subTitle`} />}
        extra={<ChangeLanguage />}
      >
        <Menu
          onClick={handleSetCurrentMenuItem}
          selectedKeys={[currentMenuItem]}
          mode="horizontal"
        >
          {PAGES.map(({ name, path }) => {
            return (
              <Menu.Item key={name} icon={<SettingOutlined />}>
                <Link to={path} onClick={() => setPageType(name)}>
                  <Trans i18nKey={`headerItems.${name}`} />
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </PageHeader>
    </>
  );
}

export default AppHeader;
