'use client'
import type { PaginationProps } from 'antd';
import Pagination  from "@ui/Master/Pagination";
import Breadcrumbs from "@/app/ui/Master/breadcrums";
import Card from '@ui/Home/nhatro/card';
import { FilterArea, FilterLocation, FilterPrice } from '@ui/Home/nhatro/filters';
import News from '@/app/ui/Home/nhatro/news';
import { useRouter} from 'next/navigation'
import Sort from '@ui/Master/sort'
export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro', active: true },
    ];
    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        console.log(current, pageSize);
    };
    const sortOtp = [
        { label: 'Mặc định', value: 'default' },
        { label: 'Giá', value: 'price' },
        { label: 'Cao - Thấp', value: 'high-to-low' },
        { label: 'Thấp - Cao', value: 'low-to-high' }
    ]
    const router = useRouter();
    return <div className="">
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <div className="content-center mx-auto grid grid-cols-12 gap-4">
            <div className="site-left col-span-8">
                <div className="border border-border-color rounded-lg p-4 bg-secondary">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-lg">
                            Tổng 206 kết quả
                        </h2>
                        <p>
                            Cập nhật: 13:17 04/03/2024
                        </p>
                    </div>
                    <div className="flex justify-start items-center mt-4">
                        <span>Sắp xếp: </span>
                        <div className="ml-3"><Sort options={sortOtp}/></div>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{router.push(`/nhatro/1`)}}>
                        <Card></Card>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{router.push(`/nhatro/1`)}}>
                        <Card></Card>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{router.push(`/nhatro/1`)}}>
                        <Card></Card>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{router.push(`/nhatro/1`)}}>
                        <Card></Card>
                    </div>
                    <Pagination
                        total={50}
                        className="flex justify-end mt-3"
                    />
                </div>
            </div>
            <div className="site-right col-span-4 rounded">
                <FilterLocation />
                <FilterPrice />
                <FilterArea />
                <News />
            </div>
        </div>
    </div>
}
