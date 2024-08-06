'use client'
import { useState } from 'react'
import type { FormProps, CascaderProps, UploadFile } from 'antd';
import { Button, Form, Input, Avatar, Cascader, Select, DatePicker, InputNumber } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import UploadImage from '@/app/ui/Account/baidang/vieclam/upload-image'
import { Level } from "@/app/lib/types/vieclam"
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@/app/ui/Master/editor'), { ssr: false });
import UploadJD from "@/app/ui/Account/baidang/vieclam/upload_jd"
import { formatCurrency, formatNumber } from "@/app/lib/utils"
const { RangePicker } = DatePicker;

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}
const options: CascaderProps<Option>['options'] = [
  {
    value: 'CT', // Mã của Cần Thơ
    label: 'Cần Thơ',
    children: [
      {
        value: 'Q1-CT', // Mã quận 1 Cần Thơ
        label: 'Quận Ninh Kiều',
        children: [
          { value: 'P1-Q1-CT', label: 'Phường An Cư' },
          { value: 'P2-Q1-CT', label: 'Phường An Hòa' }
        ]
      },
      {
        value: 'Q2-CT', // Mã quận 2 Cần Thơ
        label: 'Quận Bình Thủy',
        children: [
          { value: 'P3-Q2-CT', label: 'Phường Bình Thủy' },
          { value: 'P4-Q2-CT', label: 'Phường Bùi Hữu Nghĩa' }
        ]
      },
      {
        value: 'Q3-CT', // Mã quận 3 Cần Thơ
        label: 'Quận Cái Răng',
        children: [
          { value: 'P5-Q3-CT', label: 'Phường Hưng Phú' },
          { value: 'P6-Q3-CT', label: 'Phường Lê Bình' }
        ]
      }
    ]
  },
  {
    value: 'HCM', // Mã của Thành phố Hồ Chí Minh
    label: 'Thành phố Hồ Chí Minh',
    children: [
      {
        value: 'Q1-HCM', // Mã quận 1 TP. Hồ Chí Minh
        label: 'Quận 1',
        children: [
          { value: 'P1-Q1-HCM', label: 'Phường Bến Nghé' },
          { value: 'P2-Q1-HCM', label: 'Phường Bến Thành' }
        ]
      },
      {
        value: 'Q2-HCM', // Mã quận 2 TP. Hồ Chí Minh
        label: 'Quận 2',
        children: [
          { value: 'P3-Q2-HCM', label: 'Phường An Phú' },
          { value: 'P4-Q2-HCM', label: 'Phường Bình An' }
        ]
      }
    ]
  },
  {
    value: 'DN', // Mã của Đà Nẵng
    label: 'Đà Nẵng',
    children: [
      {
        value: 'Q1-DN', // Mã quận 1 Đà Nẵng
        label: 'Quận Hải Châu',
        children: [
          { value: 'P1-Q1-DN', label: 'Phường Bình Hiên' },
          { value: 'P2-Q1-DN', label: 'Phường Hòa Thuận Đông' }
        ]
      },
      {
        value: 'Q2-DN', // Mã quận 2 Đà Nẵng
        label: 'Quận Sơn Trà',
        children: [
          { value: 'P3-Q2-DN', label: 'Phường An Hải Bắc' },
          { value: 'P4-Q2-DN', label: 'Phường An Hải Đông' }
        ]
      }
    ]
  }
];

const careerOpt = [
  "Software Engineer",
  "Data Scientist",
  "Network Administrator",
  "Cybersecurity Analyst",
  "Cloud Solutions Architect",
  "UX/UI Designer",
  "Web Developer",
  "IT Project Manager",
  "DevOps Engineer",
  "AI Specialist"
];

const formOpt = [
  "Full-Time", "Part-Time", "Remote"
]

const expOpt = [
  "Không Yêu Cầu", "Trên 1 Năm", "Trên 10 Năm"
]

const positionOpt = Object.values(Level)

