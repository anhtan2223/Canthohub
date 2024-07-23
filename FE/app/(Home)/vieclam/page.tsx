import Breadcrumbs from "@/app/ui/Master/breadcrums";
import Card from '@/app/ui/Home/vieclam/Card'
import Filter from '@/app/ui/Home/vieclam/Filter'
import Search from '@/app/ui/Home/vieclam/search-bar'
import Pagination from '@/app/ui/Home/vieclam/Pagination'

export default function JobPage() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Việc Làm', href: '/vieclam', active: true },
    ];

  return (
    <div className='relative' >
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <div className='flex'>
            <div className='w-8/12' >
                <Search></Search>
                <div className='mt-5 p-5 h-fit bg-white border rounded-lg'>
                    <div className='text-lg font-bold'>
                        Tổng 20 Kết Quả
                    </div>
                    <div className='my-2'>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                <Pagination></Pagination>
                </div>
            </div>
            <div className='sticky top-5 w-4/12 ml-4 h-fit bg-white border rounded-lg'>
                <Filter></Filter>
            </div>
        </div>
    </div>
  )
}
