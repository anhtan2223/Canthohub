import Card from '@/app/ui/Home/vieclam/Card'
import Filter from '@/app/ui/Home/vieclam/Filter'
import Search from '@/app/ui/Home/vieclam/search-bar'
import Pagination from '@/app/ui/Master/Pagination'

export default function Job({isAdd=false} : {
    isAdd? : boolean
}) {
  return (
    <div className='flex'>
            <div className='w-8/12' >
                <Search isAdd={isAdd}></Search>

                <div className='mt-5 p-5 h-fit bg-white border rounded-lg'>
                    <div className='text-lg font-bold'>
                        Tổng 20 Kết Quả
                    </div>
                    <div className='my-2'>
                        <Card isSetting={isAdd}></Card>
                        <Card isSetting={isAdd}></Card>
                        <Card isSetting={isAdd}></Card>
                        <Card isSetting={isAdd}></Card>
                        <Card isSetting={isAdd}></Card>
                    </div>
                <Pagination
                    total={100}
                    className='flex mt-5 justify-center'
                ></Pagination>
                </div>
            </div>
            <div className='sticky top-5 w-4/12 ml-4 h-fit bg-white border rounded-lg'>
                <Filter></Filter>
            </div>
        </div>
  )
}
