'use client'
import Card from '@ui/Home/nhatro/card'
import { FilterArea, FilterLocation, FilterPrice } from '@/app/ui/Home/nhatro/filters';
import Search from '@/app/ui/Home/nhatro/search'
import Pagination  from '@ui/Master/Pagination';
import { useRouter } from 'next/navigation'

export default function RealEstate({ isAdd = false }: { isAdd?: boolean }) {
    const router = useRouter();
    return (
        <div className='flex'>
            <div className='w-8/12' >   
                <Search isAdd={isAdd}></Search>

                <div className='mt-5 p-5 h-fit bg-white border dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg'>
                    <div className='text-lg font-bold'>
                        Tổng 20 Kết Quả
                    </div>
                    <div className='my-2'>
                        <div className='cursor-pointer' onClick={() => { router.push(`/nhatro/1`) }}>
                            <Card></Card>
                        </div>
                        <div className='cursor-pointer' onClick={() => { router.push(`/nhatro/1`) }}>
                            <Card></Card>
                        </div>
                        <div className='cursor-pointer' onClick={() => { router.push(`/nhatro/1`) }}>
                            <Card></Card>
                        </div>
                        <div className='cursor-pointer' onClick={() => { router.push(`/nhatro/1`) }}>
                            <Card></Card>
                        </div>
                    </div>
                    <Pagination
                        total={50}
                        className="flex justify-end mt-3"
                    />
                </div>
            </div>
            <div className='sticky top-5 w-4/12 ml-4 h-fit'>
                <FilterLocation />
                <FilterPrice />
                <FilterArea />
            </div>
        </div>
    )
}