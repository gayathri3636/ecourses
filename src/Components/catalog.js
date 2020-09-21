import React, { useEffect, useState } from 'react';
import { Card, Layout } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './catalog.scss';
import SideBar from './SideBar';
const { Content, Footer, Sider } = Layout;

export default function Catalog(props) {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   props.history.push('/coursedisplay');
  // };
  const [courses, addCourses] = useState([]);
  useEffect(() => {
    const Formbody = {
      query: `query{
        allCourses{
         courseName
         description
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
        .then((da) => addCourses(da.data?.allCourses))
        .catch((error) => console.log(error));
    };
    handleFetch();
  }, []);

  return (
    <Layout>
      <Sider>
        <SideBar />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0 ', display: 'flex' }}>
          <div className='site-card-wrapper'>
            {courses.length !== 'undefined'
              ? courses.map((item) => (
                  <Card
                    title={item.courseName}
                    className='cardd'
                    bordered={false}
                  >
                    <h3>{item.description}</h3>

                    <Link
                      // onClick={handleClick}
                      className='link'
                      to={{
                        pathname: '/coursedisplay',
                        state: `${item.courseName}`,
                      }}
                    >
                      Click
                    </Link>
                  </Card>
                ))
              : null}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
