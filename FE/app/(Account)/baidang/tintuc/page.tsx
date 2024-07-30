'use client'
import { useState } from 'react'
import type { FormProps, CascaderProps, UploadFile } from 'antd';
import { Button, Form, Input, Avatar, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@ui/Master/editor'), { ssr: false });
import Breadcrumbs from "@ui/Master/breadcrums";
import UploadImage from "@ui/Master/UploadImage";


const tagOpt = [
    "Software Engineer",
    "Data Scientist",
    "Network Administrator",
    "Cybersecurity Analyst",
    "Cloud Solutions Architect",
    "UX/UI Designer",
    "Web Developer",
    "IT Project Manager",
    "DevOps Engineer",
    "AI Specialist",
    "Nurse Practitioner",
    "Medical Doctor",
    "Pharmacist",
    "Physical Therapist",
    "Radiologic Technologist",
    "Occupational Therapist",
    "Medical Laboratory Technician",
    "Health Information Manager",
    "Clinical Psychologist",
]

const onFinish: FormProps['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


export default function CreateForm() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài Đăng Của Tôi', href: '/baidang' },
        { label: 'Tạo Mới Tin Tức', href: '/baidang/tintuc', active: true },
    ];
  return <div>
    <Breadcrumbs breadcrumbs={breadcrumbs}/>
    <div className='p-5 bg-white w-full border rounded-lg'>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign='left'
        className='flex flex-col gap-3 '
      >
        <div className='flex relative w-full h-fit items-center mb-6'>
          <div className="flex-grow flex items-center">
            <Avatar icon={<UserOutlined />} />
            <div className='font-sm ml-5 font-medium'>UserName</div>
          </div>
          <div className='flex gap-3 items-center'>
            <Button type='primary' htmlType="submit" ghost className='w-20'>Tạo Mới</Button>
            <Button danger className='w-20'>Huỷ</Button>
          </div>
        </div>
        <div className='flex w-full items-center'>
        <div className='flex font-bold w-1/3 text-[16px] leading-6 mb-4 mr-8'>
          <p className='mx-2 text-red-600'>*</p>
          Tiêu Đề Bài Viết
        </div>
          <Form.Item
              colon={false}
              name="title"
              labelAlign='left'
              rules={[{ required: true, message: 'Vui Lòng Nhập Tiêu Đề Cho Bài Viết' }]}
              className='w-full '
          >
              <Input placeholder='Tiêu Đề Cho Bài Tin Tức' className='text-base h-[28px] rounded-lg' />
          </Form.Item>
        </div>

        <div>
          <div className='font-bold flex text-[16px] leading-6 mb-4'> <p className='mx-2 text-red-600'>*</p>Nội Dung Bài Viết</div>
          <Form.Item
            name="content"
            labelAlign='right'
            wrapperCol={{ span: 24 }}
            valuePropName="content"
            getValueFromEvent={(e: { content: string }) => e}
            rules={[{
              required: true,
              message: 'Vui Lòng Nhập Mô Tả cho Bài Đăng'
            }
            ]}
          >
            <Editor></Editor>
          </Form.Item>
          <Form.Item
                      name="images"
                      className="w-full"
                      valuePropName="info"
                      getValueFromEvent={(e: { info: any }) => e}
                  >
                      <UploadImage width={300} height={300}></UploadImage>
                  </Form.Item>
        </div>

        <div className='flex w-full items-center'>
          <p className='font-bold w-1/3 text-[16px] leading-6 mb-4 mr-8'>Thẻ Cho Bài Viết</p>
          <Form.Item
            wrapperCol={{span:24}}
            colon={false}
            name="tag"
            className='w-full'
          >
              <Select 
                  mode='multiple'
                  allowClear 
                  placeholder='Thẻ Cho Bài Viết' 
                  className='h-fit text-base rounded-lg'>
                  {tagOpt.map((i) => {
                    return <Select.Option key={i} value={i}>{i}</Select.Option>
                  })}
              </Select>
          </Form.Item>
        </div>

        <div className='flex w-full items-center'>
          <p className='font-bold w-1/3 text-[16px] leading-6 mb-4 mr-8'>Đường Dẫn Facebook</p>
          <Form.Item
            wrapperCol={{span:24}}
            colon={false}
            name="facebook"
            className='w-full'
          >
            <Input  placeholder='Đường Dẫn Facebook' className='text-base w-full h-[32px] rounded-lg'></Input>
          </Form.Item>
        </div>
      </Form>
    </div>

  </div>
}