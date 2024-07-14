import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "antd";
import { Input } from "antd";
import { SearchOutlined , SunOutlined } from '@ant-design/icons';


export default function Header() {
  return <>
        <div className='h-[107px] w-3/4 flex mx-auto'>
          <div className='w-1/3 flex items-center'>
            <Image 
              src="/Logo.png" width={180} height={100} alt='Logo'>
            </Image>
          </div>

          <div className='flex items-center w-2/3 justify-end '>
            <Input size="large"  className='h-[40px]' placeholder="Tìm Kiếm" suffix={<SearchOutlined/>} />
            <Button type="text" className='h-[40px] ml-5'>Đăng Ký Thành Viên</Button>
            <Button className='bg-medium-blue h-[40px] ml-5 text-white'>Đăng Nhập</Button>
            <div className='w-[40px] h-[40px] flex items-center ml-5'>
              <Button
                shape="circle" 
                className='shadow-[0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)]'
                icon={<SunOutlined/>} 
              />
            </div>
          </div>
        </div>
        
        <div className='h-[44px] bg-medium-blue'>
          <div className='flex h-full w-3/4 mx-auto text-white'>
            <Link href="/tintuc" className='w-[142px] h-full flex items-center justify-center hover:bg-dark-blue'>
              TIN TỨC
            </Link>
            <Link href="/nhatro" className='w-[142px] h-full flex items-center justify-center hover:bg-dark-blue'>
              NHÀ TRỌ
            </Link>
            <Link href="/vieclam" className='w-[142px] h-full flex items-center justify-center hover:bg-dark-blue'>
              VIỆC LÀM
            </Link>
            <Link href="/anuong" className='w-[142px] h-full flex items-center justify-center hover:bg-dark-blue'>
              ĂN UỐNG
            </Link>
          </div>
        </div>
  </>
}
