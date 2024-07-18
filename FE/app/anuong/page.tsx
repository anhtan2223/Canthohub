'use server'
import Breadcrumbs from "@/app/ui/breadcrums";
import { MdFoodBank } from "react-icons/md";
import Event from "@/app/ui/tintuc/events"
import EventsSection from "../ui/tintuc/EventsSection";
import SearchWithSort from "../ui/anuong/SearchWithSort";
import MyPagination from "@/app/ui/Pagination";
import FoodContainer from "../ui/anuong/FoodContainer";

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    if (searchParams?.page) {
        console.log("Hello!")
    }
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro', active: true },
    ];
    const foods = [...Array(12)].map((_, index) => ({
        image: "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400",
        title: "Cơm gà Lê Trang",
        description: "Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc",
        price: "20.000 - 275.000",
        address: "Ninh Kiều, Cái Răng, Cần Thơ",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
    }));
    
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="grid grid-cols-12 gap-4">
                <div className="site-left col-span-8">
                    <div className="bg-secondary border p-4 border-border-color rounded-lg">
                        <div className="h-[60px] rounded w-100 mb-2 flex items-center justify-between">
                            <div className="flex items-center">
                                <MdFoodBank className=" text-medium-blue text-[50px]"></MdFoodBank>
                                <h2 className="font-bold text-lg ml-2">
                                    Điểm ăn uống
                                </h2>
                            </div>
                            <SearchWithSort/>
                        </div>
                        <div className="mx-auto grid grid-cols-3 gap-[10px]">
                            <FoodContainer foods={foods}/>
                        </div>  
                        <MyPagination totalPages={10}/>
                    </div>
                </div>
                <div className="site-right col-span-4 rounded">
                    <Event/>
                    <div className="mt-4">
                    <EventsSection/>
                    </div>
                </div>
            </div>
        </>
    );
}
