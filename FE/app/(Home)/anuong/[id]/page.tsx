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
            <div className='flex'>
                <div className='w-8/12'>
                    <FoodDetail user={user} />
                    <div className='mt-6'>
                        <RelatedNews />
                    </div>
                </div>
                <div className='w-4/12 ml-4'>
                    <div className='mb-5 border rounded-lg '>
                        <Events></Events>
                    </div>
                    <div className='mt-5 border rounded-lg'>
                        <EventSection />
                    </div>
                </div>
            </div>
        </>
    );
}

