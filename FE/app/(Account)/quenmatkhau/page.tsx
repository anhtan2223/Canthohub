'use client'
import React, { useState } from 'react';
import { Button, Form, Input, notification, Steps, theme } from 'antd';
import AuthService from '@service/AuthService'
import { FogetPasswordRequest} from '@type/taikhoan'
import { ErrorResponse } from '@/app/lib/types/master';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [email, setEmail] = useState('');
    const [current, setCurrent] = useState(0);
    const [userToken, setUsertoken] = useState<string>('')
    const { token } = theme.useToken();
    const router = useRouter()

    const validateMessages = {
        required: 'Vui lòng nhập ${label}!',
        types: {
          email: '${label} không hợp lệ!',
          confirm: '${label}'
        },
      };

    const emailConfirm = async (values: any) => {
        try {
            await AuthService.ForgotPassword({email: values.email})
            setEmail(values.email)
            next();
        } catch (error) {
            const err = error as ErrorResponse
            notification.error({message : err.message , placement : "bottomRight"} )
        }
    }

    const tokenConfirm = async (value: any) => {
        try {
            await AuthService.CheckToken({token: value.token, email: email})
            setUsertoken(value.token)
            next();
        } catch (error) {
            const err = error as ErrorResponse
            notification.error({message : err.message , placement : "bottomRight"} )
        }
    }


    const resetPassword = async (value: any) => {
        try {
            await AuthService.ResetPassword({password: value.password, email: email, token: userToken})
            notification.success({message : "Đổi mật khẩu thành công!" , placement : "bottomRight"} )
            router.push("/dangnhap")
        } catch (error) {
            const err = error as ErrorResponse
            notification.error({message : err.message , placement : "bottomRight"} )
        }
    }

    const steps = [
        {
          title: 'Email xác nhận',
          content: 
              <>
                  <div className="container m-8 flex justify-center">
                      <Form
                          name="reset-password"
                          initialValues={{ remember: true }}
                          layout='vertical'
                          className='w-full max-w-md'
                          onFinish={emailConfirm}
                          validateMessages={validateMessages}
                          >
                            <Form.Item name='email' required label="Email" rules={[{ type: 'email' }, {required: true}]}>
                                <Input />
                            </Form.Item>
                              <Form.Item className="text-center">
                                  <Button type="primary" htmlType="submit" size="large" className="w-full">
                                      Gửi mã xác nhận
                                  </Button>
                              </Form.Item>
                      </Form>
                  </div>
              </>,
        },
        {
          title: 'Nhập token',
          content: 
              <>
                  <div className="container m-8 flex justify-center">
                      <Form
                          name="verify-token"
                          initialValues={{ remember: true }}
                          layout='vertical'
                          className='w-full max-w-md'
                          onFinish={tokenConfirm}
                          validateMessages={validateMessages}
                          >
                              <Form.Item
                              label="Token"
                                  name="token"
                                  rules={[{ required: true }]}
                              >
                                  <Input placeholder="Mã xác nhận" size="large" className="h-12 rounded" />
                              </Form.Item>
                              <Form.Item className="text-center">
                                  <Button type="primary" htmlType="submit" size="large" className="w-full">
                                      Xác nhận mã
                                  </Button>
                              </Form.Item>
                      </Form>
                  </div>
              </>,
        },
        {
          title: 'Lấy lại mật khẩu',
          content: 
              <>
                  <div className="container m-8 flex justify-center">
                      <Form
                          name="reset-password-final"
                          initialValues={{ remember: true }}
                          layout='vertical'
                          className='w-full max-w-md'
                          onFinish={resetPassword}
                          validateMessages={validateMessages}
                          >
                              <Form.Item
                                  label="Mật khẩu mới"
                                  name="password"    
                                  rules={[
                                    {
                                      required: true,
                                    },
                                  ]}
                                  hasFeedback
                              >
                                  <Input.Password placeholder="Mật khẩu mới" size="large" className="h-12 rounded" />
                              </Form.Item>
                              <Form.Item
                                  label="Xác nhận mật khẩu"
                                  name="confirmPassword"
                                  rules={[
                                    {
                                      required: true,
                                    },
                                    ({ getFieldValue }) => ({
                                      validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                          return Promise.resolve();
                                        }
                                        return Promise.reject('Mật khẩu không khớp!');
                                      },
                                    }),
                                  ]}
                                  dependencies={['password']}
                                  hasFeedback
                              >
                                  <Input.Password placeholder="Nhập lại mật khẩu mới" size="large" className="h-12 rounded" />
                              </Form.Item>
                              <Form.Item className="text-center">
                                  <Button type="primary" htmlType="submit" size="large" className="w-full">
                                      Đặt lại mật khẩu
                                  </Button>
                              </Form.Item>
                      </Form>
                  </div>
              </>,
        },
      ];
  
    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
  
    const items = steps.map((item) => ({ key: item.title, title: item.title }));
  
    const contentStyle: React.CSSProperties = {
      lineHeight: 'initial',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
      padding: 24,
    };
  
    return (
      <>
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Quay lại
            </Button>
          )}
        </div>
      </>
    );
}
