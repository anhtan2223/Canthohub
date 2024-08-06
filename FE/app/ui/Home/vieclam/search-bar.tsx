import { Button } from "antd";
import Search from "@/app/ui/Master/search"
import Link from 'next/link'
import Sort from '@/app/ui/Master/sort'

export default function SearchBar({ isAdd = false }: {
  isAdd?: boolean
}) {
  const sortOtp = [
    { label: 'Mặc định', value: 'default' },
    { label: 'Mức Lương', value: 'salary' },
    { label: 'Công Ty', value: 'company' },
  ]
  return (
    <div className='flex h-[32px]'>
      <Search
        placeholder="Tìm Kiếm Việc"
        className='w-8/12'
      />
      {
        isAdd && <Link href='/baidang/vieclam'>
          <Button className="mx-3" type="primary">Tạo Mới</Button>
        </Link>
      }
      <div className="flex ml-3 justify-end items-center w-4/12">
        <div className="flex items-center">
          <Sort options={sortOtp} />
        </div>
      </div>
    </div>
  )
}
