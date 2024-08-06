import Card from '@ui/Home/nhatro/card'
import { FilterArea, FilterLocation, FilterPrice } from '@/app/ui/Home/nhatro/filters';
import Search from '@/app/ui/Home/nhatro/SearchWithSort'
import Pagination from '@/app/ui/Master/Pagination'
import MobileFilter from '../../Master/MobileFilter'
import { useRouter } from 'next/navigation'

export default function RealEstate({ isAdd = false }: { isAdd?: boolean }) {
    const router = useRouter();
    return (
        <div className='flex'>
            <div className='w-full lg:w-8/12' >
                <div className="hidden lg:block">
                    <Search isAdd={isAdd}></Search>
                </div>
                <div className='mt-5 p-5 h-fit bg-white border rounded-lg dark:text-dark-text dark:bg-dark-secondary dark:border-dark'>
                    <div className="flex justify-between">
                        <div className='text-lg font-bold'>
                            Tổng 206 Kết Quả
                        </div>
                        <MobileFilter>
                            <div className="m-3">
                                <Search isAdd={isAdd}></Search>
                            </div>
                            <FilterLocation />
                            <FilterPrice />
                            <FilterArea />
                        </MobileFilter>

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
                    <Pagination total={100} className='flex mt-5 justify-center'></Pagination>
                </div>
            </div>
            <div className='hidden lg:block sticky top-5 w-4/12 ml-4 h-fit bg-white border dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg'>
                <FilterLocation />
                <FilterPrice />
                <FilterArea />
            </div>
        </div>
    )
}
