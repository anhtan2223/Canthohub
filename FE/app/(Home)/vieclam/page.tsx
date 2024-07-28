import Breadcrumbs from "@/app/ui/Master/breadcrums";
import Job from '@/app/ui/Home/vieclam/Job'
import { Suspense } from 'react';

export default function JobPage() {
  const breadcrumbs = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Việc Làm', href: '/vieclam', active: true },
  ];

  return (
    <div className='relative' >
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Suspense fallback={<div>Loading...</div>}>
        <Job></Job>
      </Suspense>
    </div>
  )
}
