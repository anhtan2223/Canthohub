'use client'
import { useState } from 'react'
import { Input , Select  , SelectProps , Button} from "antd";
import type { JobFilter , Career } from '@/app/lib/types/vieclam';
import type { Address } from '@/app/lib/types/master'
import { Level , Form } from '@/app/lib/types/vieclam';


const options: SelectProps['options'] = [];


const careerList : Career[] = [
    { id : 1 , name : "Software Developer" } ,
    { id : 2 , name : "Web Application Developer" } ,
    { id : 3 , name : "Mobile Developer" } ,
    { id : 4 , name : "IOT Developer" } 
]
const levelList : string[] = Object.values(Level)
const formList : string[] = Object.values(Form)
const addressList : Address[] = [
    { id : 1 , address : "Ninh Kiều" } ,
    { id : 2 , address : "An Hoà" } ,
    { id : 3 , address : "An Phú" } ,
    { id : 4 , address : "Hưng Phú" } 
]

const carrer: SelectProps['options'] = [];
careerList.forEach((i:Career)=>{ carrer.push({
    label: i.name,
    value: i.id
}) })
const address: SelectProps['options'] = [];
addressList.forEach((i:Address)=>{ address.push({
    label: i.address,
    value: i.id
}) })
const level: SelectProps['options'] = [];
levelList.forEach((i:string)=>{ level.push({
    label: i,
    value: i
}) })
const form: SelectProps['options'] = [];
formList.forEach((i:string)=>{ form.push({
    label: i,
    value: i
}) })


const onSelectCareer = (value: string[]) => {
  console.log(`selected ${value}`);
};

export default function JobFilter() {
    const [filter, setFilter] = useState<JobFilter>()
    return <div>
                <div className='m-3 '>
                    <p className='text-base font-bold'>Công Việc</p> 
                    <Select
                    allowClear
                    className='mt-1'
                    style={{ width: '100%' }}
                    placeholder="Chọn Công Việc"
                    // onChange={(value)=>{
                    //     setFilter({
                    //         ...filter ,
                    //         carrer : careerList.find(i => i.id == +value)
                    //     })
                    // } }
                    value={filter?.carrer?.name}
                    options={carrer}
                    /> 
                </div>
                
                <div className='m-3'>
                    <p className='text-base font-bold'>Cấp Bậc</p> 
                    <Select
                    className='mt-1'
                    allowClear
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Chọn Cấp Bậc Công Việc"
                    // onChange={(value)=>{
                    //     setFilter({
                    //         ...filter ,
                    //         level : value
                    //     })
                    // }}
                    value={filter?.level}
                    options={level}
                    /> 
                </div>

                <div className='m-3'>
                    <p className='text-base font-bold'>Khu Vực</p> 
                    <Select
                    allowClear
                    className='mt-1'
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Chọn Khu Vực Công Việc"
                    // onChange={(value) => {setFilter({
                    //     ...filter ,
                    //     address : value
                    // })}}
                    value={filter?.address}
                    options={address}
                    /> 
                </div>

                <div className='m-3'>
                    <p className='text-base font-bold'>Hình Thức</p> 
                    <Select
                    className='mt-1'
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Chọn Hình Thức Công Việc"
                    // onChange={(value)=>{
                    //     setFilter({
                    //         ...filter ,
                    //         form : value
                    //     })
                    // }}
                    value={filter?.form}
                    options={form}
                    /> 
                </div>

                <div className='m-3'>
                    <p className='text-base font-bold'>Mức Lương</p> 
                    <div className='my-2 flex items-center'>
                        <p className='w-2/12'>Từ</p>
                        <Input type='number'  suffix="VNĐ" allowClear 
                            // value={filter?.salary_from} onChange={(value)=>{setFilter({...filter , salary_from : +value.target.value})}} 
                            />
                    </div>
                    <div className='my-2 flex items-center'>
                        <p className='w-2/12'>Đến</p>
                        <Input type='number' suffix="VNĐ" allowClear 
                            // value={filter?.salary_to} onChange={(value)=>{setFilter({...filter , salary_to : +value.target.value})}} 
                            />
                        
                    </div>
                </div>

                <div className='m-3 my-5 gap-3 w-full flex justify-center'>
                    <Button size='middle' type="primary" ghost>
                        Áp Dụng
                    </Button>
                    <Button size='middle' type="primary" ghost onClick={()=>{setFilter(undefined)}}>
                        Làm Mới
                    </Button>
                </div>
            </div>
}