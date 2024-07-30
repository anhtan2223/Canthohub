"use client"
import dynamic from 'next/dynamic';
import Breadcrumbs from "@/app/ui/Master/breadcrums";

const FormEdit = dynamic(() => import('@/app/ui/Account/baidang/nhatro/FormEdit'), { ssr: false });

function Edit() {
    const user = {
        avatar: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp',
        name: 'Cô Minh Hiếu'
    }
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài đăng của tôi', href: '/baidang' },
        { label: ' Chỉnh sửa bài đăng', href: '/baidang/sua', active: true },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="bg-white p-6 rounded-md space-y-6 flex-grow">
                <FormEdit user={user} />
            </div>
        </>
    );
}

export default Edit;
