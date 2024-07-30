import dynamic from 'next/dynamic';
import Breadcrumbs from "@ui/Master/breadcrums";
import { Suspense } from 'react';


const FoodFormCreate = dynamic( () => import('@ui/Account/baidang/anuong/FoodFormCreate' ), { ssr: false } );

function Home() {
    const user = {
        avatar: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp',
        name: 'Cô Minh Hiếu'
    }
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài đăng của tôi', href: '/baidang' },
        { label: ' Bài đăng ăn uống mới', href: '/baidang/them', active: true },
    ];
    const validAddress = {  
        id: 1,
        address: '123 Main St, Example City',
        ward: {
            id: 3,
            name: 'Ward 1',
            district: {
                id: 2,
                name: 'District 1',
                province: {
                    id: 1,
                    name: 'Province 1'
                }
            }
        },
        district: {
            id: 2,
            name: 'District 1',
            province: {
                id: 1,
                name: 'Province 1'
            }
        },
        province: {
            id: 1,
            name: 'Province 1'
        }
    };
  return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
            {/* <div className="bg-white p-6 rounded-md space-y-6 dark:text-dark-text dark:bg-dark flex-grow"> */}
                <FoodFormCreate user={user} alladdress={validAddress} />
            {/* </div> */}
        </Suspense>
      </>
  );
}

export default Home;
