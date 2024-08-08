'use client'

import { Avatar, Popover , notification } from 'antd';
import { UserOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { tokenAtom , userAtom } from "@storage"
import { useSetAtom } from 'jotai'
import { AccountInfo } from "@type/taikhoan"

export default function Menu({info }:{info? : AccountInfo}) {
    const setToken = useSetAtom(tokenAtom)
    const setUser = useSetAtom(userAtom)
    

    const logout = () => {
        setToken(null)
        setUser(null)
        notification.success({ message : "Đăng Xuất Thành Công" , placement : "bottomRight"})

    }

    function ChangePage() {
        return <div >
            <Link href='/baidang' className='flex gap-3 py-1 text-black dark:text-white hover:text-primary cursor-pointer transition-colors'>
                <FormOutlined style={{ fontSize: '20px' }} />
                Bài Đăng Của Tôi
            </Link>
            <Link href='/taikhoan' className='flex gap-3 py-1 text-black dark:text-white hover:text-primary cursor-pointer transition-colors'>
                <UserOutlined style={{ fontSize: '20px' }} />
                Cài Đặt Tài Khoản
            </Link>
            <div>
                <hr />
            </div>
            <div className='flex gap-3 py-1 text-black dark:text-white hover:text-primary transition-colors cursor-pointer' onClick={logout}>
                <LogoutOutlined style={{ fontSize: '20px' }} />
                Đăng Xuất
            </div>
        </div>
    }

    return (
        <>
            <Popover content={<ChangePage />} trigger="hover" >
                <div className='flex gap-2 items-center cursor-pointer ml-4'>
                    <div>
                        <div className='flex justify-end text-base font-medium'>{info?.full_name}</div>
                        <div className='flex justify-end text-xs text-gray-400 dark:text-blue-500 font-light'>{info?.role}</div>
                    </div>
                    <Avatar icon={<UserOutlined />} />
                </div>
            </Popover>
        </>
    )
}
