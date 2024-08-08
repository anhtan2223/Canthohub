'use client'
import Card from '@ui/Home/nhatro/card';
import News from '@/app/ui/Home/nhatro/news'
import { FilterArea, FilterLocation, FilterPrice } from '@ui/Home/nhatro/filters';
import { useRouter } from 'next/navigation'
import Breadcrumbs from "@/app/ui/Master/breadcrums";
import SearchWithSort from "@/app/ui/Home/nhatro/Sort";
import MyPagination from "@/app/ui/Master/Pagination";
import MobileFilter from "../../ui/Master/MobileFilter";


export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro', active: true },
    ];
    const router = useRouter();

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="site-left col-span-1 lg:col-span-8">
                    <div className="bg-secondary border p-4 border-border-color dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg">
                        <div className="h-[60px] rounded w-100 mb-2 flex items-center justify-between">
                            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-5">
                                <h2 className="font-bold text-lg">
                                    Tổng 206 kết quả
                                </h2>
                                <p className="mt-2 md:mt-0">
                                    Cập nhật: 13:17 04/03/2024
                                </p>
                            </div>
                            <div className="flex ">
                                <div className="hidden lg:block">
                                    <SearchWithSort />
                                </div>
                                <MobileFilter>
                                    <SearchWithSort />
                                    <FilterLocation />
                                    <FilterPrice />
                                    <FilterArea />
                                </MobileFilter>
                            </div>
                        </div>
                        <div className="mx-auto grid grid-cols-1 gap-[10px]">
                            <div className='cursor-pointer' onClick={() => { router.push(`/nhatro/1`) }}>
                                <Card></Card>
                            </div>
                            <div className='cursor-pointer' onClick={() => { router.push(`/nhatro/1`) }}>
                                <Card></Card>
                            </div>
                            <div className='cursor-pointer' onClick={() => { router.push(`/nhatro/1`) }}>
                                <Card></Card>
                            </div>
                            <div className='cursor-pointer' onClick={() => { router.push(`/nhatro/1`) }}>
                                <Card></Card>
                            </div>
                        </div>
                        <MyPagination total={100} className="flex justify-end mt-5 mr-2" />
                    </div>
                </div>
                <div className="site-right hidden lg:block col-span-1 lg:col-span-4 rounded">
                    <div className="sticky top-5 h-fit bg-white border dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg">
                        <FilterLocation />
                        <FilterPrice />
                        <FilterArea />
                        <News />
                    </div>
                </div>
            </div>
        </>
    );
}
