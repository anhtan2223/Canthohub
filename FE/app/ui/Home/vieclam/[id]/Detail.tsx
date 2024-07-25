import Image from 'next/image'
import { JobInfo } from '@/app/lib/types/vieclam'
import { FiArrowRight } from 'react-icons/fi';
import { Button } from 'antd';
import { AiOutlineLike , AiOutlineComment } from "react-icons/ai";



interface DetailProps {
    info: JobInfo;
}

export default async function Detail( {info} : DetailProps) {
  return (
    <div className='bg-white border border-border-color rounded-lg p-5'>
      <div className='flex items-center' >
        <Image 
        src={info.avatar} width={50} height={50} className='w-[40px] border-2 aspect-square rounded-full ' alt='Logo' >
        </Image>
        <span className='ml-2 text-base font-bold'>{info.user_upload}</span>
      </div>
      <div className='title my-5 text-xl font-bold w-full flex justify-center'>
        {info.title}
      </div>
      <div className='flex'>
          <div className='w-9/12'>
              <p className='text-lg font-bold mb-1'>Thông Tin Công Ty</p> 
              <div className='flex text-base mb-2 items-center'>
                <p className='font-bold mr-1'>Công Ty : </p> 
                <p>{info.company}</p> 
              </div> 
              <div className='flex text-base items-center' >
                <p className='font-bold mr-1'>Địa Chỉ :</p> 
                <p>{info.address}</p> 
              </div> 
          </div>
          <div className='w-3/12 flex justify-end items-center'>
            <Image src={info.company_logo} width={200} height={100} className='w-full h-fit' alt='Logo' ></Image>
          </div>
      </div>

      <div className='mt-5'>
          <p className='text-lg font-bold mb-1'>Thông tin Tuyển Dụng</p> 
            <div className='flex'>
                <div className='flex text-base mb-2 items-center w-1/2'>
                    <p className='font-bold w-fit mr-2'>Ngành Nghề : </p> 
                    <p>{info.career}</p> 
                </div>
                <div className='flex text-base mb-2 items-center w-1/2'>
                    <p className='font-bold mr-2'>Vị Trí : </p> 
                    <p>{info.level}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='flex text-base mb-2 items-center w-1/2'>
                    <p className='font-bold w-fit mr-2'>Hình Thức : </p> 
                    <p>{info.form}</p> 
                </div>
                <div className='flex text-base mb-2 items-center w-1/2'>
                    <p className='font-bold mr-2'>Số Lượng : </p> 
                    <p>{info.quantity}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='flex text-base mb-2 items-center w-1/2'>
                    <p className='font-bold w-fit mr-2'>Kinh Nghiệm : </p> 
                    <p>{info.experience}</p> 
                </div>
                <div className='flex text-base mb-2 items-center w-1/2'>
                    <p className='font-bold mr-2'>Mức Lương : </p> 
                    <p>{info.salary}</p>
                </div>
            </div>
            <div className='flex text-base mb-2 items-center w-full'>
                <p className='font-bold w-fit mr-2'>Thời gian tuyển dụng : </p> 
                <p>{info.apply_from} đến {info.apply_to}</p> 
            </div>
      </div>

        <div className='mt-5'>
          <p className='text-lg font-bold mb-1'>Mô Tả Công Việc</p> 
          <span>
            Hỗ trợ các dự án hiện tại của công ty theo sự hướng dẫn của quản lý và đồng nghiệp.
            Tham gia vào các buổi họp nhóm và đóng góp ý kiến, ý tưởng sáng tạo.
            Thực hiện nghiên cứu, thu thập và phân tích dữ liệu liên quan đến dự án.
            Hỗ trợ các công việc hành chính, tổ chức và quản lý tài liệu.
            Thực hiện các nhiệm vụ khác theo yêu cầu nhằm hỗ trợ hoạt động hàng ngày của công ty.
          </span>
          <div className='font-lg text-medium-blue my-2 cursor-pointer'>
            <p>Tải File Mô Tả Công Việc</p>
          </div>
          
        </div>

        <div className='mt-5'>
          <p className='text-lg font-bold mb-1'>Yêu Cầu</p> 
          <span>
            Trên 1-2 năm kinh nghiệm làm việc với NodeJS và ReactJS
            Có kinh nghiệm làm việc với mô hình Agile; làm việc với Database NoSQL: MongoDB hoặc Firestore
            Có kinh nghiệm với điện toán đám mây, một trong: Google Cloud, Firebase, AWS, kiến trúc hệ thống microservice
            Khả năng đọc hiểu Tiếng Anh tốt, độ tuổi từ 23 - 30.
          </span>

        </div>

        <div className='mt-5'>
          <p className='text-lg font-bold mb-1'>Phúc Lợi</p>
          <span>
            Được làm việc với những công nghệ hot nhất
            Tham gia xây dựng hệ thống lớn
            Được cung cấp thiết bị làm việc đầy đủ, hiện đại
            Được hưởng đầy đủ chế độ phúc lợi như BHXH, thưởng lễ Tết, lương tháng 13, du lịch hàng năm...
            Phụ cấp gửi xe, phụ cấp đi lại,..
            Văn phòng làm việc tiện nghi; cung cấp trà, cafe và có tủ đồ ăn uống, bánh kẹo hàng ngày
            Tham gia các CLB chạy, đá bóng, boardgame, văn nghệ ...
            Nghỉ T7, CN và nhiều chế độ cực hấp dẫn.oán đám mây, một trong: Google Cloud, Firebase, AWS, kiến trúc hệ thống microservice
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
