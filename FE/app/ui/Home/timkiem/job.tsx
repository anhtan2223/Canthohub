import Card from '@/app/ui/Home/vieclam/Card'
import Pagination from '@/app/ui/Master/Pagination'
import {jobPostSeeding} from "@data"


export default function Job({isAdd=false} : {
    isAdd? : boolean
}) {
  return (
    <div className='flex'>
            <div className='w-full' >
                <div className='p-5 h-fit bg-white border rounded-lg dark:text-dark-text dark:bg-dark-secondary dark:border-dark'>
                    <div className='my-2'>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                        <Card post={jobPostSeeding} isSetting={isAdd}></Card>
                    </div>
                <Pagination
                    total={100}
                    className='flex my-5 justify-center'
                ></Pagination>
                </div>
            </div>
        </div>
  )
}
