'use client';

import React from 'react';

const RelatedNews = () => {
    const posts = [...Array(3)].map((_, index) => ({
        id: index + 1,
        author: 'Lan Lan',
        title: 'Tuyển dụng Flutter tại Việt Nam',
        time: '15:30 04/03/2024',
        description: [
            'Từ: 1,5 - 2 năm kinh nghiệm với Flutter;',
            'Từng làm dự án lĩnh vực Education;',
            'Có kiến thức tốt về OOP, Data Structures, Algorithm;'
        ],
        likes: '830k',
        comments: '390k'
    }));

    return (
        <div className="bg-white px-6 pt-6 pb-10 rounded-md space-y-6 flex-grow my-10">
            <p className='font-bold text-lg mb-6'>Liên quan</p>
            {posts.map((post) => (
                <div key={post.id} className="bg-white p-4 rounded-md flex justify-between items-start border border-gray-200">
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
                            [Trung Kinh] - Flutter<br />
                            {post.description.map((desc, i) => (
                                <p key={i} className='pl-2'>&bull; {desc}</p>
                            ))}
                            <p className='pl-2'>
                                <a href="#" className="text-blue-500 ml-1"> {'>>>'}Xem thêm </a>
                            </p>
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
                    <div className="flex-shrink-0 w-[194px] h-[194px]">
                        <img src="/bun.png" alt="Food" className="w-full h-auto object-cover rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RelatedNews;
