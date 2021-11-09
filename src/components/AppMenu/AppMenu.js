import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PAGES } from "../../constants";

import React from "react";

function AppMenu({
  t,
  onClickItemHandler,
  currentMenuItem,
  setPageTypeHandler,
}) {
  return (
    <>
      <Menu
        onClick={onClickItemHandler}
        selectedKeys={[currentMenuItem]}
        mode="horizontal"
      >
        {PAGES.map(({ name, path }) => {
          return (
            <Menu.Item key={name} icon={<SettingOutlined />}>
              <Link to={path} onClick={() => setPageTypeHandler(name)}>
                {t(`headerItems.${name}`)}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </>
  );
}

export default AppMenu;
