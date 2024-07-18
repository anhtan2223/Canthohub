import React from 'react'
import Detail from '@/app/ui/vieclam/[id]/Detail'
import Breadcrumbs from "@/app/ui/breadcrums";
import { JobInfo } from '@/app/lib/types/JobInfo'
import Events from "@/app/ui/tintuc/events";
import EventsSection from "@/app/ui/tintuc/EventsSection";
import RelateJob from '@/app/ui/vieclam/[id]/RelateJob'



const info : JobInfo  = {
  id : "item-002" ,
  title : "LẬP TRÌNH VIÊN FLUTTER" ,
  company : "Viet Nam Hi-Tech Engineering Company" ,
  company_logo : "/vieclam/Company_Img.png" ,
  address : '69 Đ. Lý Thái Tổ, Hưng Phú, Cái Răng, Cần Thơ',
  career : "Lập Trình Viên" ,
  level : "Intern" ,
  form : "Full-Time" ,
  salary : 'Thoả Thuận' ,
  experience : 'Không Yêu Cầu' ,
  user_upload : "Lan Lan" ,
  avatar : "/vieclam/avartar.png" ,
  quantity : 5 ,
  apply_from  : "1/1/1900" ,
  apply_to    : "1/1/2025"
}

export default function DetailPage() {
  const breadcrumbs = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Việc Làm', href: '/vieclam' },
    { label: info.title , href: `vieclam/${info.id}`, active: true },
];
  return <>
    <Breadcrumbs breadcrumbs={breadcrumbs}/>
    <div className='flex'>
      <div className='w-8/12'>
        <Detail info={info}></Detail>
        <div className='mt-6'>
          <RelateJob></RelateJob>
        </div>
      </div>
      <div className='w-4/12 ml-4'>
        <div className='mb-5 border rounded-lg '>
          <Events></Events>
        </div>
        <div className='mt-5 border rounded-lg'>
          <EventsSection></EventsSection>
        </div>
      </div>
    </div>
  </>
}
