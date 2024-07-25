import Breadcrumbs from "@/app/ui/Master/breadcrums";
import EventSection from "@/app/ui/Home/tintuc/EventsSection";
import Events from "@/app/ui/Home/tintuc/events";
import FoodDetail from "@/app/ui/Home/anuong/FoodDetail";
import RelatedNews from "@/app/ui/Home/anuong/RelatedNews";

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Ăn uống', href: '/anuong', active: true },
    ];
    const user = {
        avatar: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp',
        name: 'Cô Minh Hiếu'
    }
    
    return (
        <>  
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="content-center mx-auto grid grid-cols-12 gap-4">
                <div className="site-left col-span-8">
                    <FoodDetail user={user}/>
                    <RelatedNews/>
                </div>
                <div className="site-right col-span-4 rounded">
                    <Events/>
                    <EventSection/>
                </div>
            </div>
        </>
    );
}

