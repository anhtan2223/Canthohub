'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pagination } from 'antd';

export default function MyPagination({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);
  const [pageSize, setPageSize] = useState<number>(Number(searchParams.get('pageSize')) || 10);

  useEffect(() => {
    setCurrentPage(Number(searchParams.get('page')) || 1);
    setPageSize(Number(searchParams.get('pageSize')) || 10);
  }, [searchParams]);

  const createPageURL = (pageNumber: number, pageSize: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    params.set('pageSize', pageSize.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
    const url = createPageURL(page, pageSize);
    window.history.pushState(null, '', createPageURL(page, pageSize));
    router.push(url);
  };

  return (
    <div className="flex justify-end mt-3 mr-2">
      <Pagination
        current={currentPage}
        total={100}
        onChange={handlePageChange}
        showSizeChanger={true}
        pageSize={pageSize}
        pageSizeOptions={['10', '20', '30', '40']}
        defaultCurrent={3}
        className="flex justify-end mt-3 mr-2"
      />
    </div>
  );
}
