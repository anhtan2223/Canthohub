'use client';
import Editor from "@/app/ui/Master/editor"
import type { CascaderProps, GetProp, UploadFile, UploadProps } from 'antd';
import {
  Button,
  Cascader,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
} from 'antd';
import UserAvatar from '@/app/ui/Home/anuong/UserAvatar';
import { UserType } from '@/app/lib/types/anuong';
import { Address } from '@/app/lib/types/master';
import { useState } from 'react';
import UploadImage from "@/app/ui/Master/UploadImage";

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}


const FoodFormCreate = ({ user, alladdress }: { user: UserType, alladdress: Address}) => {
    const [cascadeData, setCascadeData] = useState(['']);


      const address: CascaderProps<DataNodeType>['options'] = [
        {
            value: alladdress.province?.name.toLowerCase() || '',
            label: alladdress.province?.name || '',
            children: [
                {
                    value: alladdress.district?.name.toLowerCase() || '',
                    label: alladdress.district?.name || '',
                    children: [
                        {
                            value: alladdress.ward?.name.toLowerCase() || '',
                            label: alladdress.ward?.name || '',
                        },
                    ],
                },
            ],
        },
    ];

    const onFinish = (values: any) => {
        console.log(cascadeData);
        const cascadeValue = cascadeData.join(', ')
        
        const formData = new FormData();
        formData.append('resname', values.resname);
        formData.append('pricefrom', values.pricefrom);
        formData.append('priceto', values.priceto);
        formData.append('fblink', values.fblink);
        formData.append('address1', values.address1);
        formData.append('description', values.content);
        formData.append('address', cascadeValue);
        formData.append('images', values.images);
        console.log(values);
    };

    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true, pricefrom: 0, priceto: 100000 }}
            autoComplete="off"
            className="space-y-1 border rounded-lg !p-4"
            onFinish={onFinish}
            
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
                        label="Tên đầy đủ"
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên hợp lệ!' }]}
                        className="!w-full"
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
                                <InputNumber controls={false} suffix="VNĐ" placeholder="Nhập giá từ..." className='h-[32px] !w-full !pl-0 rounded'/>
                            </Form.Item>
                            <span className='text-xl h-[32px] inline-block mx-2'>~</span>
                            <Form.Item
                                name='priceto'
                                rules={[{ required: true, message: 'Cần nhập giá đến!'}]}
                                style={{ display: 'inline-block', width: 'calc(50% - 16px)'}}
                            >
                                <InputNumber controls={false} suffix="VNĐ" placeholder="Nhập giá đến..." className='h-[32px] !w-full !pl-0 rounded'/>
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
                        <Cascader
                            options={address}
                            onChange={(value) => {
                                setCascadeData(value);
                            }}
                         />
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
                valuePropName="content"
                getValueFromEvent={(e: { content: string }) => e}
            >
                <Editor></Editor>
            </Form.Item>
            <div className="img-container mt-[12px]">
                <Form.Item
                    name="images"
                    className="w-full"
                    valuePropName="info"
                    getValueFromEvent={(e: { info: any }) => e}
                >
                    <UploadImage width={250} height={100}></UploadImage>
                </Form.Item>
            </div>
        </Form>
    );
    
}

export default FoodFormCreate;
