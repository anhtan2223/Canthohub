'use client';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image'
import { Button } from 'antd';
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";


const NewsDetail = () => {
    const post = {
        id: 1,
        author: 'Lan Lan',
        title: 'Tuyển dụng Flutter tại Việt Nam',
        time: '15:30 04/03/2024',
        description: 'Sẽ là thật tuyệt nếu rơi vào một chiều mưa, em ôm anh thật chặt và hỏi em tìm được việc chưa. Nếu chưa thì về team Avada Group nha, chúng mình đang tìm kiếm đồng đội Full Stack Nodejs + Reactjs. Thu nhập: 12 - 25 triệu Yêu cầu: - Trên 1-2 năm kinh nghiệm làm việc với NodeJS và ReactJS - Có kinh nghiệm làm việc với mô hình Agile; làm việc với Database NoSQL: MongoDB hoặc Firestore - Có kinh nghiệm với điện toán đám mây, một trong: Google Cloud, Firebase, AWS, kiến trúc hệ thống microservice - Khả năng đọc hiểu Tiếng Anh tốt, độ tuổi từ 23 - 30. Quyền lợi: - Được làm việc với những công nghệ hot nhất - Tham gia xây dựng hệ thống lớn - Được cung cấp thiết bị làm việc đầy đủ, hiện đại - Được hưởng đầy đủ chế độ phúc lợi như BHXH, thưởng lễ Tết, lương tháng 13, du lịch hàng năm... - Phụ cấp gửi xe, phụ cấp đi lại,... - Văn phòng làm việc tiện nghi; cung cấp trà, cafe và có tủ đồ ăn uống, bánh kẹo hàng ngày - Tham gia các CLB chạy, đá bóng, boardgame, văn nghệ ... - Nghỉ T7, CN và nhiều chế độ cực hấp dẫn. Địa chỉ làm việc: Trần Phú, Hà Đông, Hà Nội Ứng tuyển ngay: Gửi CV vào mail anhvn@avadagroup.com (Tiêu đề ghi rõ NodeJS & ReactJS Developer - Họ và tên)' ,
        likes: '830k',
        comments: '390k'
    };

    return (
        <div className="rounded-lg flex-grow">
            <div key={post.id} className="relative">
                <div className="flex-1 mr-4">
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="w-fit h-fit">
                            <Image width={40} height={40} src="/avatar.jpg" alt="Avatar" className="rounded-full w-full h-full" />
                        </div>
                        <div>
                            <div className="font-bold border-r border-[#898989] inline-block pr-2 text-sm">{post.author}</div>
                            <div className="font-bold inline-block p-2 text-sm">{post.title}</div>
                            <div className="italic text-xs text-[#231F20]">{post.time}</div>
                        </div>
                    </div>
                    <div className="text-sm text-black">
                        {post.description}
                        <div className="object-contain w-full mt-4">
                            <Image width={500} height={500} src="/avadagroup.png" alt="Food" className="w-full h-auto object-cover rounded-md" />
                        </div>
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
            </div>
        </div>
    );
}

export default NewsDetail;
