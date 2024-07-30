import { Button } from "antd";
import Search from "@/app/ui/Master/search"
import Link from 'next/link'
import Sort from '@/app/ui/Master/sort'

export default function SearchBar() {
    const sortOtp = [
        { label: 'Mặc định', value: 'default' },
        { label: 'Lượng Thích', value: 'link' },
        { label: 'Lượng Comment', value: 'commnet' },
        { label: 'Thẻ', value: 'tag' },
    ]
    return (
        <div className='flex h-fit'>
            <Search
                placeholder="Tìm Bài Viết"
                className='w-full'
            />
            <Link href='/baidang/tintuc'>
                <Button className="mx-3" type="primary">Tạo Mới</Button>
            </Link>
            <div className="flex justify-end items-center w-4/12">
                <div className="flex items-center">
                    <Sort options={sortOtp} />
                </div>
            </div>
        </div>
    )
}
