'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo, Heading, List, Underline } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import type { CascaderProps } from 'antd';
import {
  Button,
  Cascader,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import UserAvatar from '@/app/ui/anuong/UserAvatar';
import { UserType } from '@/app/lib/types/anuong';

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
  }
const FoodForm = ({ user }: { user: UserType }) => {
    const residences: CascaderProps<DataNodeType>['options'] = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ];
    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true, pricefrom: 0, priceto: 0 }}
            autoComplete="off"
            className="space-y-1"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className='text-lg font-semibold'>Thêm điểm ăn uống</h2>
                <div className="flex">
                    <Button danger className='mr-3 w-24'>Hủy</Button>
                    <Button type='primary' className=' w-24' htmlType='submit'>Xác nhận</Button>
                </div>
            </div>
            <div className="mb-4">
                <UserAvatar user={user} />
            </div>
            <Row gutter={40}>
                <Col span={12}>
                    <Form.Item
                        label="Tên quán ăn"
                        name="resname"
                        rules={[{ required: true, message: 'Tên quán ăn không hợp lệ! Vui lòng nhập lại' }]}
                        className="w-full"
                    >
                        <Input className="h-[32px] rounded p-0" />
                    </Form.Item>

                    <Form.Item label="Giá" required style={{ marginBottom: 0 }}>
                        <div className="">
                            <Form.Item
                                name='pricefrom'
                                rules={[{ required: true, message: 'Cần nhập giá từ!'}]}
                                style={{ display: 'inline-block', width: 'calc(50% - 16px)' }}
                            >
                                <InputNumber placeholder="Nhập giá từ..." className='h-[32px] w-full rounded'/>
                            </Form.Item>
                            <span className='text-xl h-[32px] inline-block mx-2'>~</span>
                            <Form.Item
                                name='priceto'
                                rules={[{ required: true, message: 'Cần nhập giá đến!'}]}
                                style={{ display: 'inline-block', width: 'calc(50% - 16px)'}}
                            >
                                <InputNumber placeholder="Nhập giá đến..." className='h-[32px] w-full rounded'/>
                            </Form.Item>
                        </div>
                    </Form.Item>

                    <Form.Item
                        label="Đường dẫn Facebook"
                        name="fblink"
                        className="w-full"
                    >
                        <Input className="h-[32px] rounded p-0" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="residence"
                        label="Khu vực"
                        rules={[
                        { type: 'array', required: true, message: 'Vui lòng nhập khu vực!' },
                        ]}
                    >
                        <Cascader options={residences} />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ"
                        name="address"
                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ hợp lệ!' }]}
                        className="w-full"
                    >
                        <Input className="h-[32px] rounded p-0 " />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item
                label="Mô tả"
                name="description"
                className="w-full"
            >
                <CKEditor
                    editor={ClassicEditor}
                    config={{
                        toolbar: {
                            items: [
                                'undo', 'redo',
                                'bold', 'italic', 'underline',
                                'bulletedList', 'numberedList',
                            ]
                        },
                        plugins: [
                            Essentials, Bold, Italic, Underline, Undo, Paragraph, Heading, List
                        ],
                        initialData: '<p>Hello from CKEditor 5 in React!</p>'
                    }}
                />
            </Form.Item>
        </Form>
    );
}

export default FoodForm;
