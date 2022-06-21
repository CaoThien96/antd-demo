import React, { useEffect, useRef, useState } from "react";
import { Form, Input, Button, notification } from 'antd';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [loading, setLoading] = useState(false)
    const forgotFormRef = useRef()

    const onFinish = (values) => {
        setLoading(true)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
       
    }, [])
   
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            flexDirection: 'column'

        }}>
            <div style={{
                marginBottom: '44px'
            }} >
                <img src={'https://s2.coinmarketcap.com/static/img/coins/200x200/13045.png'} />
            </div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="ANTD"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    {/* <Form.Item style={{ opacity: 0 }} name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                    <a
                        onClick={() => forgotFormRef?.current?.show()}
                        style={{
                            float: 'right'
                        }}
                        href="javascript:void(0)">
                        Forgot password
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit" style={{
                        width: '100%'
                    }}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}   