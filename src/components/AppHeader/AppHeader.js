import { useState } from "react";
import { Menu } from "antd";
import { SettingOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

function AppHeader() {
  const [current, setCurrent] = useState("generators");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="generators" icon={<SettingOutlined />}>
          <Link to="/generators">
            <Trans i18nKey="headerItems.generate" />
          </Link>
        </Menu.Item>
        <Menu.Item key="sorting" icon={<SortAscendingOutlined />}>
          <Link to="/compare">
            <Trans i18nKey="headerItems.compare" />
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default AppHeader;
