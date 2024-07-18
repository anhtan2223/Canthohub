'use client'
import { Input } from "antd";
export default function SearchWithSort() {
    const { Search } = Input;
    return (
        <>
        <div className="flex items-center">
            <Search
                placeholder="Tìm kiếm"
                allowClear
                enterButton="Tìm"
                size="large"
                onSearch={()=>{}}
            />
            <div className="w-full ml-3 flex justify-start items-center">
                <span>Sắp xếp: </span>
                <div className="">
                    <form className="max-w-sm mx-auto ml-3">
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
        </div>

        </>
    )
}