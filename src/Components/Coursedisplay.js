import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './CourseDisplay.scss';
import SideBar from './SideBar';
const { Content, Footer, Sider } = Layout;
// const { Meta } = Card;

export default function CourseDisplay(props) {
  const [coursedisplay, setCoursedisplay] = useState([]);
  useEffect(() => {
    const title = props.location.state;

    const Formbody = {
      query: `query{
        filterContent(title: "${title}"){
          title
          courseContent
        }
      }`,
    };
    const handleFetch = () => {
      fetch('http://localhost:5000/api/', {
        method: 'POST',
        body: JSON.stringify(Formbody),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((resdata) => resdata.json())
        .then((da) => {
          let p = da.data?.filterContent;
          setCoursedisplay([{ ...p }]);
        })
        .catch((error) => console.log(error));
    };
    handleFetch();
  }, [props.location.state]);

  console.log('length', coursedisplay);

  return (
    <Layout>
      <Sider>
        <SideBar />
      </Sider>
      <Layout>
        <Content className='cardcontent' style={{ margin: '24px 16px 0 ' }}>
          <div className='site-card-wrappers'>
            {coursedisplay && coursedisplay.length !== 'undefined'
              ? coursedisplay.map((item) => (
                  <Row gutter={24}>
                    <Col span={12}>
                      <p>{item.title}</p>

                      <p>{item.courseContent}</p>
                    </Col>
                  </Row>
                ))
              : null}
          </div>
          {/* <div>
            <Row>
              <Col span={12}>
                <Card
                  hoverable
                  title='Recommended course'
                  className='coursecards'
                  style={{ width: 240 }}
                  cover={<img alt='html5' src={html} />}
                >
                  <Meta title='HTML5' description='Learn Course' />
                </Card>
              </Col>
            </Row>
          </div> */}
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
