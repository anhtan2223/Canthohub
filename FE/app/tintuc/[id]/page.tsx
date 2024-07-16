import Events from "../../ui/tintuc/events";
import EventsSection from "../../ui/tintuc/EventsSection";
import NewsDetail from "../../ui/tintuc/NewsDetail";
import RelatedNews from "../../ui/tintuc/RelatedNews";

export default function Page() {
    // return <p>Trang chi tiết tin tức</p>;
    return (
        <div className="flex flex-col items-center space-y-6">
            <div className="w-full">
                <img src="/welcome.png" alt="" className='w-full' />
                <p className="mt-4"> Trang chủ / <span className="text-medium-blue">Tin tức</span></p>
            </div>
            <div className="flex space-x-6 justify-center items-start w-full">
                <div className="flex-grow">
                    <NewsDetail />
                    <RelatedNews />
                </div>
                <div className="flex flex-col space-y-6 flex-shrink-0" style={{ width: '280px' }}>
                    <Events />
                    <EventsSection />
                </div>
            </div>
        </div>
    );
}