'use client'
import Breadcrumbs from "@/app/ui/breadcrums";
import { FiArrowRight } from "react-icons/fi";

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro', active: true },
    ];
    
    return (
        <>  
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="content-center mx-auto grid grid-cols-12 gap-4">
                <div className="site-left p-4 bg-secondary col-span-8 border border-border-color rounded-lg">
                    <div className="flex items-center">
                        <figure className="mr-2">
                            <img className=" object-cover w-12 h-12 rounded-full shadow-lg aspect-w-1 aspect-h-1" src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp" alt="this is image" />
                        </figure>
                        <div className="flex flex-col">
                            <span className="block">Cô Minh Hiếu</span>
                            <span className="block">48 phút trước</span>
                        </div>
                    </div>
                    <h2 className="font-bold text-xl mt-4">
                            Cơm gà Lê Trang
                    </h2>
                    <div className="description">
                        <span className="font-semibold">Giá: </span> 
                        <span className="text-red-500">25.000 - 275.000</span>
                        <br />
                        <span className="font-semibold">Địa chỉ: </span> 
                        <span>Quận Ninh Kiều, Cần Thơ</span>
                        <br />
                        <span className="font-semibold">Mô tả: </span> 
                        <span>Bánh canh e bán giao đi từ 6h30 Sáng đến 18h mỗi n.g.à.y (bán onl.i.n.e) Phần 30k Phần có thịt cua 50k Phần đặc biệt: phần bình thường + thịt cua+ càng cua (110k). Lh: 0365693162 or 0356012210, Gần giao miễn phí, xa thu từ 5k- 10k. Đc: Hẻm liên tổ 4-5, Nguyễn Văn Linh, Cần Thơ</span>
                    </div>
                    <div className="img-container grid grid-cols-10">
                        <div className="col-span-8">
                            <figure>
                                <img src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" alt="" className="w-full h-auto" />
                            </figure>
                            <div className="flex gap-4 mt-3">
                                <figure>
                                    <img src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" className="w-full h-auto" alt="" />
                                </figure>
                                <figure>
                                    <img src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" className="w-full h-auto" alt="" />
                                </figure>
                                <figure>
                                    <img src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" className="w-full h-auto" alt="" />
                                </figure>
                                <figure>
                                    <img src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400" className="w-full h-auto" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                    <a
                            href="#"
                            className="flex items-center text-xl h-12 w-56 text-blue-500 border border-black-500 rounded-md px-2 py-1"
                        >
                            Xem trên facebook <FiArrowRight className="ml-1 text-black" />
                    </a>
                </div>
                <div className="site-right col-span-4 rounded"></div>
            </div>
        </>
    );
}
