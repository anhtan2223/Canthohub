import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { FoodType, UserType } from '@/app/lib/types/anuong';
import { Button } from 'antd';
import Link from 'next/link';
export default function FoodDetail({
    user,
  }: {
    user: UserType;
  }) {
    const food = {
        image: "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400",
        title: "Cơm gà Lê Trang",
        description: "Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc",
        price: "20.000 - 275.000",
        address: "Ninh Kiều, Cái Răng, Cần Thơ",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
    };
    return (
        <>
            <div className="bg-secondary border p-4 border-border-color dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg">
                <div className="flex items-center">
                    <figure className="mr-2">
                        <Image width={400} height={200} className=" object-cover w-12 h-12 rounded-full shadow-lg aspect-w-1 aspect-h-1" src={user.avatar} alt="this is image" />
                    </figure>
                    <div className="flex flex-col">
                        <span className="block">{user.name}</span>
                        <span className="block">48 phút trước</span>
                    </div>
                </div>
                <h2 className="font-bold text-xl mt-4">
                        {food.title}
                </h2>
                <div className="description">
                    <span className="font-semibold">Giá: </span> 
                    <span className="text-red-500">25.000 - 275.000</span>
                    <br />
                    <span className="font-semibold">Địa chỉ: </span> 
                    <span>{food.address}</span>
                    <br />
                    <span className="font-semibold">Mô tả: </span> 
                    <span>{food.description}</span>
                </div>
                <div className="img-container grid grid-cols-10 mt-3">
                    <div className="col-span-9">
                        <figure>
                            <Image width={800} height={400} src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" alt="" className="w-full h-auto rounded-lg" />
                        </figure>
                        <div className="flex gap-4 mt-3">
                            <figure>
                                <Image width={200} height={40} src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" className="w-full h-auto rounded-lg" alt="" />
                            </figure>
                            <figure>
                                <Image width={200} height={40} src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" className="w-full h-auto rounded-lg" alt="" />
                            </figure>
                            <figure>
                                <Image width={200} height={40} src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" className="w-full h-auto rounded-lg" alt="" />
                            </figure>
                            <figure>
                                <Image width={200} height={40} src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" className="w-full h-auto rounded-lg" alt="" />
                            </figure>
                            <figure>
                                <Image width={200} height={40} src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" className="w-full h-auto rounded-lg" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-span-1"></div>
                </div>
                    <Button className='my-3'>
                        <p className='text-medium-blue text-lg'>
                            Xem trên facebook 
                        </p>
                        <FiArrowRight className="ml-1 text-black" />
                    </Button>
                <div className="mt-2 text-gray-500 text-xs flex space-x-4">
                    <div className="flex items-center space-x-1">
                        <span>190k</span>
                        <Image width={200} height={200} src="/Icon/like.png" alt="" className='w-[21px] h-[21px]' />
                    </div>
                    <div className="flex items-center space-x-1">
                        <span>190k</span>
                        <Image width={200} height={200} src="/Icon/cmt.png" alt="" className='w-[21px] h-[21px]' />
                    </div>
                </div>
            </div>
        </>
    )
}