'use client'
import { Input , GetProps  , SelectProps} from "antd";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
  console.log(info?.source, value)
};

export default function SearchBar() {
  return (
    <div className='flex h-[32px]'>
        <Search placeholder="Tìm Kiếm Việc" allowClear onSearch={onSearch} className='w-8/12'/>
        <div className="flex justify-end items-center w-4/12">
            <span>Sắp xếp: </span>
            <div className="flex items-center">
                <form className="ml-3">
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
  )
}
