'use client'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Job from '@/app/ui/Home/timkiem/job'
import FoodPage from '@/app/ui/Home/timkiem/food'
import News from '@/app/ui/Home/timkiem/news'
import Hostel from '@/app/ui/Home/timkiem/hostel'
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

const App = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const items: TabsProps['items'] = [
    {
      key: 'news',
      label: 'Tin Tức',
      children: <News />,
    },
    {
      key: 'hostel',
      label: 'Nhà Trọ',
      children: <Hostel />,
    },
    {
      key: 'job',
      label: 'Việc Làm',
      children: <Job></Job>,
    },
    {
      key: 'food',
      label: 'Ăn Uống',
      children: <FoodPage></FoodPage>,
    },
  ];


  const onChange = (keyActive: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete('page')
    params.delete('size')
    params.set('type', keyActive)
    router.replace(`/timkiem?${params.toString()}`)
  }

  return <>
    <Suspense fallback={<div>Loading...</div>}>
      <Tabs
        activeKey={searchParams.get('type') || "news"}
        items={items}
        size='small'
        className='pl-2 text-xs'
        onChange={onChange}
      />
    </Suspense>
  </>
};

export default App;