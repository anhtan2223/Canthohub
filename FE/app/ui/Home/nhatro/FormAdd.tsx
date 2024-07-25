'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo, Heading, List, Underline } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { Button, Col, Form, Input, InputNumber, Row, Select, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import UserAvatar from '@/app/ui/Home/anuong/UserAvatar';
import { UserType } from '@/app/lib/types/anuong';
import AddressSearch from '@/app/ui/Master/Map';
import { Address } from '@/app/lib/types/master';
import { useState } from 'react';
import type { UploadFile, UploadProps } from 'antd';


const cities = [
    { value: 'city1', label: 'Thành Phố Cần Thơ' },
    { value: 'city2', label: 'Thành Phố Hồ Chí Minh' },
];

const districts = {
    city1: [
        { value: 'district1', label: 'Quận Ninh Kiều' },
        { value: 'district2', label: 'Quận Cái Răng' },
    ],
    city2: [
        { value: 'district3', label: 'Quận 1' },
        { value: 'district4', label: 'Quận 2' },
    ],
};

const wards = {
    district1: [
        { value: 'ward1', label: 'Phường Hưng Lợi' },
        { value: 'ward2', label: 'Phường An Cư' },
    ],
    district2: [
        { value: 'ward3', label: 'Phường Hưng Thạnh' },
    ],
    district3: [
        { value: 'ward4', label: 'Phường Bến Nghé' },
    ],
    district4: [
        { value: 'ward5', label: 'Phường Thạnh Mỹ Lợi' },
    ],
};

