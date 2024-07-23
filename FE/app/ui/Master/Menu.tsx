'use client'
import { DownOutlined , UpOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined , FormOutlined , LogoutOutlined} from '@ant-design/icons';
import Link from 'next/link';

const user = {
    name : "User Name" ,
    role : "Role" 
}

function ChangePage() {
    return <div className='absolute mr-[60px] top-[60px] border z-10 border-black rounded-lg bg-white'>
                    <Link href='/baidang' className='flex gap-3 px-4 py-2 hover:bg-color cursor-pointer transition-colors'>
                        <FormOutlined style={{ fontSize: '20px'}} />
                        Bài Đăng Của Tôi
                    </Link>
                    <Link href='/taikhoan' className='flex gap-3 px-4 py-2 hover:bg-color cursor-pointer transition-colors'>
                        <UserOutlined style={{ fontSize: '20px'}} />
                        Cài Đặt Tài Khoản
                    </Link>
                    <div>
                        <hr />
                    </div>
                    <Link href='/logout' className='flex gap-3 px-4 py-2 hover:bg-color cursor-pointer'>
                        <LogoutOutlined style={{ fontSize: '20px'}} />
                        Đăng Xuất
                    </Link>
                </div>
}

export default function Menu() {
    const [open , setOpen] = useState(false)
  
    return (
    <>
        <div className='flex gap-2 items-center cursor-pointer' onClick={() => setOpen(!open)}>
            <div>
                <div className='flex justify-end font-sm font-medium'>{user.name}</div>
                <div className='flex justify-end font-xs text-gray-400 font-light'>{user.role}</div>
            </div>
            <Avatar icon={<UserOutlined />} />
            { !open ? <DownOutlined /> :<UpOutlined /> }
        </div>
        {open && <ChangePage/> }
    </>
  )
}
