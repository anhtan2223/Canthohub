// app/page.js (App Router)
// pages/index.js (Pages Router)

import dynamic from 'next/dynamic';
import Breadcrumbs from "@/app/ui/Master/breadcrums";

const FoodFormEdit = dynamic( () => import('@/app/ui/Home/anuong/FoodFormEdit' ), { ssr: false } );

function Home() {
    const user = {
        avatar: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp',
        name: 'Cô Minh Hiếu'
    }
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài đăng của tôi', href: '/mypost' },
        { label: ' Chỉnh sửa bài đăng', href: '/mypost/create', active: true },
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
    const mockFoodData = {
        resname: 'Delicious Restaurant',
        pricefrom: 100000,
        priceto: 300000,
        fblink: 'https://facebook.com/deliciousrestaurant',
        address1: '123 Food Street, Food City, FC 12345',
        description: '<p>Welcome to Delicious Restaurant! We offer a variety of dishes...</p>',
        files: [
            {
                uid: '-1',
                name: 'food1.png',
                url: 'https://example.com/food1.png'
            },
            {
                uid: '-2',
                name: 'food2.png',
                url: 'https://example.com/food2.png'
            }
        ],
        address: validAddress
    };
    
  return (
      <>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <div className="bg-white p-6 rounded-md space-y-6 flex-grow">
            <FoodFormEdit user={user} alladdress={validAddress} />
        </div>
      </>
  );
}

export default Home;
