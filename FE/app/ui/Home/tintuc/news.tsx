'use client';

import React, { useState } from 'react';
import { useRouter} from 'next/navigation'

const News = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    const router = useRouter();

    const posts = [...Array(15)].map((_, index) => ({
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

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePostsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPostsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to first page when posts per page changes
    };
    

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="bg-white px-6 pt-6 pb-10 rounded-md space-y-6 flex-grow">
            <p className='font-bold text-lg mb-6'>Điểm hóng hớt</p>
            {currentPosts.map((post, index) => (
                <div className='cursor-pointer' key={index} onClick={()=>{router.push(`/tintuc/${index}`)}}>
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
                </div>
            ))}

            <div className="flex justify-end items-center mt-6">
                <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} className="px-[11px] py-[4px] m-1">
                    {/* {'<'} */}
                    <img src="/Icon/left.png" alt="" className='w-[6.51px] h-[10.36px]' />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button key={i} onClick={() => handleClick(i + 1)} className={`px-[11px] py-[4px] m-1 rounded-md ${currentPage === i + 1 ? 'border border-[#3559E0] text-[#3559E0]' : ''}`}>
                        {i + 1}
                    </button>
                ))}
                <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages} className="px-[11px] py-[4px] m-1">
                    {/* {'>'} */}
                    <img src="/Icon/right.png" alt="" className='w-[6.51px] h-[10.36px]' />
                </button>
                <select value={postsPerPage} onChange={handlePostsPerPageChange} className="h-10 ml-2 border rounded-md border-gray-300 text-base">
                    <option value={5}>5 / trang</option>
                    <option value={10}>10 / trang</option>
                    <option value={15}>15 / trang</option>
                </select>
            </div>
        </div>
    );
}

export default News;
