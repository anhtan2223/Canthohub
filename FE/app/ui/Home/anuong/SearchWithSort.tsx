'use client';

import Search from "@/app/ui/Master/search"
import Sort from "../../Master/sort";
export default function SearchWithSort({ isAdd }: { isAdd?: boolean }) {
    const sortOpt = [
        { label: 'Giá mặc định', value: 'default' },
        { label: 'Cao - Thấp', value: 'high-to-low' },
        { label: 'Thấp - Cao', value: 'low-to-high' }
    ]
    return (
            <div className="flex flex-grow flex items-center m-3">
                <Search placeholder="Tìm...." className="w-full flex-grow" />
                <div className="flex justify-end items-center">
                    <div className="flex ml-3 items-center">
                        <Sort options={sortOpt} />
                    </div>
                </div>
            </div>
    )
}