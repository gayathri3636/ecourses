import React from "react";
import {Link} from 'react-router-dom'
import "antd/dist/antd.css";
import { Layout, Menu} from "antd";
import './sideBar.scss';

const { Content,  Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu key="sub1"  title="Languages">
              <Link className = "htmllink" to = "/coursedisplay"  key="3">HTML</Link>
              <Link to = "/coursedisplaycss">CSS</Link>
              {/* <Menu.Item key="5">JAVASCRIPT</Menu.Item> */}
            </SubMenu>
            {/* <SubMenu key="sub2"  title="Courses">
              <Menu.Item key="6">Web development</Menu.Item>
              <Menu.Item key="8">Embedded</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content></Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
