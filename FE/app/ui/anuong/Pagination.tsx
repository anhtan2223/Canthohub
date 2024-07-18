'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pagination } from "antd";

export default function MyPagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);

  useEffect(() => {
    setCurrentPage(Number(searchParams.get('page')) || 1);
  }, [searchParams]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.history.pushState(null, '', createPageURL(page));
  };

  return (
    <div className="flex justify-end mt-3 mr-2">
        <Pagination
            current={currentPage}
            total={totalPages * 10}
            onChange={handlePageChange}
            showSizeChanger={false}
            defaultCurrent={3}
            className="flex justify-end mt-3 mr-2"
        />
    </div>
  );
}
