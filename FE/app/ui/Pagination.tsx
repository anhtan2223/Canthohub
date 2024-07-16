import { MdOutlineKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  query?: string;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, basePath, query, onPageChange }: PaginationProps) {
  const createPageURL = (page: number) => {
    const url = new URL(basePath, window.location.origin);
    url.searchParams.set('page', page.toString());
    if (query) {
      url.searchParams.set('query', query);
    }
    return url.toString().replace(window.location.origin, '');
  };

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="container mx-auto my-4">
      <div className="flex justify-end items-center mb-4">
        <nav className="flex justify-end items-center">
          <ul className="flex">
            <li>
              <Link href={createPageURL(currentPage - 1)}>
                <a
                  className={`px-3 py-1 w-full h-full rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${
                    currentPage <= 1 && 'pointer-events-none text-gray-300'
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <MdKeyboardArrowLeft />
                </a>
              </Link>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li className="ml-2" key={index}>
                <Link href={createPageURL(index + 1)}>
                  <a
                    className={`px-3 py-1 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${
                      currentPage === index + 1 && 'bg-indigo-500 text-white'
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </a>
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Link href={createPageURL(currentPage + 1)}>
                <a
                  className={`px-3 py-1 w-full h-full rounded-r-md bg-white text-sm font-medium text-gray-500 focus:rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${
                    currentPage >= totalPages && 'pointer-events-none text-gray-300'
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <MdOutlineKeyboardArrowRight />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-3">
          <select className="pr-8 py-1 border border-gray-300 rounded" onChange={(e) => handlePageChange(Number(e.target.value))}>
            <option value="10">10 / trang</option>
            <option value="20">20 / trang</option>
            <option value="30">30 / trang</option>
            <option value="40">40 / trang</option>
          </select>
        </div>
      </div>
    </div>
  );
}
