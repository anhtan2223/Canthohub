import Card from '@/app/ui/Home/vieclam/Card'
import Filter from '@/app/ui/Home/vieclam/Filter'
import Search from '@/app/ui/Home/vieclam/search-bar'
import Pagination from '@/app/ui/Master/Pagination'
import {jobPostSeeding} from "@data"
import MobileFilter from '../../Master/MobileFilter'

export default function Job({isAdd=false} : {
    isAdd? : boolean
}) {
  return (
    <div className='flex'>
            <div className='w-full lg:w-8/12' >
                {/* <Search isAdd={isAdd}></Search> */}
                <div className='mt-5 p-5 h-fit bg-white border rounded-lg dark:text-dark-text dark:bg-dark-secondary dark:border-dark'>
                    <div className="flex justify-between">
                        <div className='text-lg font-bold'>
                            Tổng 20 Kết Quả
                        </div>
                        <MobileFilter>
                            <Filter></Filter>
                        </MobileFilter>

                    </div>
                    <div className='my-2'>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                    </div>
                <Pagination
                    total={100}
                    className='flex mt-5 justify-center'
                ></Pagination>
                </div>
            </div>
            <div className='hidden lg:block sticky top-5 w-4/12 ml-4 h-fit bg-white border dark:text-dark-text dark:bg-dark-secondary dark:border-dark rounded-lg'>
                <Filter></Filter>
            </div>
        </div>
  )
}
