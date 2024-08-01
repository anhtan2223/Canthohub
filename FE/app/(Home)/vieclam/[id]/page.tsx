import Detail from '@/app/ui/Home/vieclam/[id]/Detail'
import Breadcrumbs from "@/app/ui/Master/breadcrums";
import Events from "@/app/ui/Home/tintuc/events";
import EventsSection from "@/app/ui/Home/tintuc/EventSection";
import RelateJob from '@/app/ui/Home/vieclam/[id]/RelateJob'
import {jobPostSeeding} from "@data"


export default function DetailPage() {
  const info = jobPostSeeding
  const breadcrumbs = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Việc Làm', href: '/vieclam' },
    { label: info.title , href: `vieclam/${info.id}`, active: true },
];
  return <>
    <Breadcrumbs breadcrumbs={breadcrumbs}/>
    <div className='flex'>
      <div className='w-full'>
        <Detail info={info}></Detail>
        <div className='mt-6'>
          <RelateJob></RelateJob> 
        </div>
      </div>
      {/* <div className='w-4/12 ml-4'>
        <div className='mb-5 rounded-lg '>
          <Events></Events>
        </div>
        <div className='mt-5 rounded-lg'>
          <EventsSection></EventsSection>
        </div>
      </div> */}
    </div>
  </>
}
