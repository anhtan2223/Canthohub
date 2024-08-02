'use client'
import Breadcrumbs from "@ui/Master/breadcrums"
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Divider, GetProp, Image, Input, Upload, UploadProps } from 'antd';
import { Form } from "antd";
import { useState } from "react";
import ImgCrop from 'antd-img-crop';
import ChangePassWordModal from '@ui/Account/taikhoan/ChangePasswordModal'

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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="site-left lg:col-span-8">
                    <div className="bg-white dark:text-dark-text dark:bg-dark-secondary dark:border-dark">
                        <div className=" flex justify-between py-3 px-5">
                            <h2 className="font-semibold text-lg">Cài đặt tài khoản</h2>
                            <Button type="primary" htmlType="submit">Xác nhận</Button>
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
                            <Divider></Divider>
                            <Form.Item
                                label="Mật khẩu"
                            >
                                <ChangePassWordModal/>
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="site-right w-full lg:col-span-4 rounded">
                    <div className="bg-white dark:text-dark-text dark:bg-dark-secondary dark:border-dark">
                        <div className="py-3 px-2">
                            <h2 className=" font-semibold text-lg text-center">Ảnh đại diện</h2>
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
                                    {imageUrl ? <Image width={100} height={100} src={imageUrl} alt="avatar" className="aspect-square rounded-full" style={{ width: '100%' }} /> : uploadButton}
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
