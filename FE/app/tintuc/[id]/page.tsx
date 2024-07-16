import Events from "../../ui/tintuc/events";
import EventsSection from "../../ui/tintuc/EventsSection";
import NewsDetail from "../../ui/tintuc/NewsDetail";
import RelatedNews from "../../ui/tintuc/RelatedNews";
import Breadcrumbs from "@/app/ui/breadcrums";

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Tin tức', href: '/tintuc' },
        { label: 'id', href: '/tintuc/1', active: true },
    ];

    return (
        <div className="">
            <div className="w-full">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <div className="flex space-x-6 justify-center items-start w-full">
                <main className="flex-grow">
                    <NewsDetail />
                    <RelatedNews />
                </main>
                <aside className="flex flex-col space-y-6 flex-shrink-0" style={{ width: '280px' }}>
                    <Events />
                    <EventsSection />
                </aside>
            </div>
        </div>
    );
}
