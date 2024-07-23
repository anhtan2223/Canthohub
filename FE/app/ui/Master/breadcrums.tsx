import { clsx } from 'clsx';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="block">
      <p className="my-4">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={breadcrumb.href} className="ml-2">
            {breadcrumb.active ? (
              <span className="text-medium-blue">{breadcrumb.label}</span>
            ) : (
              <Link href={breadcrumb.href} className=''>
                <span className="hover:underline">{breadcrumb.label}</span>
              </Link>
            )}
            {index < breadcrumbs.length - 1 && <span className="text-gray-500"> / </span>}
          </span>
        ))}
      </p>
    </nav>
  );
}
