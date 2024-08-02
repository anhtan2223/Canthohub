import Events from "@/app/ui/Home/tintuc/events";
import EventsSection from "@/app/ui/Home/tintuc/EventSection";
import Detail from "@/app/ui/Home/nhatro/detail"
import Card from "@ui/Home/nhatro/card";
import Breadcrumbs from "@/app/ui/Master/breadcrums";

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
            <div className="flex">
                <div className="w-8/12 ">
                    <div className="bg-white border dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg p-5">
                        <Detail />
                    </div>
                    <div className="mt-5 bg-white dark:text-dark-text dark:bg-dark-secondary dark:border-dark border rounded-lg p-5">
                        <p className='font-bold text-lg mb-6'>Liên quan</p>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className='w-4/12 ml-4'>
                    <div className='mb-5 border dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg '>
                        <Events></Events>
                    </div>
                    <div className='mt-5 border dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg'>
                        <EventsSection></EventsSection>
                    </div>
                </div>
            </div>
        </div>
    );
}
