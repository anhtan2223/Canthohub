'use client'
import { Upload, type GetProp, type UploadFile, type UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop'
import { useState } from 'react';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
interface UploadImageProps {
    onChange?: (info: any) => void;
    width: number;
    height: number;
}

export default function UploadImage({ onChange, width, height }: UploadImageProps) {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        onChange?.(newFileList);
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
    return (
        <ImgCrop aspect={width / height} quality={1} modalTitle="Edit Image" modalWidth={800}>
            <Upload
                listType="picture-card"
                fileList={fileList} 
                onChange={handleChange}
                onPreview={onPreview}
            >
                {fileList.length < 5 && '+'}
            </Upload>
    </ImgCrop>
      )
}