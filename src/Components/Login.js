import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './Login.css';

export default function Login(props) {
  const [logins, setLogins] = useState({
    email: "",
    password: "",
  });
  const onFinish = (value) => {
    console.log("Received values of form: ", logins);
  };
    return (
        <>
            <h1 className = "hlogin">Login</h1>
            <div className = "login-form">
                <Form
                name = "normal-login"
                initialValues={{
                    remember:true,
                }}
                >
                
                    <Form.Item
                    name ="email"
                    rules={[
                        {
                            required:true,
                            message:"please input your email"
                        }
                    ]}
                    >
                        <Input
                        prefix={<UserOutlined className = "site-form-item-icon" />}
                        placeholder = "Username"
                        // value={logins.email}
                        // onChange = {(value) => ({...logins, email: value.target.value})}
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
              // value={logins.password}
              // onChange={(value) => ({
              //   ...logins,
              //   password: value.target.value,
              // })}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link className="login-form-forgot" to = "/forgotpassword">
              Forgot password
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick = {onFinish}
            >
              Log in
            </Button>
            Or <Link to = "/register">register now!</Link>
          </Form.Item>

                </Form>
            </div>
        </>
    )
}
