'use client'
import React from 'react'
import Breadcrumbs from "@/app/ui/breadcrums";
import { Input , GetProps  , SelectProps} from "antd";
import Card from '@/app/ui/vieclam/Card'
import Filter from '@/app/ui/vieclam/Filter'
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

const onChange: PaginationProps['onChange'] = (pageNumber) => {
  console.log('Page: ', pageNumber);
};

const options: SelectProps['options'] = [];

for (let i = 10; i < 20; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}



type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;


export default function JobPage() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Việc Làm', href: '/vieclam', active: true },
    ];
const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        console.log(info?.source, value)
    };

  return (
    <div className='relative' >
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <div className='flex'>
            <div className='w-8/12' >
                <div className='flex h-[32px]'>
                    <Search placeholder="Tìm Kiếm Việc" allowClear onSearch={onSearch} className='w-8/12'/>
                    <div className="flex justify-end items-center w-4/12">
                        <span>Sắp xếp: </span>
                        <div className="flex items-center">
                            <form className="ml-3">
                                <select id="countries" className="custom-select">
                                    <option defaultChecked>Mặc định</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='mt-5 p-5 h-fit bg-white border rounded-lg'>
                    <div className='text-lg font-bold	'>
                        Tổng 20 Kết Quả
                    </div>
                    <div className='my-2'>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                    <div className='flex mt-5 justify-center'>
                        <Pagination className='w-fit' showQuickJumper size='small' showLessItems defaultCurrent={1} total={100} onChange={onChange} />
                    </div>
                </div>
            </div>
            <div className='sticky top-5 w-4/12 ml-4 h-fit bg-white border rounded-lg'>
                <Filter></Filter>
            </div>
        </div>
    </div>
  )
}
