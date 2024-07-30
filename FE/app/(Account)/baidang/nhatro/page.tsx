"use client"
import dynamic from 'next/dynamic';
import Breadcrumbs from "@ui/Master/breadcrums";


const FormAdd = dynamic(() => import('@/app/ui/Account/baidang/nhatro/FormAdd'), { ssr: false });

function Create() {
    const user = {
        avatar: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp',
        name: 'Cô Minh Hiếu'
    }
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài đăng của tôi', href: '/baidang' },
        { label: 'Tạo mới bài đăng nhà trọ', href: '/baidang/them', active: true },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="rounded-lg bg-white border p-5 flex-grow dark:text-dark-text dark:bg-dark-secondary dark:border-dark">
                <FormAdd user={user} />
            </div>
        </>
    );
}

export default Create;
