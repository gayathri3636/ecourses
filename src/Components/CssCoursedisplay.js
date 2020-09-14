import React,{useEffect, useState} from "react";
import { Card, Layout, Row, Col } from "antd";
import {Link} from 'react-router-dom';
import "antd/dist/antd.css";
// import "./CssCourseDisplay.scss";
import css from '../images/css.png'
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
                    <h1>CSS</h1>
                    <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup
                        language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
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
              cover = {<img alt="html5" src ={css} />}
            >
              <Meta title = "CSS3" description = "Learn Course" />
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