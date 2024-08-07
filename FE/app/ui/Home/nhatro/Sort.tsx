'use client';

import Sort from "../../Master/sort";
export default function SearchWithSort({ isAdd }: { isAdd?: boolean }) {
    const sortOpt = [
        { label: 'Giá mặc định', value: 'default' },
        { label: 'Cao - Thấp', value: 'high-to-low' },
        { label: 'Thấp - Cao', value: 'low-to-high' }
    ]
    return (
        <div className="flex flex-grow flex items-center">
            <div className="flex justify-end items-center">
                <div className="mb-5 flex items-center">
                    <Sort options={sortOpt} />
                </div>
            </div>
        </div>
    )
}