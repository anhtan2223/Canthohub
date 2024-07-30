'use client'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Job from '@/app/ui/Home/vieclam/Job'
import RealEstate from '@/app/ui/Home/nhatro/RealEstate'
import FoodPage from '@/app/ui/Home/anuong/FoodPage';
import News from '@/app/ui/Account/baidang/tintuc/news'
import { useSearchParams, useRouter } from 'next/navigation';


const App = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const items: TabsProps['items'] = [
    {
      key: 'news',
      label: 'Tin Tức',
      children: <News/>,
    },
    {
      key: 'hostel',
      label: 'Nhà Trọ',
      children: <RealEstate isAdd={true}></RealEstate>,
    },
    {
      key: 'job',
      label: 'Việc Làm',
      children: <Job isAdd={true}></Job>,
    },
    {
      key: 'food',
      label: 'Ăn Uống',
      children: <FoodPage isAdd={true}></FoodPage>,
    },
  ];


  const onChange = (keyActive : string) => {
    const params = new URLSearchParams(searchParams);
    params.set('type',keyActive)
    router.replace(`/baidang?type=${keyActive}`)
  }

  return <>
    <Tabs
      activeKey={searchParams.get('type') || "news"}
      items={items}
      size='small'
      className='pl-2 text-xs'
      onChange={onChange}
    />
  </>
};

export default App;