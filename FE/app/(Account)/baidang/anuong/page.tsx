import dynamic from 'next/dynamic';
import Breadcrumbs from "@ui/Master/breadcrums";
import { Suspense } from 'react';
import AddressService from '@/app/services/AddressService';


const FoodFormCreate = dynamic( () => import('@ui/Account/baidang/anuong/FoodFormCreate' ), { ssr: false } );

async function Home() {
    const user = {
        avatar: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp',
        name: 'Cô Minh Hiếu'
    }
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài đăng của tôi', href: '/baidang' },
        { label: ' Bài đăng ăn uống mới', href: '/baidang/them', active: true },
    ];

  return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
            {/* <div className="bg-white p-6 rounded-md space-y-6 dark:text-dark-text dark:bg-dark flex-grow"> */}
                <FoodFormCreate user={user}/>
            {/* </div> */}
        </Suspense>
      </>
  );
}

export default Home;
