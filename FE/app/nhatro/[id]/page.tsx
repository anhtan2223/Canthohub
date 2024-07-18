import Events from "../../ui/tintuc/events";
import EventsSection from "../../ui/tintuc/EventsSection";
import Detail from "../../ui/nhatro/detail"
import Card from "../../ui/nhatro/card";
import Breadcrumbs from "@/app/ui/breadcrums";

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Nhà trọ', href: '/nhatro' },
        { label: 'id', href: '/nhatro/1', active: true },
    ];

    return (
        <div className="">
            <div className="w-full">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <div className="flex space-x-6 justify-center items-start w-full">
                <main className="flex-grow">
                    <Detail />
                    <div className="bg-white px-6 pt-6 pb-10 rounded-md space-y-6 flex-grow my-10">
                        <p className='font-bold text-lg mb-6'>Liên quan</p>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </main>
                <aside className="flex flex-col space-y-6 flex-shrink-0" style={{ width: '280px' }}>
                    <Events />
                    <EventsSection />
                </aside>
            </div>
        </div>
    );
}
