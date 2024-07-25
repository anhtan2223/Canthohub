'use client'
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import Breadcrumbs from "@/app/ui/Master/breadcrums";
import Card from '@/app/ui/Home/nhatro/Card';
import { FilterArea, FilterLocation, FilterPrice } from '../../ui/Home/nhatro/filters';
import News from '@/app/ui/Home/nhatro/news';
import { useRouter} from 'next/navigation'
export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro', active: true },
    ];
    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        console.log(current, pageSize);
    };
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
                        <div className="">
                            <form className="max-w-sm mx-auto ml-3">
                                <select id="countries" className="custom-select">
                                    <option defaultChecked>Mặc định</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>
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
                        showSizeChanger
                        onShowSizeChange={onShowSizeChange}
                        defaultCurrent={3}
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
