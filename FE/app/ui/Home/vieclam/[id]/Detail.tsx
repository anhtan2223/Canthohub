import Image from 'next/image'
import { Post } from '@type/master'
import { FiArrowRight } from 'react-icons/fi';
import { Button } from 'antd';
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import ReportModal from '@ui/Master/report-modal'
import { stringityAddress, formatNumber } from "@util"

interface DetailProps {
  info: Post;
}

export default async function Detail({ info }: DetailProps) {
  return (
    <div className='bg-white border rounded-lg p-5 dark:text-dark-text dark:bg-dark-secondary dark:border-dark'>
      <div className='flex items-center' >
        <Image
          src={info.user.avatar_image?.url} width={50} height={50} className='w-[40px] border-2 aspect-square rounded-full ' alt='Logo' >
        </Image>
        <span className='ml-2 text-base font-bold'>{info.user.full_name}</span>
        <div className='flex flex-grow justify-end'>
          <ReportModal />
        </div>
      </div>
      <div className='title my-5 text-xl font-bold w-full flex justify-center'>
        {info.title}
      </div>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='md:lg:w-9/12'>
          <p className='text-[16px] font-bold mb-3'>Thông Tin Công Ty</p>
          <div className='flex text-base mb-2 items-center'>
            <p className='font-bold w-2/12'>Công Ty</p>
            <p>{info?.job_post?.company_name}</p>
          </div>
          <div className='flex text-base items-center' >
            <p className='font-bold w-2/12'>Địa Chỉ</p>
            <p>{info?.job_post?.address && stringityAddress(info?.job_post?.address)}</p>
          </div>
        </div>
        <div className='md:w-3/12 flex justify-end items-center'>
          <Image src={info?.job_post?.company_cover_image.url ?? ""} width={400} height={400} className='w-full h-fit' alt='Logo' ></Image>
        </div>
      </div>

      <div className='mt-5'>
        <p className='text-[16px] font-bold mb-3'>Thông tin Tuyển Dụng</p>
        <div className='flex'>
          <div className='lg:flex text-base mb-2 items-center w-full md:w-1/2 lg:w-1/2'>
            <p className='font-bold w-6/12'>Ngành Nghề</p>
            <p>{info?.job_post?.career.name}</p>
          </div>
          <div className='lg:flex text-base mb-2 items-center w-full md:w-1/2 lg:w-1/2'>
            <p className='font-bold w-6/12'>Vị Trí</p>
            <p>{info?.job_post?.career.name}</p>
          </div>
        </div>
        <div className='flex'>
          <div className='lg:flex text-base mb-2 items-center w-full md:w-1/2 lg:w-1/2'>
            <p className='font-bold w-6/12'>Hình Thức</p>
            <p>{info?.job_post?.form}</p>
          </div>
          <div className='lg:flex text-base mb-2 items-center w-full md:w-1/2 lg:w-1/2'>
            <p className='font-bold w-6/12'>Số Lượng</p>
            <p>{info?.job_post?.quantity}</p>
          </div>
        </div>
        <div className='flex'>
          <div className='lg:flex text-base mb-2 items-center w-full md:w-1/2 lg:w-1/2'>
            <p className='font-bold w-6/12'>Kinh Nghiệm</p>
            <p>{info?.job_post?.experience.name}</p>
          </div>
          <div className='lg:flex text-base mb-2 items-center w-full md:w-1/2 lg:w-1/2'>
            <p className='font-bold w-6/12'>Mức Lương</p>
            <p>{(info?.job_post?.salary_from && info?.job_post?.salary_to) ? `${formatNumber(info?.job_post?.salary_from)} - ${formatNumber(info?.job_post?.salary_from)}` : "Thoả Thuận"}</p>

          </div>
        </div>
        <div className='lg:flex text-base w-full'>
          <p className='font-bold lg:w-3/12'>Thời gian tuyển dụng</p>
          <p>
            {/* { info?.job_post?.apply_date_from?.toLocaleString("vi") } */}
          {info?.job_post?.apply_date_from?.toLocaleDateString('en-GB')} - {info?.job_post?.apply_date_to?.toLocaleDateString('en-GB')}
          
          </p>
        </div>
      </div>

      <div className='mt-5'>
        <p className='text-lg font-bold mb-3'>Mô Tả Công Việc</p>
        <span>
          {info?.job_post?.job_description}
        </span>
        <div className='font-lg text-medium-blue my-2 cursor-pointer'>
          <p>Tải File Mô Tả Công Việc</p>
        </div>

      </div>

      <div className='mt-5'>
        <p className='text-lg font-bold mb-3'>Yêu Cầu</p>
        <span>
          {info?.job_post?.requirement}
        </span>

      </div>

      <div className='mt-5'>
        <p className='text-lg font-bold mb-3'>Phúc Lợi</p>
        <span>
          {info?.job_post?.benefits}
        </span>
      </div>

      <div className="my-5">
        <Button>
          <p className='text-medium-blue text-lg'>
            Xem trên facebook
          </p>
          <FiArrowRight className="ml-1 text-black" />
        </Button>
      </div>
      <div className="mt-2 text-gray-500 text-base flex gap-5">
        <div className="flex items-center space-x-1">
          <span>100k</span>
          <AiOutlineLike className='w-[24px] h-[24px]' />
        </div>
        <div className="flex items-center space-x-1">
          <span>100k</span>
          <AiOutlineComment className='w-[24px] h-[24px]' />
        </div>
      </div>

    </div>
  )
}
