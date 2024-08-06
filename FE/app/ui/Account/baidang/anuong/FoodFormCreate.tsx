'use client'
import Editor from "@/app/ui/Master/editor"
import type { CascaderProps } from 'antd';
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
import UploadImage from "@/app/ui/Master/UploadImage";
import AddressField from "@ui/Home/anuong/AddressField";



const FoodFormCreate = ({ user }: { user: UserType}) => {

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onError = (values: any) => {
        console.log(values);
    }

    return (
        <div className="space-y-2 border bg-white rounded-lg p-5 dark:text-dark-text dark:bg-dark-secondary dark:border-dark" >
            <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true, pricefrom: 0, priceto: 100000 }}
                autoComplete="off"
                onFinish={onFinish}
                onError={onError}
                
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
                                    layout="horizontal"
                                    name='pricefrom'
                                    rules={[{ required: true, message: 'Cần nhập giá từ!'}]}
                                    style={{ display: 'inline-block', width: 'calc(50% - 16px)' }}
                                >
                                    <InputNumber controls={false} placeholder="Nhập giá từ..." className='h-[32px] !w-full !pl-0 rounded'/>
                                </Form.Item>
                                <span className='text-xl h-[32px] inline-block mx-2'>~</span>
                                <Form.Item
                                    layout="horizontal"
                                    name='priceto'
                                    rules={[{ required: true, message: 'Cần nhập giá đến!'}]}
                                    style={{ display: 'inline-block', width: 'calc(50% - 16px)'}}
                                >
                                    <InputNumber controls={false} placeholder="Nhập giá đến..." className='h-[32px] !w-full !pl-0 rounded'/>
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
                        valuePropName="address"
                        getValueFromEvent={(value: any, selectedOptions: any[]) => value}
                    >
                        <AddressField />
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
                    name="description"
                    labelAlign='right'
                    label="Mô tả"
                    className="w-full"
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
        </div>
    );
    
}

export default FoodFormCreate;