const onFinish: FormProps['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function CreateForm() {

  return <div className='bg-white w-full border rounded-lg p-5 dark:text-dark-text dark:bg-dark-secondary dark:border-dark'>
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 12 }}
      labelAlign='left'
      className=' flex flex-col  gap-4'
    >
      <div className='flex relative w-full h-fit items-center mb-6'>
        <div className="flex-grow flex items-center gap-3 ">
          <Avatar icon={<UserOutlined />} />
          <div className='font-sm font-medium'>UserName</div>
        </div>
        <div className='flex gap-3 items-center'>
          <Button type='primary' htmlType="submit" ghost className='w-20'>Tạo Mới</Button>
          <Button danger className='w-20'>Huỷ</Button>
        </div>
      </div>
      <Form.Item
        label="Tiêu Đề"
        colon={false}
        name="title"
        labelAlign='left'
        rules={[{ required: true, message: 'Vui Lòng Nhập Tiêu Đề Cho Bài Viết' }]}
        className='items-center'
      >
        <Input placeholder='Tiêu Đề Bài Viết' className='text-base h-[28px] rounded-lg' />
      </Form.Item>
      <div className='w-full'>
        <p className='font-bold text-lg mb-4'>Thông tin công ty </p>
        <div className='md:flex h-fit w-full'>
          <div className="w-full md:w-3/4">
            <Form.Item
                label="Công Ty"
                colon={false}
                name="company"
                rules={[{
                required: true,
                message: 'Vui Lòng Nhập Tên Của Công Ty Cho Bài Viết'
                }
                ]}
            >
                <Input placeholder='Tên Công Ty' className='text-base h-[28px] rounded-lg'></Input>
            </Form.Item>

            <Form.Item
                name="residence"
                label="Khu vực"
                colon={false}
                rules={[
                { type: 'array', required: true, message: 'Vui Chọn Khu Vực' },
                ]}
            >
                <Cascader placeholder='Chọn Khu Vực' className='h-[28px] rounded-lg' options={options} />
            </Form.Item>

            <Form.Item
                label="Địa Chỉ"
                colon={false}
                name="address"
                rules={[{
                required: true,
                message: 'Vui Lòng Nhập Địa Chỉ Của Công Ty'
                }
                ]}
            >
                <Input placeholder='Địa Chỉ Công Ty' className='h-[28px] text-base rounded-lg'></Input>
            </Form.Item>
          </div>
          <div className='flex items-center'>
            <Form.Item
              name="image"
              labelAlign='right'
              valuePropName="fileList"
              getValueFromEvent={(e: { fileList: UploadFile[] }) => e}
              rules={[{
                required: true,
                message: 'Chọn Ảnh'
              }
              ]}
            >
              <UploadImage></UploadImage>
            </Form.Item>
          </div>
        </div>
      </div>
      <div>
        <p className='font-bold text-lg mb-4'>Thông Tin Tuyển Dụng</p>
        <div className='md:flex w-full'>
          <div className='w-full md:w-1/2'>
            <Form.Item
              label="Ngành Nghề"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 15 }}
              colon={false}
              name="carrer"
              rules={[{
                required: true,
                message: 'Vui Lòng Chọn Ngành Nghề'
              }
              ]}
            >
              <Select allowClear placeholder='Ngành Nghề Tuyển Dụng' className='h-[28px] text-base rounded-lg'>
                {careerOpt.map((i) => {
                  return <Select.Option key={i} value={i}>{i}</Select.Option>
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="Hình Thức"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 15 }}
              colon={false}
              name="form"
              rules={[{
                required: true,
                message: 'Vui Lòng Hình Thức Tuyển Dụng'
              }
              ]}
            >
              <Select allowClear placeholder='Hình Thức Tuyển Dụng' className='h-[28px] text-base rounded-lg'>
                {formOpt.map((i) => {
                  return <Select.Option key={i} value={i}>{i}</Select.Option>
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="Kinh Nghiệm"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 15 }}
              colon={false}
              name="experience"
            >
              <Select allowClear placeholder='Kinh Nghiệm Yêu Cầu' className='h-[28px] text-base rounded-lg'>
                {expOpt.map((i) => {
                  return <Select.Option key={i} value={i}>{i}</Select.Option>
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="Thời Gian"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 15 }}
              colon={false}
              name="date_apply"
            >
              <RangePicker
                className='h-[28px] text-base rounded-lg'
                placeholder={['Bắt Đầu', 'Kết Thúc']}
              ></RangePicker>

            </Form.Item>

          </div>
          <div className='w-full md:w-1/2 '>
            <Form.Item
              label="Vị Trí"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 15 }}
              colon={false}
              name="position"
              rules={[{
                required: true,
                message: 'Vui Lòng Chọn Vị Trí'
              }
              ]}
            >
              <Select allowClear placeholder='Vị Trí Tuyển Dụng' className='h-[28px] text-base rounded-lg'>
                {positionOpt.map((i) => {
                  return <Select.Option key={i} value={i}>{i}</Select.Option>
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="Số Lượng"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 15 }}
              colon={false}
              name="quantity"
              rules={[{
                required: true,
                message: 'Vui Lòng Nhập Số Lượng'
              }
              ]}
            >
              <InputNumber
                min={1}
                className='w-full text-base rounded-lg'
                placeholder='Số Lượng Tuyển Dụng'
              >
              </InputNumber>
            </Form.Item>

            <Form.Item
              label="Mức Lương"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 15 }}
              colon={false}
              name="salary_from"
            >
              <InputNumber
                formatter={formatNumber}
                parser={formatCurrency}
                placeholder="Mức Lương Từ"
                addonAfter="VNĐ"
                addonBefore={<p className='w-8'>Từ</p>}
                controls={false}
              />
            </Form.Item>

            <Form.Item
              label="   "
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 15 }}
              colon={false}
              name="salary_to"
            >
              <InputNumber
                formatter={formatNumber}
                parser={formatCurrency}
                addonAfter="VNĐ"
                addonBefore={<p className='w-8'>Đến</p>}
                controls={false}
                className='w-full'
              />
            </Form.Item>

          </div>
        </div>

      </div>
      <div>
        <div className='font-bold flex text-lg mb-4'>
          <p className='mx-2 text-red-600'>*</p>
          Mô Tả Công Việc
        </div>
        <Form.Item
          name="description"
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
      </div>
      <div>
        <p className='font-bold text-lg mb-4'>Yêu Cầu</p>
        <Form.Item
          name="requirement"
          labelAlign='right'
          wrapperCol={{ span: 24 }}
          valuePropName="content"
          getValueFromEvent={(e: { content: string }) => e}
        >
          <Editor></Editor>
        </Form.Item>

        <Form.Item
          label=""
          name="jd_file"
          labelAlign='right'
          wrapperCol={{ span: 24 }}
          valuePropName="file"
          getValueFromEvent={(e: { file: any }) => e}
        >
          <UploadJD></UploadJD>
        </Form.Item>
      </div>
      <div>
        <p className='font-bold text-lg mb-4'>Phúc Lợi</p>
        <Form.Item
          name="benefit"
          labelAlign='right'
          wrapperCol={{ span: 24 }}
          valuePropName="content"
          getValueFromEvent={(e: { content: string }) => e}
        >
          <Editor></Editor>
        </Form.Item>
      </div>
      <div className='flex w-full items-center'>
        <p className='font-bold w-1/3 text-lg mb-4 mr-8'>Đường Dẫn Facebook</p>
        <Form.Item
          wrapperCol={{ span: 24 }}
          colon={false}
          name="facebook"
          className='w-full'
        >
          <Input placeholder='Đường Dẫn Facebook' className='text-base w-full rounded-lg'></Input>
        </Form.Item>
      </div>
    </Form>

  </div>
}