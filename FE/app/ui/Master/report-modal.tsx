'use client'
import { WarningOutlined, EllipsisOutlined, FlagOutlined } from '@ant-design/icons'
import { Input, message, Popover, Modal } from 'antd';
import { useState } from 'react'
const { TextArea } = Input;



export default function ReportModal() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [content, setContent] = useState('')

    const showModal = () => {
        setIsModalOpen(true);
    };
    const resetContent = () => {
        setContent('')
    }
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setConfirmLoading(false);
            message.success("Báo cáo Bài Viết Thành Công")
            resetContent()
        }, 2000);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
        resetContent()
        message.error("Huỷ Báo Cáo Bài Viết")
    };

    const onSave = () => {
        message.success("Lưu Bài Viết Thành Công")
    }
    const onReport = () => {
        showModal()
    }

    const POContent = (
        <div className='p-1'>
            <div className='flex gap-2  hover:cursor-pointer mb-2' onClick={onSave}>
                <FlagOutlined />
                <p>Lưu Bài Viết </p>
            </div>
            <div className='flex gap-2  hover:cursor-pointer' onClick={onReport}>
                <WarningOutlined />
                <p>Báo Cáo Bài Viết </p>
            </div>
            <Modal
                title="Báo Cáo Bài Viết"
                open={isModalOpen}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <TextArea
                    rows={4}
                    value = {content}
                    onChange = {(e:any) => {setContent(e?.target?.value)}}
                    placeholder='Nội Dung Báo Cáo Bài Viết'
                />
            </Modal>
        </div>
    );

    return (
        <div>
            <Popover placement="leftTop" content={POContent}>
                <EllipsisOutlined className='w-full' />
            </Popover>
        </div>
    );
}

