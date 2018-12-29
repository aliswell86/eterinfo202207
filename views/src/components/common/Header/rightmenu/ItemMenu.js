import React from 'react';
import { Menu, Dropdown, Icon/*, Checkbox */} from 'antd';
import {Link} from 'react-router-dom';

// const SubMenu = Menu.SubMenu;

const innerStyle = {
  marginLeft: "0.4rem"
}

const menu = (
  <Menu>
    <Menu.Item><Link to="/wp">무기</Link></Menu.Item>
    {/* <Menu.Item>방어구</Menu.Item> */}
    {/* <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu> */}
    {/* <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu> */}
  </Menu>
);

const ItemMenu = () => (
  <div>
    <Dropdown overlay={menu} style={innerStyle}>
      <Link className="ant-dropdown-link" to="/wp">
        아이템정보 <Icon type="down" />
      </Link>
    </Dropdown>
    <Link to="/custom" style={innerStyle}>
      커스터마이징
    </Link>
    <Link to="/plusup" style={innerStyle}>
      플러스업
    </Link>
  </div>
);

export default ItemMenu;