'use client'
import React from 'react'
import { Input , Select  , SelectProps} from "antd";
import type { PaginationProps } from 'antd';


const options: SelectProps['options'] = [];

for (let i = 10; i < 20; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}



const onSelectCareer = (value: string[]) => {
  console.log(`selected ${value}`);
};

export default function JobFilter() {
    return <div>
                <div className='m-5 '>
                    <p className='text-base font-bold'>Công Việc</p> 
                    <Select
                    allowClear
                    className='mt-1'
                    style={{ width: '100%' }}
                    placeholder="Chọn Công Việc"
                    onChange={onSelectCareer}
                    options={options}
                    /> 
                </div>
                
                <div className='m-4'>
                    <p className='text-base font-bold'>Cấp Bậc</p> 
                    <Select
                    className='mt-1'
                    allowClear
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Chọn Cấp Bậc Công Việc"
                    onChange={onSelectCareer}
                    options={options}
                    /> 
                </div>

                <div className='m-5'>
                    <p className='text-base font-bold'>Khu Vực</p> 
                    <Select
                    allowClear
                    className='mt-1'
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Chọn Khu Vực Công Việc"
                    onChange={onSelectCareer}
                    options={options}
                    /> 
                </div>

                <div className='m-5'>
                    <p className='text-base font-bold'>Hình Thức</p> 
                    <Select
                    className='mt-1'
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Chọn Hình Thức Công Việc"
                    onChange={onSelectCareer}
                    options={options}
                    /> 
                </div>

                <div className='m-5'>
                    <p className='text-base font-bold'>Mức Lương</p> 
                    <div className='my-2 flex items-center'>
                        <p className='w-2/12'>Từ</p>
                        <Input type='number' suffix="VNĐ" allowClear />
                    </div>
                    <div className='my-2 flex items-center'>
                        <p className='w-2/12'>Đến</p>
                        <Input type='number' suffix="VNĐ" allowClear />
                    </div>
                </div>
            </div>
}