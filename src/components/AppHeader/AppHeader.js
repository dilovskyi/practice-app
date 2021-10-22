import React from "react";
import { Menu } from "antd";
import { SettingOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

class AppHeader extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
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
      </Menu>
    );
  }
}

export default AppHeader;
