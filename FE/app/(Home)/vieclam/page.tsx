import Breadcrumbs from "@/app/ui/Master/breadcrums";
import Job from '@/app/ui/Home/vieclam/Job'

export default function JobPage() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Việc Làm', href: '/vieclam', active: true },
    ];

  return (
    <div className='relative' >
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <Job></Job>
    </div>
  )
}
