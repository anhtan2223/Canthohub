import Events from "@/app/ui/Home/tintuc/events";
import EventsSection from "@/app/ui/Home/tintuc/EventSection";
import News from "@/app/ui/Home/tintuc/news";
import WelcomeSection from "@/app/ui/Home/tintuc/WelcomeSection";
import Breadcrumbs from "@/app/ui/Master/breadcrums";
import Image from 'next/image'
import { Suspense } from 'react';


export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Tin Tức', href: '/tintuc', active: true }
    ];
    return (
        <div className="flex flex-col items-center space-y-6">
            <div className="w-full">
                <Image src="/welcome.png" width={500} height={500} alt="Master" className='w-full' />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <WelcomeSection />
            </div>
            <div className="flex w-full ">
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="w-8/12 h-fit bg-white border rounded-lg p-5 dark:text-dark-text dark:bg-dark-secondary dark:border-dark">
                        <p className='font-bold text-lg mb-3'>Điểm hóng hớt</p>
                        <News />
                    </div>
                </Suspense>
                <div className='w-4/12 ml-4'>
                    <div className='mb-3 rounded-lg '>
                        <Events></Events>
                    </div>
                    <div className='mt-3 rounded-lg'>
                        <EventsSection></EventsSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

