// Header.tsx
'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Button, Input } from "antd";
import { MoonOutlined, SearchOutlined, SunOutlined } from '@ant-design/icons';
import Menu from '@/app/ui/Master/Menu'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Search from '@/app/ui/Master/MasterSearch'
import { Suspense } from 'react';
import { useTheme } from '@/app/themeProvider';
import MobileMenu from '@ui/Master/MobileMenu'
import { userAtom } from "@storage"
import { useAtomValue } from 'jotai'

const info = [
  { name: "TIN TỨC", href: "/tintuc" },
  { name: "NHÀ TRỌ", href: "/nhatro" },
  { name: "VIỆC LÀM", href: "/vieclam" },
  { name: "ĂN UỐNG", href: "/anuong" },
]

export default function Header() {
  const path = usePathname();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const user = useAtomValue(userAtom)

  return (
    <>
      <div className='h-fit w-11/12 lg:w-3/4 flex mx-auto'>
        <div className='w-1/2 lg:w-1/3 flex items-center'>
          <div className="mr-3"><MobileMenu /></div>
          <Link href={'/'}>
            <Image
              src="/Logo.png" width={180} height={100} className='w-full h-auto' alt='Logo' >
            </Image>
          </Link>
        </div>

        <div className='flex items-center w-1/2 lg:w-2/3 justify-end '>
          <div className='flex flex-grow items-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <Search className='h-full' placeholder="Tìm Kiếm"></Search>
          </Suspense>
          </div>
          {
            !user ?
              <div className='flex' >
                <Link href="/dangky">
                  <Button type="text" className='h-[40px] ml-5'>Đăng Ký Thành Viên</Button>
                </Link>
                <Link href="/dangnhap">
                  <Button className='bg-medium-blue h-[40px] ml-5 text-white'>Đăng Nhập</Button>
                </Link>
              </div>
              :
              <div className="hidden w-fit lg:block">
                <Menu info={user}/>
              </div>
          }

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

      <div className='w-full z-40 fixed bottom-[0] lg:relative h-fit bg-medium-blue'>
        <div className='flex h-full w-full justify-center lg:justify-start lg:w-3/4 mx-auto text-white'>
          {info.map(i => {
            return <Link href={i.href} key={i.name} className={
              clsx(
                'w-fit h-full py-2 px-4 lg:px-8 flex items-center justify-center hover:bg-dark-blue',
                (path == i.href) && 'bg-dark-blue'
              )
            }>
              {i.name}
            </Link>
          })}
        </div>
      </div>
    </>
  );
}
