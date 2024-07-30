'use client';

import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiMoreHorizontal } from 'react-icons/fi';
import Image from "next/image"
import { Button } from 'antd';
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import ReportModal from '@ui/Master/report-modal'


const Detail = () => {
    const post = {
        id: 1,
        author: 'Cô Minh Hiếu',
        title: 'Nhà trọ sinh viên Cần Thơ',
        time: '15:30 04/03/2024',
        description: {
            title: 'NHÀ TRỌ SẠCH ĐẸP, 1 TRỆT 1 LẦU, ĐẦY ĐỦ TIỆN NGHI, MÁY LẠNH,... THOÁNG…',
            price: '2.5 triệu/tháng',
            square: '32m²',
            address: 'Quận Ninh Kiều, Cần Thơ',
            details: 'CHÍNH CHỦ CHO THUÊ NHÀ TRỌ MINI ĐANG TRỐNG, Ở ĐƯỢC LIỀN. Địa chỉ: 44/23/16 Võ Trường Toản, Phường An Hòa, Quận Ninh Kiều, Cần Thơ- Khu vực an ninh, yên…',
        },
        images: [
            '/avadagroup.png',
            '/Rectangle 10.png',
            '/Rectangle 11.png',
            '/Rectangle 12.png',
            '/bun.png'
        ],
        likes: '830k',
        comments: '390k'
    };

    const [selectedImage, setSelectedImage] = useState(post.images[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % post.images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setSelectedImage(post.images[currentImageIndex]);
    }, [currentImageIndex]);

    return (
        <div>
            <div key={post.id} >
                <div className="flex-1 mr-4">
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="w-fit h-fit">
                            <Image width={40} height={40} src="/avatar.jpg" alt="Avatar" className="rounded-full w-full h-full" />
                        </div>
                        <div>
                            <div className="font-bold border-r border-[#898989] inline-block pr-2 text-sm">{post.author}</div>
                            <div className="font-bold inline-block p-2 text-sm">{post.title}</div>
                            <div className="italic text-xs">{post.time}</div>
                        </div>
                        <div className='flex flex-grow justify-end'>
                            <ReportModal />
                        </div>

                    </div>
                    <div className="text-sm">
                        <p className='pl-2 text-lg font-bold'>{post.description.title}</p>
                        <p className='pl-2'>
                            <span className="font-bold text-red-600">{post.description.price}</span> - {post.description.square}
                        </p>
                        <p className='pl-2'><span className='font-bold'>Địa chỉ:</span> {post.description.address}</p>
                        <p className='pl-2'><span className='font-bold'>Mô tả:</span> {post.description.details}</p>
                    </div>
                    <div className="flex-shrink-0 h-fit my-4 flex">
                        <div className="w-9/12">
                            <Image width={300} height={300} src={selectedImage} alt="Selected" className="w-full h-auto object-cover rounded-md" />
                        </div>
                        <div className="w-1/12"></div>
                        <div className="w-2/12 flex flex-col space-y-2 pl-2">
                            {post.images.map((img, index) => (
                                <div key={index} onClick={() => setSelectedImage(img)} className="cursor-pointer">
                                    <Image width={200} height={200} src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-auto object-cover rounded-md transition-transform duration-200 hover:scale-105" />
                                </div>
                            ))}
                        </div>
                    </div>
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
        </div >
    );
}

export default Detail;
