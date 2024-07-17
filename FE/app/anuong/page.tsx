'use client'
import Breadcrumbs from "@/app/ui/breadcrums";
import {EllipsisOutlined, SettingOutlined, LikeOutlined, MessageOutlined, SearchOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { Avatar, Card, Input, Pagination } from "antd";
import { MdFoodBank } from "react-icons/md";
import { FilterPrice, FilterLocation } from "../ui/nhatro/filters";
import type { GetProps } from 'antd';

export default function Page() {
    type SearchProps = GetProps<typeof Input.Search>;   
    const { Search } = Input;
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro', active: true },
    ];
    
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="grid grid-cols-12 gap-4">
                <div className="site-left col-span-8">
                    <div className="bg-white rounded-lg p-3">
                        <div className="h-[60px] rounded w-100 mb-2 flex items-center justify-between">
                            <div className="flex items-center">
                                <MdFoodBank className=" text-medium-blue text-[50px]"></MdFoodBank>
                                <h2 className="font-bold text-lg ml-2">
                                    Điểm ăn uống
                                </h2>
                            </div>
                            <div className="flex items-center">
                                <Search
                                    placeholder="Tìm kiếm"
                                    allowClear
                                    enterButton="Tìm"
                                    size="large"
                                    onSearch={()=>{}}
                                />
                                <div className="w-full ml-3 flex justify-start items-center">
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
                            </div>
                        </div>
                        <div className="mx-auto grid grid-cols-3 gap-[10px]">
                            <Card
                                className="w-full h-auto"
                                cover={
                                    <img
                                        alt="anh mon an"
                                        src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400"
                                    />
                                }
                                actions={[
                                    <LikeOutlined key="like" />,
                                    <MessageOutlined key="message" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    title={
                                        <>
                                            <p className="text-[#000] font-semibold">Cơm gà Lê Trang</p>
                                        </>
                                    }
                                    description={
                                        <>
                                            <p>Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc</p>
                                            <span className="font-semibold">Giá: </span>
                                            <span className="text-[red]">20.000 - 275.000</span>
                                            <br />
                                            <span className="font-semibold"> Địa chỉ tại: </span> 
                                            <span className="">Ninh Kiều, Cái Răng, Cần Thơ</span>
                                        </>
                                    }
                                    avatar={
                                        <>
                                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGga_DGGoBElbwNG8cb49age29hifWb4nkCw&s" size={50}/>
                                        </>
                                    }
                                />
                            </Card>
                            <Card
                                className="w-full h-auto"
                                cover={
                                    <img
                                        alt="anh mon an"
                                        src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400"
                                    />
                                }
                                actions={[
                                    <LikeOutlined key="like" />,
                                    <MessageOutlined key="message" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    title={
                                        <>
                                            <p className="text-[#000] font-semibold">Cơm gà Lê Trang</p>
                                        </>
                                    }
                                    description={
                                        <>
                                            <p>Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc</p>
                                            <span className="font-semibold">Giá: </span>
                                            <span className="text-[red]">20.000 - 275.000</span>
                                            <br />
                                            <span className="font-semibold"> Địa chỉ tại: </span> 
                                            <span className="">Ninh Kiều, Cái Răng, Cần Thơ</span>
                                        </>
                                    }
                                    avatar={
                                        <>
                                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" size={50}/>
                                        </>
                                    }
                                />
                            </Card>
                            <Card
                                className="w-full h-auto"
                                cover={
                                    <img
                                        alt="anh mon an"
                                        src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400"
                                    />
                                }
                                actions={[
                                    <LikeOutlined key="like" />,
                                    <MessageOutlined key="message" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    title={
                                        <>
                                            <p className="text-[#000] font-semibold">Cơm gà Lê Trang</p>
                                        </>
                                    }
                                    description={
                                        <>
                                            <p>Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc</p>
                                            <span className="font-semibold">Giá: </span>
                                            <span className="text-[red]">20.000 - 275.000</span>
                                            <br />
                                            <span className="font-semibold"> Địa chỉ tại: </span> 
                                            <span className="">Ninh Kiều, Cái Răng, Cần Thơ</span>
                                        </>
                                    }
                                    avatar={
                                        <>
                                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" size={50}/>
                                        </>
                                    }
                                />
                            </Card>
                            <Card
                                className="w-full h-auto"
                                cover={
                                    <img
                                        alt="anh mon an"
                                        src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400"
                                    />
                                }
                                actions={[
                                    <LikeOutlined key="like" />,
                                    <MessageOutlined key="message" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    title={
                                        <>
                                            <p className="text-[#000] font-semibold">Cơm gà Lê Trang</p>
                                        </>
                                    }
                                    description={
                                        <>
                                            <p>Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc</p>
                                            <span className="font-semibold">Giá: </span>
                                            <span className="text-[red]">20.000 - 275.000</span>
                                            <br />
                                            <span className="font-semibold"> Địa chỉ tại: </span> 
                                            <span className="">Ninh Kiều, Cái Răng, Cần Thơ</span>
                                        </>
                                    }
                                    avatar={
                                        <>
                                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" size={50}/>
                                        </>
                                    }
                                />
                            </Card>
                            <Card
                                className="w-full h-auto"
                                cover={
                                    <img
                                        alt="anh mon an"
                                        src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400"
                                    />
                                }
                                actions={[
                                    <LikeOutlined key="like" />,
                                    <MessageOutlined key="message" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    title={
                                        <>
                                            <p className="text-[#000] font-semibold">Cơm gà Lê Trang</p>
                                        </>
                                    }
                                    description={
                                        <>
                                            <p>Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc</p>
                                            <span className="font-semibold">Giá: </span>
                                            <span className="text-[red]">20.000 - 275.000</span>
                                            <br />
                                            <span className="font-semibold"> Địa chỉ tại: </span> 
                                            <span className="">Ninh Kiều, Cái Răng, Cần Thơ</span>
                                        </>
                                    }
                                    avatar={
                                        <>
                                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" size={50}/>
                                        </>
                                    }
                                />
                            </Card>
                            <Card
                                className="w-full h-auto"
                                cover={
                                    <img
                                        alt="anh mon an"
                                        src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400"
                                    />
                                }
                                actions={[
                                    <LikeOutlined key="like" />,
                                    <MessageOutlined key="message" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    title={
                                        <>
                                            <p className="text-[#000] font-semibold">Cơm gà Lê Trang</p>
                                        </>
                                    }
                                    description={
                                        <>
                                            <p>Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc</p>
                                            <span className="font-semibold">Giá: </span>
                                            <span className="text-[red]">20.000 - 275.000</span>
                                            <br />
                                            <span className="font-semibold"> Địa chỉ tại: </span> 
                                            <span className="">Ninh Kiều, Cái Răng, Cần Thơ</span>
                                        </>
                                    }
                                    avatar={
                                        <>
                                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" size={50}/>
                                        </>
                                    }
                                />
                            </Card>

                        </div>
                        <Pagination
                                showSizeChanger
                                onShowSizeChange={()=>{}}
                                defaultCurrent={3}
                                total={50}
                                className="flex justify-end mt-3 mr-2"
                        />

                    </div>
                </div>
                <div className="site-right col-span-4 rounded">
                    <FilterLocation/>
                    <div className="mt-4">
                    <FilterPrice/>
                    </div>
                </div>
            </div>
        </>
    );
}
