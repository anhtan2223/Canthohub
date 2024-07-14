import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return <>
      <div className='h-1/6 flex items-end' >
        <hr className='w-9/12 mx-auto mb-6' />
      </div>
      <div className='h-4/6 w-9/12 mx-auto flex'>
        <div className='w-1/4'>
          <Image 
              src="/Logo.png" width={180} height={100} alt='Logo'>
          </Image>
          <p className='text-sm'>
              Cần Thơ Hub là trang thông tin tổng hợp về cuộc sống ở Cần Thơ
          </p>
        </div>
        <div className='w-1/4 flex justify-end'>
          <div className='w-7/12'>
              <div className='font-semibold	text-base mb-5'>
                Về Cần Thơ Hub
              </div>
              <div className='my-4 text-sm'>Trang chủ</div>
              <div className='my-4 text-sm'>Giới thiệu</div>
              <div className='my-4 text-sm'>Quy chế hoạt động</div>
              <div className='my-4 text-sm'>Chính sách bảo mật</div>
              <div className='my-4 text-sm'>Liên hệ</div>
          </div>
        </div>
        <div className='w-1/4 flex justify-end'>
          <div className='w-8/12'>
              <div className='font-semibold	text-base mb-5'>
                Các dịch vụ cung cấp
              </div>
              <div className='my-4 text-sm'>Giải trí</div>
              <div className='my-4 text-sm'>Việc làm</div>
              <div className='my-4 text-sm'>Phòng trọ</div>
              <div className='my-4 text-sm'>Địa điểm check-in</div>
              <div className='my-4 text-sm'>Sự kiện</div>
          </div>
        </div>
        <div className='w-1/4 flex justify-end'>
          <div className='w-8/12'>
            <div className='font-semibold	text-base mb-3 '>
              Liên hệ với chúng tôi
            </div>
            <div className='flex w-[165px] justify-between'>
              <Image src="/Facebook.png" width={50} height={50} alt='Logo'></Image>
              <Image src="/Tiktok.png" width={50} height={50} alt='Logo'></Image>
              <Image src="/Zalo.png" width={50} height={50} alt='Logo'></Image>
            </div>
            <div className='mt-5 text-xs'>Email: canthohub@gmail.com</div>
            <div className='mt-2 text-xs'>SĐT: 0935xxxxxx</div>
          </div>
        
        </div>
      </div>
      <hr className='w-9/12 mx-auto ' />
      <div className='h-1/6 flex items-center justify-center '>
      Copyright © 2024 - canthohub.com
      </div>
  </>
}
