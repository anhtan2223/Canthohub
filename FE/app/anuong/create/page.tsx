// app/page.js (App Router)
// pages/index.js (Pages Router)

import dynamic from 'next/dynamic';
import Breadcrumbs from "@/app/ui/breadcrums";
import UserAvatar from '@/app/ui/anuong/UserAvatar';

const FoodForm = dynamic( () => import( '@/app/ui/anuong/FoodForm' ), { ssr: false } );

function Home() {
    const user = {
        avatar: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp',
        name: 'Cô Minh Hiếu'
    }
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài đăng của tôi', href: '/mypost' },
        { label: ' Bài đăng ăn uống mới', href: '/mypost/create', active: true },
    ];
  return (
      <>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <div className="bg-white px-6 pt-6 pb-10 rounded-md space-y-6 flex-grow my-4">
            <h2 className=' text-lg font-semibold'>Thêm điểm ăn uống</h2>
            <UserAvatar user={user}/>
            <FoodForm />
        </div>
      </>
  );
}

export default Home;
