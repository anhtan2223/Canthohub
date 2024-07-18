'use client'
import Breadcrumbs from "@/app/ui/breadcrums";
import EventSection from "@/app/ui/tintuc/EventsSection";
import Events from "@/app/ui/tintuc/events";
import FoodDetail from "@/app/ui/anuong/FoodDetail";
import RelatedNews from "@/app/ui/anuong/RelatedNews";

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro', active: true },
    ];
    const foods = [...Array(3)].map((_, index) => ({
        image: "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwi1z0l8xec93b@resize_ss640x400",
        title: "Cơm gà Lê Trang",
        description: "Cơm gà lê Trang siêu ngon, địa chỉ tại Phường Hưng Lợi Ninh Kiều Cần Thơ abc",
        price: "20.000 - 275.000",
        address: "Ninh Kiều, Cái Răng, Cần Thơ",
        avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
    }));
    const user = {
        avatar: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp',
        name: 'Cô Minh Hiếu'
    }
    
    return (
        <>  
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="content-center mx-auto grid grid-cols-12 gap-4">
                <div className="site-left col-span-8">
                    <FoodDetail food={foods[1]} user={user}/>
                    <RelatedNews foods={foods}/>
                </div>
                <div className="site-right col-span-4 rounded">
                    <Events/>
                    <EventSection/>
                </div>
            </div>
        </>
    );
}

