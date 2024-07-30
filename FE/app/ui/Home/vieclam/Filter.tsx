'use client'
import { useState } from 'react'
import { InputNumber, Select, SelectProps, Button } from "antd"
import type { JobFilter } from '@/app/lib/types/vieclam/master'
import { Level } from '@type/vieclam'
import { Form } from "@/app/lib/types/vieclam/form.enum"
import { formatCurrency, formatNumber } from "@/app/lib/utils"
import { useSearchParams, usePathname, useRouter } from 'next/navigation'


const career: SelectProps['options'] = [
    { id: 1, name: "Software Developer" },
    { id: 2, name: "Web Application Developer" },
    { id: 3, name: "Mobile Developer" },
    { id: 4, name: "IOT Developer" }
].map(i => ({
    label: i.name,
    value: i.id
}))
const address: SelectProps['options'] = [
    { id: 1, address: "Ninh Kiều" },
    { id: 2, address: "An Hoà" },
    { id: 3, address: "An Phú" },
    { id: 4, address: "Hưng Phú" }
].map(i => ({
    label: i.address,
    value: i.id
}))
const level: SelectProps['options'] = Object.keys(Level).map(key => ({
    label: Level[key as keyof typeof Level],
    value: key
}))
const formOpt: SelectProps['options'] = Object.keys(Form).map(key => ({
    label: Form[key as keyof typeof Form],
    value: key
}))

interface FilterType {
    career_id?: string | null
    level?: string[] | null
    address?: string[] | null
    form?: string[] | null
    salary_from?: string | null
    salary_to?: string | null
}

export default function JobFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);

    const [filter, setFilter] = useState<FilterType>({
        career_id: searchParams.get('career_id'),
        level: searchParams.getAll('level'),
        address: searchParams.getAll('address'),
        form: searchParams.getAll('form'),
        salary_from: searchParams.get('salary_from'),
        salary_to: searchParams.get('salary_to'),
    })

    const onChange = (value: string | string[], type: 'career_id' | 'level' | 'address' | 'form' | 'salary_from' | 'salary_to') => {
        setFilter({
            ...filter,
            [type]: value
        })
    }
    const onApply = () => {
        if (filter.career_id)
            params.set("career_id", filter.career_id)
        if (filter.salary_from)
            params.set("salary_from", filter.salary_from)
        if (filter.salary_to)
            params.set("salary_to", filter.salary_to)
        if (filter.address) {
            params.delete("address")
            for (const value of filter.address) {
                params.append("address", value)
            }
        }
        if (filter.form) {
            params.delete("form")
            for (const value of filter.form) {
                params.append("form", value)
            }
        }
        if (filter.level) {
            params.delete("level")
            for (const value of filter.level) {
                params.append("level", value)
            }
        }

        replace(`${pathname}?${params.toString()}`);
    }
    const onReset = () => {
        for (const i of ["career_id", "level", "address", "form", "salary_from", "salary_to"])
            params.delete(i)
        setFilter({
            career_id: null,
            level: null,
            address: null,
            form: null,
            salary_from: null,
            salary_to: null,
        })
        replace(`${pathname}?${params.toString()}`)
    }

    return <div>
        <div className='m-3'>
            <p className='text-base font-bold'>Công Việc</p>
            <div>
                <Select
                    allowClear
                    className='mt-1'
                    style={{ width: '100%' }}
                    placeholder="Chọn Công Việc"
                    value={filter.career_id}
                    onChange={(value: string) => { onChange(value, 'career_id') }}
                    options={career}
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
                onChange={(value: string[]) => { onChange(value, 'level') }}
                value={filter.level}
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
                onChange={(value: string[]) => { onChange(value, 'address') }}
                value={filter.address}
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
                onChange={(value: string[]) => { onChange(value, 'form') }}
                value={filter.form || null}
                options={formOpt}
            />
        </div>

        <div className='m-3'>
            <p className='text-base font-bold'>Mức Lương</p>
            <div className='my-2 flex items-center'>
                <InputNumber
                    addonAfter="VNĐ"
                    addonBefore={<p className='w-5'>Từ</p>}
                    formatter={formatNumber}
                    parser={formatCurrency}
                    controls={false}
                    className='w-full'
                    onChange={(value: string) => { onChange(value, 'salary_from') }}
                    value={filter.salary_from}
                />
            </div>
            <div className='my-2 flex items-center'>
                <InputNumber
                    addonAfter="VNĐ"
                    addonBefore={<p className='w-5'>Đến</p>}
                    formatter={formatNumber}
                    parser={formatCurrency}
                    controls={false}
                    className='w-full'
                    onChange={(value: string) => { onChange(value, 'salary_to') }}
                    value={filter.salary_to}
                />
            </div>
        </div>

        <div className='m-3 my-5 gap-3 w-full flex justify-center'>
            <Button size='middle' type="primary" ghost onClick={onApply}>
                Áp Dụng
            </Button>
            <Button size='middle' type="primary" ghost onClick={onReset}>
                Làm Mới
            </Button>
        </div>
    </div>
}