'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Input } from "antd";
import { SearchOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import Menu from '@/app/ui/Master/Menu'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const info = [
    { name: "TIN TỨC", href: "/tintuc" },
    { name: "NHÀ TRỌ", href: "/nhatro" },
    { name: "VIỆC LÀM", href: "/vieclam" },
    { name: "ĂN UỐNG", href: "/anuong" },
]

export default function Header() {
    const path = usePathname();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Initialize dark mode based on local storage or system preference
        if (localStorage.getItem('theme') === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');  
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <div className='h-fit w-3/4 flex mx-auto'>
                <div className='w-1/3 flex items-center'>
                    <Image
                        src="/Logo.png" width={180} height={100} alt='Logo' >
                    </Image>
                </div>

                <div className='flex items-center w-2/3 justify-end '>
                    <div className='flex hidden'>
                        <Input size="large" className='h-[40px]' placeholder="Tìm Kiếm" suffix={<SearchOutlined />} />
                        <Button type="text" className='h-[40px] ml-5'>Đăng Ký Thành Viên</Button>
                        <Button className='bg-medium-blue h-[40px] ml-5 text-white'>Đăng Nhập</Button>
                    </div>
                    <Menu />

                    <div className='w-[40px] h-[40px] flex items-center ml-5'>
                        <Button
                            shape="circle"
                            className='shadow-[0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] dark:border-dark dark:bg-dark dark:text-white'
                            icon={isDarkMode ? <MoonOutlined /> : <SunOutlined />}
                            onClick={toggleDarkMode}
                        />
                    </div>
                </div>
            </div>

            <div className='h-fit bg-medium-blue'>
                <div className='flex h-full w-3/4 mx-auto text-white'>
                    {info.map(i => {
                        return <Link href={i.href} key={i.name} className={
                            clsx(
                                'w-fit h-full py-2 px-8 flex items-center justify-center hover:bg-dark-blue',
                                (path == i.href) && 'bg-dark-blue'
                            )
                        }>
                            {i.name}
                        </Link>
                    })}
                </div>
            </div>
        </>
    )
}
