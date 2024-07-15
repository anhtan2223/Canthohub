import { MdOutlineKeyboardArrowRight, MdKeyboardArrowLeft  } from "react-icons/md";
import Card from "@/app/ui/nhatro/card";
import News from "@/app/ui/nhatro/news";
import { FilterPrice, FilterArea } from "../ui/nhatro/filters";
export default function Page() {
    return <div className="">
        <p className="my-4"> Trang chủ / <span className="text-medium-blue">Nhà trọ</span></p>
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
                <div className="container mx-auto my-4">
                    <div className="flex justify-end items-center mb-4">
                        <nav className="flex justify-end items-center">
                            <ul className="flex">
                                <li>
                                    <button className="px-3 py-1 w-full h-full rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                        <MdKeyboardArrowLeft />
                                    </button>
                                </li>
                                <li className="ml-2">
                                    <button className="px-3 py-1 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                        1
                                    </button>
                                </li>
                                <li className="ml-2">
                                    <button className="px-3 py-1 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                        2
                                    </button>
                                </li>
                                <li className="ml-2">
                                    <button className="px-3 py-1 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                        3
                                    </button>
                                </li>
                                <li className="ml-2">
                                    <button className="px-3 py-1 w-full h-full rounded-r-md bg-white text-sm font-medium text-gray-500 focus:rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                        <MdOutlineKeyboardArrowRight />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <div className="ml-3">
                            <select className="pr-8 py-1 border border-gray-300 rounded">
                                <option value="5">10 / trang</option>
                                <option value="10">20 / trang</option>
                                <option value="20">30 / trang</option>
                                <option value="50">40 / trang</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-right col-span-4 rounded">

                <FilterPrice/>
                <FilterArea/>
                <News/>
            </div>
        </div>
    </div>
}