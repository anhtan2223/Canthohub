'use client';

import 'ckeditor5/ckeditor5.css';
import Editor from "@/app/ui/Master/editor"
import type { CascaderProps, GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop'
import {
    Button,
    Cascader,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Upload,
} from 'antd';
import UserAvatar from '@/app/ui/Home/anuong/UserAvatar';
import { UserType } from '@/app/lib/types/anuong';
import { Address } from '@/app/lib/types/master';
import { useState, useEffect } from 'react';

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];


const FoodForm = ({ user, alladdress }: { user: UserType, /*fooddata: FoodFormType,*/ alladdress: Address }) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    // const [editorData, setEditorData] = useState(fooddata?.description || '');
    const [editorData, setEditorData] = useState('');
    const [cascadeData, setCascadeData] = useState(['']);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as FileType);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

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
        const formData = new FormData();
        formData.append('resname', values.resname);
        formData.append('pricefrom', values.pricefrom);
        formData.append('priceto', values.priceto);
        formData.append('fblink', values.fblink);
        formData.append('address', values.address);
        formData.append('description', editorData);

        fileList.forEach(file => {
            if (file.originFileObj) {
                formData.append('files', file.originFileObj);
            }
        });

        // Send formData to server
        // const response = await axios.put(`https://your-server-url.com/api/food/${foodId}`, formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        // });
        // console.log('Server Response:', response.data);
    };

    return (
        <div className="space-y-1 border bg-white rounded-lg p-5">
            <Form
                name="basic"
                layout="vertical"
                // initialValues={{
                //     resname: fooddata?.resname || '',
                //     pricefrom: fooddata?.pricefrom || 0,
                //     priceto: fooddata?.priceto || 0,
                //     fblink: fooddata?.fblink || '',
                //     address: fooddata?.address1 || '',
                //     residence: fooddata ? [fooddata.address.province, fooddata.address.district, fooddata.address.ward] : []
                // }}
                autoComplete="off"
                onFinish={onFinish}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className='text-lg font-semibold'>Thêm điểm ăn uống</h2>
                    <div className="flex">
                        <Button danger className='mr-3 w-24'>Hủy</Button>
                        <Button className=' w-24 bg-slate-500' htmlType='submit'>Xác nhận</Button>
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
                                    rules={[{ required: true, message: 'Cần nhập giá từ!' }]}
                                    style={{ display: 'inline-block', width: 'calc(50% - 16px)' }}
                                >
                                    <InputNumber placeholder="Nhập giá từ..." className='h-[32px] w-full rounded' />
                                </Form.Item>
                                <span className='text-xl h-[32px] inline-block mx-2'>~</span>
                                <Form.Item
                                    name='priceto'
                                    rules={[{ required: true, message: 'Cần nhập giá đến!' }]}
                                    style={{ display: 'inline-block', width: 'calc(50% - 16px)' }}
                                >
                                    <InputNumber placeholder="Nhập giá đến..." className='h-[32px] w-full rounded' />
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
                                loadData={() => { }}
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
                    <ImgCrop aspect={250 / 142} quality={1} modalTitle="Edit Image" modalWidth={800}>
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 5 && '+ Upload'}
                        </Upload>
                    </ImgCrop>
                </div>
            </Form>
        </div>
    );

}

export default FoodForm;
