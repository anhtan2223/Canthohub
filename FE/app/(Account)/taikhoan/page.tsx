'use client'
import Breadcrumbs from "@/app/ui/Master/breadcrums"
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, GetProp, Image, Input, Upload, UploadProps } from 'antd';
import { Form } from "antd";
import { useState } from "react";
import ImgCrop from 'antd-img-crop';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        // message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        // message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

export default function Account() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Tài khoản', href: '/anuong', active: true },
    ];


    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
          setLoading(true);
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj as FileType, (url) => {
            setLoading(false);
            setImageUrl(url);
          });
        }
      };
    
      const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </button>
      );
  return (
    <>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <Form
            labelCol={{span: 6}}
            labelAlign='left'
        >
            <div className="grid grid-cols-12 gap-4">
                <div className="site-left col-span-8">
                    <div className="bg-white">
                        <div className="py-3 px-2 bg-medium-blue">
                            <h2 className="text-white font-semibold text-lg">Cài đặt tài khoản</h2>
                        </div>
                        <div className="p-5">
                            <Form.Item
                                name="name"
                                label="Tên đầy đủ"
                                rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên hợp lệ!',
                                },
                                ]}
                            >
                                <Input 
                                    className="h-[32px] rounded-lg"
                                    placeholder="Nguyễn Văn A"
                                />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label="Số điện thoại"
                            >
                                <Input
                                    className="h-[32px] rounded-lg"
                                    placeholder="0123456789"
                                />
                            </Form.Item>
                            <Form.Item
                                name="birthday"
                                label="Ngày sinh"
                            >
                                <DatePicker onChange={()=>{}} />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="Mật khẩu"
                                rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                label="Xác nhận"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                {
                                    required: true,
                                    message: 'Nhập lại mật khẩu!',
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
                            >
                                <Input.Password />
                            </Form.Item>
                            <div className="flex justify-end">
                                <Button type="primary" htmlType="submit">Xác nhận</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-right col-span-4 rounded">
                    <div className="bg-white">
                        <div className="py-3 px-2 bg-medium-blue">
                            <h2 className="text-white font-semibold text-lg text-center">Thông tin cá nhân</h2>
                        </div>
                        <div className="flex justify-center items-center flex-col p-3">
                            <ImgCrop cropShape="round" quality={1} modalTitle="Edit Image" modalWidth={800}>
                                <Upload
                                    name="avatar"
                                    listType="picture-circle"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" className="aspect-square rounded-full" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            </ImgCrop>
                            <Input name="email" disabled value={"ABC@example.commmm"} className="text-center" variant="borderless" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </Form>
    </>
  )
}
