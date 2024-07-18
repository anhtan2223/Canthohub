'use client';

import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiMoreHorizontal } from 'react-icons/fi';

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
        <div className="bg-white px-6 pt-6 pb-10 rounded-md space-y-6 flex-grow">
            <div key={post.id} className="bg-white p-4 rounded-md flex justify-between items-start border border-gray-200 relative">
                <div className="flex-1 mr-4">
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center">
                            <img src="/avatar.jpg" alt="Avatar" className="rounded-full w-full h-full" />
                        </div>
                        <div>
                            <div className="font-bold border-r border-[#898989] inline-block pr-2 text-sm">{post.author}</div>
                            <div className="font-bold inline-block p-2 text-sm">{post.title}</div>
                            <div className="italic text-xs text-[#231F20]">{post.time}</div>
                        </div>
                    </div>
                    <div className="text-sm text-black">
                        <p className='pl-2 text-lg font-bold'>{post.description.title}</p>
                        <p className='pl-2'>
                            <span className="font-bold text-red-600">{post.description.price}</span> - {post.description.square}
                        </p>
                        <p className='pl-2'><span className='font-bold'>Địa chỉ:</span> {post.description.address}</p>
                        <p className='pl-2'><span className='font-bold'>Mô tả:</span> {post.description.details}</p>
                    </div>
                    <div className="flex-shrink-0 mt-4 flex">
                        <div className="w-9/12">
                            <img src={selectedImage} alt="Selected" className="w-full h-auto object-cover rounded-md" />
                        </div>
                        <div className="w-1/12"></div>
                        <div className="w-2/12 flex flex-col space-y-2 pl-2">
                            {post.images.map((img, index) => (
                                <div key={index} onClick={() => setSelectedImage(img)} className="cursor-pointer">
                                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-auto object-cover rounded-md transition-transform duration-200 hover:scale-105" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-9 mb-9">
                        <a
                            href="#"
                            className="flex items-center text-xl h-12 w-56 text-blue-500 border border-black-500 rounded-md px-2 py-1"
                        >
                            Xem trên facebook <FiArrowRight className="ml-1 text-black" />
                        </a>
                    </div>
                    <div className="mt-2 text-gray-500 text-xs flex space-x-4">
                        <div className="flex items-center space-x-1">
                            <span>{post.likes}</span>
                            <img src="/Icon/like.png" alt="" className='w-[21px] h-[21px]' />
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>{post.comments}</span>
                            <img src="/Icon/cmt.png" alt="" className='w-[21px] h-[21px]' />
                        </div>
                    </div>
                </div>
                <div className="absolute top-6 right-10 text-2xl">
                    <FiMoreHorizontal className="text-gray-600 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default Detail;
