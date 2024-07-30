'use client'
import Pagination from '@/app/ui/Master/Pagination'
import Card from '@ui/Home/nhatro/card';
import { useRouter} from 'next/navigation'

export default function Page() {
    const router = useRouter();
    return <div className="">
        <div className="content-center mx-auto grid grid-cols-12 gap-4">
            <div className="site-left col-span-12">
                <div className="border border-border-color rounded-lg p-4 bg-secondary">
                    <div className='cursor-pointer' onClick={()=>{router.push(`/nhatro/1`)}}>
                        <Card></Card>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{router.push(`/nhatro/1`)}}>
                        <Card></Card>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{router.push(`/nhatro/1`)}}>
                        <Card></Card>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{router.push(`/nhatro/1`)}}>
                        <Card></Card>
                    </div>
                    <Pagination
                    total={100}
                    className='flex mt-5 justify-end'
                    ></Pagination>
                </div>
            </div>
        </div>
    </div>
}
