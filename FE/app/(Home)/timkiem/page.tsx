import Breadcrumbs from "@/app/ui/Master/breadcrums";
import NavBar from "@/app/ui/Home/timkiem/nav-bar"
import { Suspense } from 'react';


export default function SearchPage() {
  const breadcrumbs = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tìm Kiếm', href: '/timkiem', active: true },
  ];
  return <div>
    <Breadcrumbs breadcrumbs={breadcrumbs} />
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar></NavBar>
    </Suspense>
  </div>
}
