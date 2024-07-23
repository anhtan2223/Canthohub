'use client';

import React from 'react';

const Events = () => {
    return (
        <div className='bg-white px-6 pt-6 pb-10 rounded-md flex-shrink-0 w-full'>
            <p className='text-[#0F2167] text-lg mb-6'>Sự kiện nổi bật</p>
            <div className='space-y-3'>
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-white p-3 rounded-md flex justify-between items-start border border-gray-200">
                        <p className='text-base'>
                            <span className='underline'>Trường Công nghệ Thông tin và Truyền thông - Đại học Cần Thơ</span> tuyển sinh đại học Chính quy năm 2024 .....
                            <a href="#" className="text-blue-500 ml-1"> {'>>>'}Xem thêm </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
