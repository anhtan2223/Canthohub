'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import {EllipsisOutlined} from '@ant-design/icons'
import { jobPostSeeding } from "@data"
import { Post } from "@type/master"
import { formatNumber } from "@util"



export default function Card( { post = jobPostSeeding ,  isSetting=false }:{
    post : Post
    isSetting? : boolean
}) {
    
    const info = post?.job_post
    const router = useRouter()
    const onClick = () => {
        router.push(`/vieclam/${post.id}`)
    }
    const onSetting = (e:any) => {
        e.stopPropagation();
        router.push(`/baidang/vieclam/${post.id}`)
    }

    return (
      <>
        <div className='flex hover:cursor-pointer hover:border-black hover:border-2 items-center mt-4 gap-x-8 dark:text-dark-text dark:bg-dark-secondary dark:border-dark  w-full border border-border-color rounded-lg' onClick={ onClick }>
            <div className='image w-4/12'>
                <Image src={info?.company_cover_image.url ?? ""} width={250} height={100} className='w-full' alt='Logo' >
                </Image>
            </div>
            <div className='w-8/12'>
                <h3 className="mt-3 flex title text-xl font-bold">
                    <div className='w-10/12'>
                        {post.title}
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
                    {info?.company_name}
                </p>
                <div className='mb-1 pr-2 flex justify-between w-full info? font-bold text-base text-medium-blue'>
                    <div>{info?.career.name}</div>
                    <div>{info?.level}</div>
                    <div>{info?.form}</div>
                </div>
                <div className='mb-1 flex'>
                    <div className='font-bold w-1/3'>Kinh Nghiệm</div>
                    <div className='font-bold text-base text-medium-blue'>{info?.experience.name}</div>
                </div>
                <div className='mb-1 flex'>
                    <div className='font-bold w-1/3'>Lương</div>
                    <div className='font-bold text-base text-medium-blue'>{
                       (info?.salary_from && info?.salary_to) ? `${formatNumber(info?.salary_from)} - ${formatNumber(info?.salary_from)}` : "Thoả Thuận"
                    }</div>
                </div>
                <div className="mb-1 flex items-center">
                    <Image 
                        src={post.user.avatar_image?.url ?? ""} width={40} height={40} className='w-[32px] border-2 aspect-square rounded-full ' alt='Logo' >
                    </Image>
                    <span className='ml-2 font-s'>{post.user.full_name}</span>
                </div>
            </div>
        </div>
      </>
    );
  }