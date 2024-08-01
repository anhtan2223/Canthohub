import Events from "@ui/Home/tintuc/events";
import EventsSection from "@/app/ui/Home/tintuc/EventSection";
import NewsDetail from "@ui/Home/tintuc/NewsDetail";
import RelatedNews from "@ui/Home/tintuc/RelatedNews";
import Breadcrumbs from "@ui/Master/breadcrums";
import { newsPostSeeding } from "@data"

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Tin tức', href: '/tintuc' },
        { label: 'Tuyển dụng Flutter tại Việt Nam', href: '/tintuc/1', active: true },
    ];

    return (
        <div >
            <div className=" w-full">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <div className="flex">
                <div className="w-8/12 ">
                    <div className="bg-white border rounded-lg p-5 dark:text-dark-text dark:bg-dark-secondary dark:border-dark">
                        <NewsDetail post={newsPostSeeding}/>
                    </div>
                    <div className="mt-5 bg-white  border rounded-lg p-5 dark:text-dark-text dark:bg-dark-secondary dark:border-dark">
                        <RelatedNews />
                    </div>
                </div>
                <div className='w-4/12 ml-4'>
                    <div className='mb-5 rounded-lg '>
                        <Events></Events>
                    </div>
                    <div className='mt-5 rounded-lg'>
                        <EventsSection></EventsSection>
                    </div>
                </div>

            </div>
        </div>
    );
}
