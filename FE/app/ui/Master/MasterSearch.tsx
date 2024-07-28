'use client'
import { Input, GetProps } from "antd";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Suspense } from 'react';
    
export default function SearchWithParams(
    {
        placeholder,
        className,
    }:
        {
            placeholder?: string
            className?: string
        }
) {
    type SearchProps = GetProps<typeof Input.Search>;
    const { Search } = Input;
    const searchParams = useSearchParams();
    const { replace } = useRouter();


    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }
        replace(`/timkiem?${params.toString()}`);
    };
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Search
                placeholder={placeholder}
                allowClear
                onSearch={onSearch}
                className={className}
                defaultValue={searchParams.get('search') || ''}
            />
        </Suspense>
        
    );
}