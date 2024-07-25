'use client';

import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
export default function SearchWithSort({isAdd}: {isAdd?: boolean}) {
    const { Search } = Input;
    const router = useRouter();
    return (
        <>
        <div className="flex items-center">
            <Search placeholder="Tìm...." allowClear onSearch={() => {}} className="w-[200px]" />
            <div className="flex justify-end items-center">
                <div className="flex ml-3 items-center">
                    <span className="w-full">Sắp xếp:</span>
                    <form className="max-w-sm ml-3 mx-auto">
                        <select id="countries" className="custom-select">
                            <option defaultChecked>Mặc định</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </form>
                </div>
            </div>
            {isAdd ? <Button type="primary" className="mx-3" onClick={() => {router.push("/baidang/anuong/them");}}>Tạo mới</Button> : ''}
        </div>

        </>
    )
}