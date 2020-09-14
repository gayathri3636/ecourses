import React from "react";
import { Card, Layout, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./CourseDisplay.scss";
import html from '../images/html.png'
import SideBar from "./SideBar";
const { Content, Footer, Sider } = Layout;
const {Meta} = Card

export default function CourseDisplay(props) {
  return (
    <Layout>
      <Sider>
        <SideBar />
      </Sider>
      <Layout>
        
        <Content className = "cardcontent" style={{ margin: "24px 16px 0 " }}>
          <div className="site-card-wrappers">
          <Row gutter = {24}>
            <Col span = {12}>
              <h1>HTML</h1>
              <p>HTML is the foundation of all web pages. It defines the structure of a page, while CSS defines its style. HTML and CSS are the
                 beginning of everything you need to know to make your first web page! Learn both and start creating amazing websites.</p>
            </Col>
          </Row>
          </div>
          <div>
            <Row>

            <Col span = {12}>
            <Card 
            hoverable
            title="Recommended course"
              className = "coursecards"
              style = {{width:240}}
              cover = {<img alt="html5" src ={html} />}
            >
              <Meta title = "HTML5" description = "Learn Course" />
            </Card>
            </Col>
            </Row>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}