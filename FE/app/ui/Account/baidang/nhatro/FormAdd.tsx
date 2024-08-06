import { Button, Col, Form, Input, InputNumber, Row, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UserAvatar from '@/app/ui/Home/anuong/UserAvatar';
import { UserType } from '@/app/lib/types/anuong';
import MapComponent from '@/app/ui/Master/Map';
import { useState, useEffect } from 'react';
import type { UploadFile, UploadProps } from 'antd';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@/app/ui/Master/editor'), { ssr: false });

interface Option {
    value: string;
    label: string;
}

const cities: Option[] = [
    { value: 'city1', label: 'Thành Phố Cần Thơ' },
    { value: 'city2', label: 'Thành Phố Hồ Chí Minh' },
];

const districts: Record<string, Option[]> = {
    city1: [
        { value: 'district1', label: 'Quận Ninh Kiều' },
        { value: 'district2', label: 'Quận Cái Răng' },
    ],
    city2: [
        { value: 'district3', label: 'Quận 1' },
        { value: 'district4', label: 'Quận 2' },
    ],
};

const wards: Record<string, Option[]> = {
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

const cityNames: Record<string, string> = {
    'city1': 'Thành Phố Cần Thơ',
    'city2': 'Thành Phố Hồ Chí Minh',
};

const districtNames: Record<string, string> = {
    'district1': 'Quận Ninh Kiều',
    'district2': 'Quận Cái Răng',
    'district3': 'Quận 1',
    'district4': 'Quận 2',
};

const wardNames: Record<string, string> = {
    'ward1': 'Phường Hưng Lợi',
    'ward2': 'Phường An Cư',
    'ward3': 'Phường Hưng Thạnh',
    'ward4': 'Phường Bến Nghé',
    'ward5': 'Phường Thạnh Mỹ Lợi',
};

const initialFileList: UploadFile[] = [
    {
        uid: '0',
        name: 'xxx.png',
        status: 'uploading',
        percent: 33,
    },
    {
        uid: '-1',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'zzz.png',
        status: 'uploading',
    },
];

const FormAdd = ({ user }: { user: UserType }) => {
    const [fileList, setFileList] = useState<UploadFile[]>(initialFileList);
    const [editorData, setEditorData] = useState('');
    const [selectedCity, setSelectedCity] = useState<string | undefined>('city1');
    const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>('district1');
    const [selectedWard, setSelectedWard] = useState<string | undefined>('ward1');
    const [addressDetails, setAddressDetails] = useState<string>('');

    useEffect(() => {
        if (selectedCity) {
            setSelectedDistrict(districts[selectedCity][0]?.value);
        }
    }, [selectedCity]);

    useEffect(() => {
        if (selectedDistrict) {
            setSelectedWard(wards[selectedDistrict][0]?.value);
        }
    }, [selectedDistrict]);

    const handleCityChange = (value: string) => {
        setSelectedCity(value);
        setSelectedDistrict(districts[value][0]?.value);
        setSelectedWard(wards[districts[value][0]?.value][0]?.value);
    };

    const handleDistrictChange = (value: string) => {
        setSelectedDistrict(value);
        setSelectedWard(wards[value][0]?.value);
    };

    const handleWardChange = (value: string) => {
        setSelectedWard(value);
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddressDetails(e.target.value);
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

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.dataTransfer.setData('draggedItemIndex', index.toString());
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.preventDefault();
        const draggedItemIndex = e.dataTransfer.getData('draggedItemIndex');
        if (draggedItemIndex === index.toString()) return;

        const newFileList = [...fileList];
        const draggedItem = newFileList.splice(Number(draggedItemIndex), 1)[0];
        newFileList.splice(index, 0, draggedItem);

        setFileList(newFileList);
    };

    const onFinish = (values: any) => {
        console.log(values);
        const formData = new FormData();
        formData.append('title', values.title || '');
        formData.append('price', (values.price ?? 0).toString());
        formData.append('area', (values.area ?? 0).toString());
        formData.append('people', (values.people ?? 0).toString());
        formData.append('fblink', values.fblink || '');
        formData.append('address', addressDetails);
        formData.append('description', editorData);
        formData.append('city', cityNames[values.city] || '');
        formData.append('district', districtNames[values.district] || '');
        formData.append('ward', wardNames[values.ward] || '');

        fileList.forEach(file => {
            if (file.originFileObj) {
                formData.append('files', file.originFileObj);
            }
        });
    };

    const cityName = selectedCity ? cityNames[selectedCity] : '';
    const districtName = selectedDistrict ? districtNames[selectedDistrict] : '';
    const wardName = selectedWard ? wardNames[selectedWard] : '';

    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{
                remember: true,
                price: 0,
                area: 0,
                people: 0,
                city: selectedCity,
                district: selectedDistrict,
                ward: selectedWard,
            }}
            autoComplete="off"
            className="md:p-6 lg:p-8"
            onFinish={onFinish}
        >
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="mb-4 md:mb-0">
                    <UserAvatar user={user} />
                </div>
                <div className="flex flex-col md:flex-row">
                    <Button type='primary' className='mb-2 md:mb-0 md:mr-3 w-full md:w-24' htmlType='submit'>Lưu</Button>
                    <Button danger className='w-full md:w-24'>Hủy</Button>
                </div>
            </div>
            <Row gutter={24} className="flex flex-col md:flex-row">
                <Col xs={24} md={12}>
                    <Form.Item
                        label="Tiêu đề"
                        name="title"
                        rules={[{ required: true, message: 'Tiêu đề không hợp lệ! Vui lòng nhập lại' }]}
                        className="w-full"
                    >
                        <Input placeholder="Nhập tiêu đề" className="h-[32px] rounded p-0" />
                    </Form.Item>
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={8} className="mb-4">
                            <Form.Item
                                label="Giá(VND)"
                                name='price'
                                rules={[
                                    { required: true, message: 'Cần nhập giá từ!' },
                                    {
                                        type: 'number',
                                        min: 0,
                                        message: 'Giá nhập phải là số dương!',
                                    },
                                ]}
                            >
                                <InputNumber placeholder="Giá từ..." className='h-[32px] w-full rounded' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} className="mb-4">
                            <Form.Item
                                label="Diện tích(m²)"
                                name='area'
                                rules={[{ required: true, message: 'Cần nhập diện tích!' }]}
                            >
                                <InputNumber placeholder="Diện tích (m²)" className='h-[32px] w-full rounded' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} className="mb-4">
                            <Form.Item
                                label="Số người"
                                name='people'
                                rules={[{ required: true, message: 'Cần nhập số người!' }]}
                            >
                                <InputNumber placeholder="Số người" className='h-[32px] w-full rounded' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="Tỉnh/Thành phố" name="city">
                                <Select value={selectedCity} onChange={handleCityChange}>
                                    {cities.map(city => (
                                        <Select.Option key={city.value} value={city.value}>{city.label}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Quận/Huyện" name="district">
                                <Select value={selectedDistrict} onChange={handleDistrictChange}>
                                    {selectedCity && districts[selectedCity]?.map(district => (
                                        <Select.Option key={district.value} value={district.value}>{district.label}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Phường/Xã" name="ward">
                                <Select value={selectedWard} onChange={handleWardChange}>
                                    {selectedDistrict && wards[selectedDistrict]?.map(ward => (
                                        <Select.Option key={ward.value} value={ward.value}>{ward.label}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Địa chỉ cụ thể"
                        name="address"
                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}>
                        <Input placeholder="Nhập địa chỉ cụ thể" className="h-[32px] rounded" value={addressDetails} onChange={handleAddressChange} />
                    </Form.Item>
                    <Form.Item
                        label="Đường dẫn Facebook"
                        name="fblink"
                    >
                        <Input placeholder="Nhập đường dẫn Facebook" className="h-[32px] rounded" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <MapComponent city={cityName} district={districtName} ward={wardName} details={addressDetails} />
                </Col>
            </Row>
            <Form.Item
                label="Mô tả"
                name="description"
                valuePropName="content"
                getValueFromEvent={(e: { content: string }) => e}
                rules={[{ required: true, message: "Vui Lòng Nhập Mô Tả" }]}
            >
                <Editor></Editor>
            </Form.Item>

            <Form.Item name="files">
                <div className='rounded' style={{ border: 'solid 1px #D9D9D9', padding: '10px' }}>
                    <Upload
                        listType="picture"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                        itemRender={(originNode, file, fileList) => (
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                    padding: '5px',
                                    marginBottom: '10px',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '4px'
                                }}
                                draggable
                                onDragStart={(e) => handleDragStart(e, fileList.indexOf(file))}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => handleDrop(e, fileList.indexOf(file))}
                            >
                                <span
                                    style={{
                                        width: '30px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        padding: '5px',
                                        marginRight: '10px',
                                        cursor: 'grab'
                                    }}
                                >
                                    {fileList.indexOf(file) + 1}
                                </span>
                                <div style={{ flex: 1 }}>
                                    {originNode}
                                </div>
                            </div>
                        )}
                    >
                        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </div>
                    </Upload>
                </div>
            </Form.Item>
        </Form>

    );
};

export default FormAdd;