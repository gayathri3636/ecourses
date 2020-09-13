import React,{useEffect, useState} from "react";
import { Card, Row, Col, Layout } from "antd";
import "antd/dist/antd.css";
// import "./catalog.css";
import SideBar from "./SideBar";
const { Content, Footer, Sider } = Layout;

export default function Catalog(props) {
  const [courses, addCourses] = useState([])
  const [error, seterror] = useState("")

  useEffect (() =>{
    const Formbody = {
      query: `query{
        allCourses{
         courseName
         description
       }
     }`,
    };
    const handleFetch = () => {
      fetch("http://localhost:5000/api/", {
        method: "POST",
        body: JSON.stringify(Formbody),
        headers: { "Content-Type": "application/json" },
      })
        .then((resdata) => resdata.json())
        .then((da) => addCourses(da.data?.allCourses))
        .catch((error) => seterror(error));
    };
    handleFetch();
  });

  return (
    <Layout>
      <Sider>
        <SideBar />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0 " }}>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={6}>

                {
                courses.length  !== "undefined"? courses.map(item =>  <Card
                  title={item.courseName}
                  style={{
                    backgroundColor: "#B5E7A0",
                  }}
                  bordered={false}
                >
                  <h6>{item.description}</h6>
                
                </Card>): null
                         }
               
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
