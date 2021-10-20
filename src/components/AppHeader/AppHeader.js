import React from "react";
import { Menu } from "antd";
import {
  SettingOutlined,
  AppstoreOutlined,
  ShareAltOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class AppHeader extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="generators" icon={<SettingOutlined />}>
          Генераторы
          <Link to="/generators"></Link>
        </Menu.Item>
        <Menu.Item key="sorting" icon={<SortAscendingOutlined />}>
          Сортировки
          <Link to="/sortings"></Link>
        </Menu.Item>
        <SubMenu
          key="recentlyUsed"
          disabled
          icon={<ShareAltOutlined />}
          title="Недавно использованые"
        >
          <Menu.ItemGroup title="Sort">
            <Menu.Item key="setting:1">From great to less</Menu.Item>
            <Menu.Item key="setting:2">From less to great</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <Menu.Item key="createNew" disabled icon={<AppstoreOutlined />}>
          Создать
          <Link to="/createCustom"></Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppHeader;
