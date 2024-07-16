'use client'
import { MdOutlineKeyboardArrowRight, MdKeyboardArrowLeft  } from "react-icons/md";
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import Card from "@/app/ui/nhatro/card";
import News from "@/app/ui/nhatro/news";
import { FilterPrice, FilterArea, FilterLocation } from "../ui/nhatro/filters";
import Breadcrumbs from "@/app/ui/breadcrums";
export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro', active: true },
    ];
    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        console.log(current, pageSize);
    };
    return <div className="">
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <div className="content-center mx-auto grid grid-cols-12 gap-4">
            <div className="site-left p-4 bg-secondary col-span-8 border border-border-color rounded-lg">
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
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={3}
                    total={50}
                    className="flex justify-end mt-3"
                />
            </div>
            <div className="site-right col-span-4 rounded">
                <FilterLocation/>
                <FilterPrice/>
                <FilterArea/>
                <News/>
            </div>
        </div>
    </div>
}
