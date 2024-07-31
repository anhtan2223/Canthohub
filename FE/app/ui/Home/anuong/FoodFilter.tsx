'use client'
import { useState } from 'react'
import { InputNumber , Select , SelectProps , Button} from "antd";
import type { JobFilter } from '@/app/lib/types/vieclam';
import type { Address } from '@/app/lib/types/master'
import { formatCurrency, formatNumber} from "@/app/lib/utils"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


const addressList : Address[] = [
    { id : 1 , address : "Ninh Kiều" } ,
    { id : 2 , address : "An Hoà" } ,
    { id : 3 , address : "An Phú" } ,
    { id : 4 , address : "Hưng Phú" } 
]

const carrer: SelectProps['options'] = [];
const address: SelectProps['options'] = [];
addressList.forEach((i:Address)=>{ address.push({
    label: i.address,
    value: i.id
}) })

interface FilterType{
    address? : string[]  | null
    price_from? : string | null
    price_to? : string  | null
}

export default function JobFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);

    const [filter, setFilter] = useState<FilterType>({
        address : searchParams.getAll('address') ,
        price_from : searchParams.get('price_from') ,
        price_to : searchParams.get('price_to') ,
    })

    const onChange = (value : string | string[] , type : 'address' | 'form' | 'price_from' | 'price_to') => {
        console.log(value)
        setFilter({
            ...filter ,
            [type] : value
        })
    }
    const onApply = () => {
        if(filter.price_from)
            params.set("price_from" , filter.price_from) 
        if(filter.price_to) 
            params.set("price_to" , filter.price_to) 
        if(filter.address){
            params.delete("address")
            for(const value of filter.address){
                params.append("address" , value)
            }
        }

        replace(`${pathname}?${params.toString()}`);
    }
    const onReset = () => {
        for(const i of ["address","form","price_from","price_to"])
            params.delete(i)
        setFilter({
            address : null ,
            price_from : null ,
            price_to : null ,
        })
        replace(`${pathname}?${params.toString()}`)
    }

    return <div>
                <div className='m-3'>
                    <p className='text-base font-bold'>Khu Vực</p> 
                    <Select<string[]>
                        allowClear
                        className='mt-1'
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Chọn Quán Ăn Ở Khu Vực"
                        onChange={ (value:string[]) => {onChange(value,'address')}}
                        value={filter.address }
                        options={address}
                    /> 
                </div>
                <div className='m-3'>
                    <p className='text-base font-bold'>Giá</p> 
                    <div className='my-2 flex items-center'>
                        <InputNumber
                            addonAfter = "VNĐ"
                            addonBefore= {<p className='w-5'>Từ</p>}
                            formatter={formatNumber}
                            parser={formatCurrency}
                            controls={false}
                            className='w-full'
                            onChange={ (value:string) => {onChange(value,'price_from')}}
                            value={filter.price_from }
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
                            onChange={ (value:string) => {onChange(value,'price_to')}}
                            value={filter.price_to }
                        />
                    </div>
                </div>

                <div className='my-5 gap-3 flex justify-center'>
                    <Button  size='middle' type="primary" ghost onClick={onApply}>
                        Áp Dụng
                    </Button>
                    <Button size='middle' type="primary" ghost onClick={onReset}>
                        Làm Mới
                    </Button>
                </div>
            </div>
}