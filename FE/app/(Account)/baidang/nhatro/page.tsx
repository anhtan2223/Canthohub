// "use client"
// import Head from 'next/head';
// import AddressSearch from '@/app/ui/Master/Map';
// import FormAdd from '@/app/ui/Home/nhatro/FormAdd';

// export default function Home() {
//     return (
//         <div className="bg-white border rounded-lg p-5">
//             <Head>
//                 <title>Address Search</title>
//                 <meta name="description" content="Search address and get lat/lon" />
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <main>
//                 <FormAdd />
//                 <AddressSearch />
//             </main>
//         </div>
//     );
// }


// app/page.js (App Router)
// pages/index.js (Pages Router)

import dynamic from 'next/dynamic';
import Breadcrumbs from "@/app/ui/Master/breadcrums";

const FoodFormCreate = dynamic( () => import('@/app/ui/Home/nhatro/FormAdd' ), { ssr: false } );

function Home() {
    const user = {
        avatar: 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-1-1.jpg.webp',
        name: 'Cô Minh Hiếu'
    }
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài đăng của tôi', href: '/baidang' },
        { label: 'Tạo mới bài đăng nhà trọ', href: '/baidang/them', active: true },
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
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <div className="bg-white p-6 rounded-md space-y-6 flex-grow">
            <FoodFormCreate user={user} alladdress={validAddress} />
        </div>
      </>
  );
}

export default Home;
