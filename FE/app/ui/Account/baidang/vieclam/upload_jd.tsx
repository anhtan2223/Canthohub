import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import {useState} from 'react'

export default function UploadJD(
    { onChange }:
    { onChange?: (file: any) => void; }
) {
    const [fileList, setFileList] = useState([]);

    const handleChange = (info:any) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} Đã Tải Lên Thành Công`);
            setFileList(info.fileList);
            onChange?.(info.fileList)
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} Đã Tải Lên Thất Bại`);
        }
    };
    const handleRemove = () => {
        onChange?.(null)
    }

    return (
        <div>
            <Upload
                onChange={handleChange}
                onRemove={handleRemove}
                maxCount={1}
                accept='application/pdf'
            >
                <Button icon={<UploadOutlined />}>
                    Upload File Mô Tả
                </Button>
            </Upload>
        </div>
    );
}