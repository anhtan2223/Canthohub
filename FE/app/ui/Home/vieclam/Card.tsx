'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import {EllipsisOutlined} from '@ant-design/icons'

const info = {
    id : "item-001" ,
    title : "LẬP TRÌNH VIÊN FLUTTER" ,
    company : "Viet Nam Hi-Tech Engineering Company" ,
    conpany_logo : "/vieclam/Company_Img.png" ,
    career : "Lập Trình Viên" ,
    level : "Intern" ,
    form : "Full-Time" ,
    salary : 'Thoả Thuận' ,
    experience : 'Không Yêu Cầu' ,
    user_upload : "Lan Lan" ,
    avatar : "/vieclam/avartar.png"
}

export default function Card({isSetting=false}:{
    isSetting? : boolean
}) {
    
    const router = useRouter()
    const onClick = () => {
        router.push(`/vieclam/${info.id}`)
    }
    const onSetting = (e:any) => {
        e.stopPropagation();
        router.push(`/baidang/vieclam/${info.id}`)
    }

    return (
      <>
        <div className='flex hover:cursor-pointer hover:border-black hover:border-2 items-center mt-4 gap-x-8  w-full border border-border-color rounded-lg' onClick={ onClick }>
            <div className='image w-4/12'>
                <Image src={info.conpany_logo} width={300} height={200} className='w-full' alt='Logo' >
                </Image>
            </div>
            <div className='w-8/12'>
                <h3 className="mt-3 flex title text-xl font-bold">
                    <div className='w-10/12'>
                        {info.title}
                    </div>
                    {isSetting &&
                        <div 
                        className='flex cursor-alias items-center justify-center w-2/12'
                        onClick={onSetting}
                        >
                            <EllipsisOutlined className='w-[32px] h-[32px]' />
                        </div>
                    }
                    
                </h3>
                <p className="mb-1 company text-xs">
                    {info.company}
                </p>
                <div className='mb-1 flex justify-between w-11/12 info font-bold text-base text-medium-blue'>
                    <div>{info.career}</div>
                    <div>{info.level}</div>
                    <div>{info.form}</div>
                </div>
                <div className='mb-1 flex'>
                    <div className='font-bold w-1/3'>Kinh Nghiệm</div>
                    <div className='font-bold text-base text-medium-blue'>{info.experience}</div>
                </div>
                <div className='mb-1 flex'>
                    <div className='font-bold w-1/3'>Lương</div>
                    <div className='font-bold text-base text-medium-blue'>{info.salary}</div>
                </div>
                <div className="mb-1 flex items-center">
                    <Image 
                    src={info.avatar} width={40} height={40} className='w-[32px] border-2 aspect-square rounded-full ' alt='Logo' >
                    </Image>
                    <span className='ml-2 font-s'>{info.user_upload}</span>
                </div>
            </div>
        </div>
      </>
    );
  }