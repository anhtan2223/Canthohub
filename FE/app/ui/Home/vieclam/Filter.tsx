'use client'
import { useState } from 'react'
import { InputNumber, Select, SelectProps, Button } from "antd"
import { Filter } from "@type/master"
import { Level } from '@type/vieclam'
import { Form } from "@/app/lib/types/vieclam/form.enum"
import { formatCurrency, formatNumber } from "@/app/lib/utils"
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { carrerList , districtList } from "@data"

const career: SelectProps['options'] = carrerList.map(i => ({
    label: i.name,
    value: i.id
}))
const address: SelectProps['options'] = districtList.map(i => ({
    label: i.name,
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

export default function JobFilterPage() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);

    const [filter, setFilter] = useState<Filter>({
        career_ids: searchParams.get('career_id'),
        levels: searchParams.getAll('level'),
        district_ids: searchParams.getAll('address'),
        forms: searchParams.getAll('form'),
        salary_from: searchParams.get('salary_from'),
        salary_to: searchParams.get('salary_to'),
    })

    const onChange = (value: string | string[], type: 'career_ids' | 'levels' | 'district_ids' | 'forms' | 'salary_from' | 'salary_to') => {
        setFilter({
            ...filter,
            [type]: value
        })
    }
    const onApply = () => {
        if (filter.career_ids)
            params.set("career_id", filter.career_ids)
        if (filter.salary_from)
            params.set("salary_from", filter.salary_from)
        if (filter.salary_to)
            params.set("salary_to", filter.salary_to)
        if (filter.district_ids) {
            params.delete("address")
            for (const value of filter.district_ids) {
                params.append("address", value)
            }
        }
        if (filter.forms) {
            params.delete("form")
            for (const value of filter.forms) {
                params.append("form", value)
            }
        }
        if (filter.levels) {
            params.delete("level")
            for (const value of filter.levels) {
                params.append("level", value)
            }
        }

        replace(`${pathname}?${params.toString()}`);
    }
    const onReset = () => {
        for (const i of ["career_ids", "levels", "district_ids", "forms", "salary_from", "salary_to"])
            params.delete(i)
        setFilter({
            career_ids: null,
            levels: null,
            district_ids: null,
            forms: null,
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
                    value={filter.career_ids}
                    onChange={(value: string) => { onChange(value, 'career_ids') }}
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
                onChange={(value: string[]) => { onChange(value, 'levels') }}
                value={filter.levels}
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
                onChange={(value: string[]) => { onChange(value, 'district_ids') }}
                value={filter.district_ids}
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
                onChange={(value: string[]) => { onChange(value, 'forms') }}
                value={filter.forms || null}
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