import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import {Link} from 'react-router-dom';
import {
  UserOutlined,
  LockOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Register.scss";

export default function RegisterScreen() {
  const [registers, setRegisters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onFinish = (value) => {
    console.log("Received values of form: ", registers);
  };
  return (
    <>
      <h1 className="hregister">Register</h1>
      <div className="register-form">
        <Form
          name="normal_register"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input your Firstname!",
              },
            ]}
          >
            <Input
              prefix={<ContactsOutlined className="site-form-item-icon" />}
              placeholder="Firstname"
              value={registers.firstName}
              onChange={(value) =>
                setRegisters({ ...registers, firstName: value.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your Lastname!",
              },
            ]}
          >
            <Input
              prefix={<ContactsOutlined className="site-form-item-icon" />}
              placeholder="Lastname"
              value={registers.lastName}
              onChange={(value) =>
                setRegisters({ ...registers, lastName: value.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              value={registers.email}
              onChange={(value) =>
                setRegisters({ ...registers, email: value.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={registers.password}
              onChange={(value) =>
                setRegisters({ ...registers, password: value.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: "Please confirm your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
              value={registers.confirmPassword}
              onChange={(value) =>
                setRegisters({
                  ...registers,
                  confirmPassword: value.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={onFinish}
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
            Or <Link to = "/login">Already have account Login!</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

