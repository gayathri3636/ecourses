import React from 'react';
import 'antd/dist/antd.css';
import billgates from '../images/bill-gates.jpg';
import jeff from '../images/jeff.jpg'
import './Contact.scss';
import { Card } from 'antd';

const { Meta } = Card;

export default function Contact(){
    return(
        <div className = "cards">
  <Card
  className = "card"
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={billgates} />}
  >
    <Meta title="Bill Gates" description="billgates@gmail.com" />
  </Card>
  <Card
  className = "card"
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={jeff} />}
  >
    <Meta title="Jeff Bezos" description="jeffbezos@gmail.com" />
  </Card>
  </div>
)
}