const FormAdd = ({ user, alladdress }: { user: UserType, alladdress: Address }) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [editorData, setEditorData] = useState('');
    const [selectedCity, setSelectedCity] = useState<string | undefined>();
    const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>();

    const handleCityChange = (value: string) => {
        setSelectedCity(value);
        setSelectedDistrict(undefined);
    };

    const handleDistrictChange = (value: string) => {
        setSelectedDistrict(value);
    };

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as File);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const onFinish = (values: any) => {
        console.log(values);
        const formData = new FormData();
        formData.append('resname', values.resname);
        formData.append('pricefrom', values.pricefrom.toString());
        formData.append('priceto', values.priceto.toString());
        formData.append('fblink', values.fblink);
        formData.append('address1', values.address);
        formData.append('description', editorData);
        formData.append('city', values.city);
        formData.append('district', values.district);
        formData.append('ward', values.ward);


        fileList.forEach(file => {
            if (file.originFileObj) {
                formData.append('files', file.originFileObj);
            }
        });
    };

    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true, pricefrom: 0, priceto: 0 }}
            autoComplete="off"
            className="space-y-1 border rounded-lg p-4"
            onFinish={onFinish}
        >
            <div className="flex justify-between items-center mb-4">
                <div className="mb-4">
                    <UserAvatar user={user} />
                </div>
                <div className="flex">
                    <Button type='primary' className='mr-3 w-24' htmlType='submit'>Lưu</Button>
                    <Button danger className='w-24'>Hủy</Button>
                </div>
            </div>
            <Row gutter={40}>
                <Col span={12}>
                    <Form.Item
                        label="Tiêu đề"
                        name="resname"
                        rules={[{ required: true, message: 'Tên quán ăn không hợp lệ! Vui lòng nhập lại' }]}
                        className="w-full"
                    >
                        <Input className="h-[32px] rounded p-0" />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Giá (VND)"
                                name='pricefrom'
                                rules={[{ required: true, message: 'Cần nhập giá từ!' }]}
                            >
                                <InputNumber placeholder="Giá từ..." className='h-[32px] w-full rounded' />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Diện tích (m²)"
                                name='area'
                                rules={[{ required: true, message: 'Cần nhập diện tích!' }]}
                            >
                                <InputNumber placeholder="Diện tích (m²)" className='h-[32px] w-full rounded' />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Số người"
                                name='people'
                                rules={[{ required: true, message: 'Cần nhập số người!' }]}
                            >
                                <InputNumber placeholder="Số người" className='h-[32px] w-full rounded' />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item label="Khu vực" required style={{ marginBottom: 0 }}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item
                                    name="city"
                                    rules={[{ required: true, message: 'Vui lòng chọn thành phố!' }]}
                                >
                                    <Select
                                        placeholder="Thành Phố"
                                        onChange={handleCityChange}
                                    >
                                        {cities.map(city => (
                                            <Select.Option key={city.value} value={city.value}>
                                                {city.label}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="district"
                                    rules={[{ required: true, message: 'Vui lòng chọn quận/huyện!' }]}
                                >
                                    <Select
                                        placeholder="Quận/Huyện"
                                        onChange={handleDistrictChange}
                                        disabled={!selectedCity}
                                    >
                                        {selectedCity && districts[selectedCity]?.map(district => (
                                            <Select.Option key={district.value} value={district.value}>
                                                {district.label}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="ward"
                                    rules={[{ required: true, message: 'Vui lòng chọn phường/xã!' }]}
                                >
                                    <Select
                                        placeholder="Phường/Xã"
                                        disabled={!selectedDistrict}
                                    >
                                        {selectedDistrict && wards[selectedDistrict]?.map(ward => (
                                            <Select.Option key={ward.value} value={ward.value}>
                                                {ward.label}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        label="Địa chỉ"
                        name="address"
                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ hợp lệ!' }]}
                        className="w-full"
                    >
                        <Input className="h-[32px] rounded p-0" />
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
                    <AddressSearch />
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
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setEditorData(data);
                    }}
                />
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
    );
};

export default FormAdd;

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo, Heading, List, Underline } from 'ckeditor5';
// import 'ckeditor5/ckeditor5.css';
// import { Button, Col, Form, Input, InputNumber, Row, Select, Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';
// import UserAvatar from '@/app/ui/Home/anuong/UserAvatar';
// import { UserType } from '@/app/lib/types/anuong';
// import AddressSearch from '@/app/ui/Master/Map';
// import { Address } from '@/app/lib/types/master';
// import { useState } from 'react';
// import type { UploadFile, UploadProps } from 'antd';

// const cities = [
//     { value: 'city1', label: 'Thành Phố Cần Thơ' },
//     { value: 'city2', label: 'Thành Phố Hồ Chí Minh' },
// ];

// const districts = {
//     city1: [
//         { value: 'district1', label: 'Quận Ninh Kiều' },
//         { value: 'district2', label: 'Quận Cái Răng' },
//     ],
//     city2: [
//         { value: 'district3', label: 'Quận 1' },
//         { value: 'district4', label: 'Quận 2' },
//     ],
// };

// const wards = {
//     district1: [
//         { value: 'ward1', label: 'Phường Hưng Lợi' },
//         { value: 'ward2', label: 'Phường An Cư' },
//     ],
//     district2: [
//         { value: 'ward3', label: 'Phường Hưng Thạnh' },
//     ],
//     district3: [
//         { value: 'ward4', label: 'Phường Bến Nghé' },
//     ],
//     district4: [
//         { value: 'ward5', label: 'Phường Thạnh Mỹ Lợi' },
//     ],
// };

// const FormAdd = ({ user, alladdress }: { user: UserType, alladdress: Address }) => {
//     const [fileList, setFileList] = useState<UploadFile[]>([]);
//     const [editorData, setEditorData] = useState('');
//     const [selectedCity, setSelectedCity] = useState<string | undefined>();
//     const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>();
//     const [selectedWard, setSelectedWard] = useState<string | undefined>();
//     const [address, setAddress] = useState<string>('');

//     const handleCityChange = (value: string) => {
//         setSelectedCity(value);
//         setSelectedDistrict(undefined);
//         setSelectedWard(undefined);
//     };

//     const handleDistrictChange = (value: string) => {
//         setSelectedDistrict(value);
//         setSelectedWard(undefined);
//     };

//     const handleWardChange = (value: string) => {
//         setSelectedWard(value);
//     };

//     const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
//         setFileList(newFileList);
//     };

//     const onPreview = async (file: UploadFile) => {
//         let src = file.url as string;
//         if (!src) {
//             src = await new Promise((resolve) => {
//                 const reader = new FileReader();
//                 reader.readAsDataURL(file.originFileObj as File);
//                 reader.onload = () => resolve(reader.result as string);
//             });
//         }
//         const image = new Image();
//         image.src = src;
//         const imgWindow = window.open(src);
//         imgWindow?.document.write(image.outerHTML);
//     };

//     const onFinish = (values: any) => {
//         console.log(values);
//         const formData = new FormData();
//         formData.append('resname', values.resname);
//         formData.append('pricefrom', values.pricefrom.toString());
//         formData.append('priceto', values.priceto.toString());
//         formData.append('fblink', values.fblink);
//         formData.append('address1', address);
//         formData.append('description', editorData);
//         formData.append('city', values.city);
//         formData.append('district', values.district);
//         formData.append('ward', values.ward);

//         fileList.forEach(file => {
//             if (file.originFileObj) {
//                 formData.append('files', file.originFileObj);
//             }
//         });
//     };

//     return (
//         <Form
//             name="basic"
//             layout="vertical"
//             initialValues={{ remember: true, pricefrom: 0, priceto: 0 }}
//             autoComplete="off"
//             className="space-y-1 border rounded-lg p-4"
//             onFinish={onFinish}
//         >
//             <div className="flex justify-between items-center mb-4">
//                 <div className="mb-4">
//                     <UserAvatar user={user} />
//                 </div>
//                 <div className="flex">
//                     <Button type='primary' className='mr-3 w-24' htmlType='submit'>Lưu</Button>
//                     <Button danger className='w-24'>Hủy</Button>
//                 </div>
//             </div>
//             <Row gutter={40}>
//                 <Col span={12}>
//                     <Form.Item
//                         label="Tiêu đề"
//                         name="resname"
//                         rules={[{ required: true, message: 'Tên quán ăn không hợp lệ! Vui lòng nhập lại' }]}
//                         className="w-full"
//                     >
//                         <Input className="h-[32px] rounded p-0" />
//                     </Form.Item>

//                     <Row gutter={16}>
//                         <Col span={8}>
//                             <Form.Item
//                                 label="Giá (VND)"
//                                 name='pricefrom'
//                                 rules={[{ required: true, message: 'Cần nhập giá từ!' }]}
//                             >
//                                 <InputNumber placeholder="Giá từ..." className='h-[32px] w-full rounded' />
//                             </Form.Item>
//                         </Col>

//                         <Col span={8}>
//                             <Form.Item
//                                 label="Diện tích (m²)"
//                                 name='area'
//                                 rules={[{ required: true, message: 'Cần nhập diện tích!' }]}
//                             >
//                                 <InputNumber placeholder="Diện tích (m²)" className='h-[32px] w-full rounded' />
//                             </Form.Item>
//                         </Col>

//                         <Col span={8}>
//                             <Form.Item
//                                 label="Số người"
//                                 name='people'
//                                 rules={[{ required: true, message: 'Cần nhập số người!' }]}
//                             >
//                                 <InputNumber placeholder="Số người" className='h-[32px] w-full rounded' />
//                             </Form.Item>
//                         </Col>
//                     </Row>

//                     <Form.Item label="Khu vực" required style={{ marginBottom: 0 }}>
//                         <Row gutter={16}>
//                             <Col span={8}>
//                                 <Form.Item
//                                     name="city"
//                                     rules={[{ required: true, message: 'Vui lòng chọn thành phố!' }]}
//                                 >
//                                     <Select
//                                         placeholder="Thành Phố"
//                                         onChange={handleCityChange}
//                                     >
//                                         {cities.map(city => (
//                                             <Select.Option key={city.value} value={city.value}>
//                                                 {city.label}
//                                             </Select.Option>
//                                         ))}
//                                     </Select>
//                                 </Form.Item>
//                             </Col>
//                             <Col span={8}>
//                                 <Form.Item
//                                     name="district"
//                                     rules={[{ required: true, message: 'Vui lòng chọn quận/huyện!' }]}
//                                 >
//                                     <Select
//                                         placeholder="Quận/Huyện"
//                                         onChange={handleDistrictChange}
//                                         disabled={!selectedCity}
//                                     >
//                                         {selectedCity && districts[selectedCity]?.map(district => (
//                                             <Select.Option key={district.value} value={district.value}>
//                                                 {district.label}
//                                             </Select.Option>
//                                         ))}
//                                     </Select>
//                                 </Form.Item>
//                             </Col>
//                             <Col span={8}>
//                                 <Form.Item
//                                     name="ward"
//                                     rules={[{ required: true, message: 'Vui lòng chọn phường/xã!' }]}
//                                 >
//                                     <Select
//                                         placeholder="Phường/Xã"
//                                         onChange={handleWardChange}
//                                         disabled={!selectedDistrict}
//                                     >
//                                         {selectedDistrict && wards[selectedDistrict]?.map(ward => (
//                                             <Select.Option key={ward.value} value={ward.value}>
//                                                 {ward.label}
//                                             </Select.Option>
//                                         ))}
//                                     </Select>
//                                 </Form.Item>
//                             </Col>
//                         </Row>
//                     </Form.Item>

//                     <Form.Item
//                         label="Địa chỉ"
//                         name="address"
//                         rules={[{ required: true, message: 'Vui lòng nhập địa chỉ hợp lệ!' }]}
//                         className="w-full"
//                     >
//                         <Input className="h-[32px] rounded p-0" onChange={(e) => setAddress(e.target.value)} />
//                     </Form.Item>

//                     <Form.Item
//                         label="Đường dẫn Facebook"
//                         name="fblink"
//                         className="w-full"
//                     >
//                         <Input className="h-[32px] rounded p-0" />
//                     </Form.Item>
//                 </Col>

//                 <Col span={12}>
//                     <AddressSearch
//                         city={selectedCity}
//                         district={selectedDistrict}
//                         ward={selectedWard}
//                         address={address}
//                         onAddressChange={setAddress} // Assuming AddressSearch accepts an onAddressChange prop
//                     />
//                 </Col>
//             </Row>
//             <Form.Item
//                 label="Mô tả"
//                 name="description"
//                 className="w-full"
//             >
//                 <CKEditor
//                     editor={ClassicEditor}
//                     config={{
//                         toolbar: {
//                             items: [
//                                 'undo', 'redo',
//                                 'bold', 'italic', 'underline',
//                                 'bulletedList', 'numberedList',
//                             ]
//                         },
//                         plugins: [
//                             Essentials, Bold, Italic, Underline, Undo, Paragraph, Heading, List
//                         ],
//                         initialData: '<p>Hello from CKEditor 5 in React!</p>'
//                     }}
//                     onChange={(event, editor) => {
//                         const data = editor.getData();
//                         setEditorData(data);
//                     }}
//                 />
//             </Form.Item>
//             <div className="img-container mt-[12px]">
//                 <ImgCrop aspect={250 / 142} quality={1} modalTitle="Edit Image" modalWidth={800}>
//                     <Upload
//                         listType="picture-card"
//                         fileList={fileList}
//                         onChange={onChange}
//                         onPreview={onPreview}
//                     >
//                         {fileList.length < 5 && '+ Upload'}
//                     </Upload>
//                 </ImgCrop>
//             </div>
//         </Form>
//     );
// };

// export default FormAdd;