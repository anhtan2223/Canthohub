'use client';

import { Button, ConfigProvider, Input, theme as antdTheme } from "antd";
import { useRouter } from "next/navigation";
import Search from "@/app/ui/Master/search"
import Sort from "../../Master/sort";
export default function SearchWithSort({ isAdd }: { isAdd?: boolean }) {
    const router = useRouter();
    const sortOpt = [
        { label: 'Giá mặc định', value: 'default' },
        { label: 'Cao - Thấp', value: 'high-to-low' },
        { label: 'Thấp - Cao', value: 'low-to-high' }
    ]
    return (
        <>
            <div className="flex flex-grow items-center">
                <Search placeholder="Tìm...." className="w-full flex-grow" />
                <div className="flex justify-end items-center">
                    <div className="flex ml-3 items-center">
                        <Sort options={sortOpt} />
                    </div>
                </div>
                {isAdd ? <Button type="primary" className="mx-3" onClick={() => { router.push("/baidang/anuong"); }}>Tạo mới</Button> : ''}
            </div>

        </>
    )
}