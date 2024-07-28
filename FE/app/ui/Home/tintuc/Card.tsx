import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link'
import { EllipsisOutlined } from '@ant-design/icons'


const post = {
    id: 1,
    author: 'Lan Lan',
    title: 'Tuyển dụng Flutter tại Việt Nam',
    time: '15:30 04/03/2024',
    description: "Từ: 1,5 - 2 năm kinh nghiệm với Flutter; Từng làm dự án lĩnh vực Education; Có kiến thức tốt về OOP, Data Structures, Algorithm;",
    likes: '830k',
    comments: '390k'
}

export default function CardNews({ isSetting = false }: {
    isSetting?: boolean
}) {
    return (
        <div>
            <div className='' >
                <div key={post.id} className="p-4 flex gap-2 border my-4 rounded-lg h-full ">
                    <div className="flex-1 w-3/4 h-fit">
                        {isSetting &&
                            <Link href={`/baidang/tintuc/${post.id}`}
                                className='flex cursor-alias items-start justify-center w-fit my-3'
                            >
                                <EllipsisOutlined />
                            </Link>
                        }
                        <div className="flex items-center h-fit">
                            <div className="w-[50px] h-full flex items-center justify-center">
                                <Image src="/avatar.jpg" width={50} height={50} alt="Avatar" className="rounded-full object-cover w-full" />
                            </div>
                            <div className="flex flex-grow flex-col px-2 gap-1">
                                <div>
                                    <div className="font-bold border-r inline-block mr-2 pr-2 border-[#898989] text-sm">{post.author}</div>
                                    <div className="font-bold inline-block  text-sm">{post.title}</div>
                                </div>
                                <div className="italic text-xs text-[#231F20]">{post.time}</div>
                            </div>
                        </div>
                        <div className="text-sm text-black mt-3">
                            [Trung Kinh] - Flutter<br />
                            {post.description}
                            <p>
                                <Link href={`/tintuc/${post.id}`} className="text-blue-500">Xem thêm </Link>
                            </p>

                        </div>
                        <div className="mt-2 text-gray-500 text-xs flex space-x-4">
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
                    <div className="flex items-center w-1/4">
                        <Image src="/bun.png" alt="Food" width={200} height={200} className="w-full object-cover rounded-md" />
                    </div>

                </div>
            </div>
        </div>
    );
}