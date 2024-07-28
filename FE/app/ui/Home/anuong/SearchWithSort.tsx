'use client';

import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import Search from "@/app/ui/Master/search"
export default function SearchWithSort({isAdd}: {isAdd?: boolean}) {
    const router = useRouter();
    return (
        <>
        <div className="flex flex-grow items-center">
            <Search placeholder="Tìm...." className="w-full flex-grow" />
            <div className="flex justify-end items-center">
                <div className="flex ml-3 items-center">
                    <form className="max-w-sm mx-auto">
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
            {isAdd ? <Button type="primary" className="mx-3" onClick={() => {router.push("/baidang/anuong");}}>Tạo mới</Button> : ''}
        </div>

        </>
    )
}