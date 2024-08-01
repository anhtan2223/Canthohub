import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Đổi mật khẩu
      </Button>
      <Modal
        title="Đổi mật khẩu"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button type="primary" key="submit" onClick={handleOk}>
            Xác nhận
          </Button>,
        ]}
      >
        <div className="Modal">
          <Form
            form={form}
            labelCol={{ span: 6 }}
            labelAlign="left"
            onFinish={onFinish}
          >
            <Form.Item
              name="password"
              label="Mật khẩu cũ"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu cũ!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="newpassword"
              label="Mật khẩu mới"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu mới!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Xác nhận"
              dependencies={['newpassword']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Nhập lại mật khẩu!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('newpassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Mật khẩu không khớp!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default App;
