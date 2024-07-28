'use client'
import { useRef, useState } from 'react'
import { InputNumber , Select , Form  , SelectProps , Button} from "antd";
import type { JobFilter , Career } from '@/app/lib/types/vieclam';
import type { Address } from '@/app/lib/types/master'
import { Level , Form as EForm } from '@/app/lib/types/vieclam';
import { formatCurrency, formatNumber} from "@/app/lib/utils"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


const careerList : Career[] = [
    { id : 1 , name : "Software Developer" } ,
    { id : 2 , name : "Web Application Developer" } ,
    { id : 3 , name : "Mobile Developer" } ,
    { id : 4 , name : "IOT Developer" } 
]
const levelList : string[] = Object.values(Level)
const formList : string[] = Object.values(EForm)
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
const formOpt: SelectProps['options'] = [];
formList.forEach((i:string)=>{ formOpt.push({
    label: i,
    value: i
}) })

interface FilterType{
    career_id? : string  | null
    level? : string[]  | null
    address? : string[]  | null
    form? : string[]  | null
    salary_from? : string | null
    salary_to? : string  | null
}

export default function JobFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);

    const [filter, setFilter] = useState<FilterType>({
        career_id : searchParams.get('career_id') ,
        level : searchParams.getAll('level') ,
        address : searchParams.getAll('address') ,
        form : searchParams.getAll('form') ,
        salary_from : searchParams.get('salary_from') ,
        salary_to : searchParams.get('salary_to') ,
    })

    const onChange = (value : string | string[] , type : 'career_id' | 'level' | 'address' | 'form' | 'salary_from' | 'salary_to') => {
        console.log(value)
        setFilter({
            ...filter ,
            [type] : value
        })
    }
    const onApply = () => {
        if(filter.career_id) 
            params.set("career_id" , filter.career_id) 
        if(filter.salary_from)
            params.set("salary_from" , filter.salary_from) 
        if(filter.salary_to) 
            params.set("salary_to" , filter.salary_to) 
        if(filter.address){
            params.delete("address")
            for(const value of filter.address){
                params.append("address" , value)
            }
        }
        if(filter.form){
            params.delete("form")
            for(const value of filter.form){
                params.append("form",value)
            }
        }
        if(filter.level){
            params.delete("level")
            for(const value of filter.level){
                params.append("level",value)
            }
        }

        replace(`${pathname}?${params.toString()}`);
    }
    const onReset = () => {
        for(const i of ["career_id","level","address","form","salary_from","salary_to"])
            params.delete(i)
        setFilter({
            career_id : null ,
            level : null ,
            address : null ,
            form : null ,
            salary_from : null ,
            salary_to : null ,
        })
        replace(`${pathname}?${params.toString()}`)
    }

    return <div>
                <div className='m-3'>
                
                {/* <div className='h-fit'>{params.toString()}</div> */}
                {/* <div className='h-fit'>{JSON.stringify(filter)}</div> */}
                    <p className='text-base font-bold'>Công Việc</p> 
                    <div>
                        <Select
                        allowClear
                        className='mt-1'
                        style={{ width: '100%' }}
                        placeholder="Chọn Công Việc"
                        value={filter.career_id}
                        onChange={ (value:string) => {onChange(value,'career_id')}}
                        options={carrer}
                        /> 
                    </div>
                </div>
                
                <div className='m-3'>
                    <p className='text-base font-bold'>Cấp Bậc</p> 
                    <Select<string[]>
                    className='mt-1'
                    allowClear
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Chọn Cấp Bậc Công Việc"
                    onChange={ (value:string[]) => {onChange(value,'level')}}
                    value={filter.level }
                    options={level}
                    /> 
                </div>

                <div className='m-3'>
                    <p className='text-base font-bold'>Khu Vực</p> 
                    <Select<string[]>
                        allowClear
                        className='mt-1'
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Chọn Khu Vực Công Việc"
                        onChange={ (value:string[]) => {onChange(value,'address')}}
                        value={filter.address }
                        options={address}
                    /> 
                </div>

                <div className='m-3'>
                    <p className='text-base font-bold'>Hình Thức</p> 
                    <Select<string[]>
                    className='mt-1'
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Chọn Hình Thức Công Việc"
                    onChange={ (value:string[]) => {onChange(value,'form')}}
                    value={filter.form || null}
                    options={formOpt}
                    /> 
                </div>

                <div className='m-3'>
                    <p className='text-base font-bold'>Mức Lương</p> 
                    <div className='my-2 flex items-center'>
                        <InputNumber
                            addonAfter = "VNĐ"
                            addonBefore= {<p className='w-5'>Từ</p>}
                            formatter={formatNumber}
                            parser={formatCurrency}
                            controls={false}
                            className='w-full'
                            onChange={ (value:string) => {onChange(value,'salary_from')}}
                            value={filter.salary_from }
                        />
                    </div>
                    <div className='my-2 flex items-center'>
                        <InputNumber
                            addonAfter = "VNĐ"
                            addonBefore= {<p className='w-5'>Đến</p>}
                            formatter={formatNumber}
                            parser={formatCurrency}
                            controls={false}
                            className='w-full'
                            onChange={ (value:string) => {onChange(value,'salary_to')}}
                            value={filter.salary_to }
                        />
                    </div>
                </div>

                <div className='m-3 my-5 gap-3 w-full flex justify-center'>
                    <Button  size='middle' type="primary" ghost onClick={onApply}>
                        Áp Dụng
                    </Button>
                    <Button size='middle' type="primary" ghost onClick={onReset}>
                        Làm Mới
                    </Button>
                </div>
            </div>
}