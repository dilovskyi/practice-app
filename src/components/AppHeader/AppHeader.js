import { useState } from "react";
import { Menu } from "antd";
import { SettingOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { PageHeader } from "antd";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { LANGUAGES } from "../../const/lang";
import ChangeLanguage from "../ChangeLanguage";

function AppHeader({ changeLangHandler }) {
  const [current, setCurrent] = useState("generate");
  const [pageType, setPageType] = useState("generate");

  const toggleActiveItem = (e) => {
    setCurrent(e.key);
  };

  const setPageTypeHandler = (type) => {
    setPageType(type);
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title={<Trans i18nKey={`${pageType}Page.title`} />}
        subTitle={<Trans i18nKey={`${pageType}Page.subTitle`} />}
        extra={[
          <ChangeLanguage
            languages={LANGUAGES}
            changeLangHandler={changeLangHandler}
          />,
        ]}
      >
        <Menu
          onClick={toggleActiveItem}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="generate" icon={<SettingOutlined />}>
            <Link to="/generate" onClick={() => setPageTypeHandler("generate")}>
              <Trans i18nKey="headerItems.generate" />
            </Link>
          </Menu.Item>
          <Menu.Item key="compare" icon={<SortAscendingOutlined />}>
            <Link to="/compare" onClick={() => setPageTypeHandler("compare")}>
              <Trans i18nKey="headerItems.compare" />
            </Link>
          </Menu.Item>
        </Menu>
      </PageHeader>
    </>
  );
}

export default AppHeader;
