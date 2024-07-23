'use client'
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';


export default function PaginationBar(
    {total = 100} :
    {total? : number}
) {
    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        console.log('Page: ', pageNumber);
        };

  return (
    <div className='flex mt-5 justify-center'>
        <Pagination 
        className='w-fit' 
        showQuickJumper 
        size='small' 
        showLessItems 
        defaultCurrent={1} 
        total={total} 
        onChange={onChange} 
        />
    </div>
  )
}
